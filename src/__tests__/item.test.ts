import { saveItem } from '../item';
import { IPCMessage } from '../entity';

// Mock console.log to track its calls
const mockConsoleLog = jest.spyOn(console, 'log').mockImplementation();

describe('saveItem', () => {
  beforeEach(() => {
    // Clear mock before each test
    mockConsoleLog.mockClear();
  });

  afterAll(() => {
    // Restore console.log after all tests
    mockConsoleLog.mockRestore();
  });

  it('should create an IPC message with single item', () => {
    const testItem = { id: 1, name: 'Test Item' };
    saveItem(testItem);

    const expectedMessage = new IPCMessage('data', [testItem]);
    expect(mockConsoleLog).toHaveBeenCalledWith(expectedMessage.toJSON());
  });

  it('should create an IPC message with multiple items', () => {
    const testItems = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' }
    ];
    saveItem(...testItems);

    const expectedMessage = new IPCMessage('data', testItems);
    expect(mockConsoleLog).toHaveBeenCalledWith(expectedMessage.toJSON());
  });
});

describe('IPCMessage', () => {
  it('should create a valid IPC message', () => {
    const payload = { id: 1, name: 'Test' };
    const message = new IPCMessage('data', payload);

    const expected = JSON.stringify({
      type: 'data',
      payload: payload,
      ipc: true
    });

    expect(message.toJSON()).toBe(expected);
  });

  it('should handle array payload', () => {
    const payload = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' }
    ];
    const message = new IPCMessage('data', payload);

    const expected = JSON.stringify({
      type: 'data',
      payload: payload,
      ipc: true
    });

    expect(message.toJSON()).toBe(expected);
  });
}); 