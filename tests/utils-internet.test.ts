import { connect } from 'http2';
import { isInternetAvailable } from '../src/utils-internet';

// Mock http2 module
jest.mock('http2');

describe('isInternetAvailable', () => {
    const mockConnect = connect as jest.MockedFunction<typeof connect>;
    let mockClient: any;

    beforeEach(() => {
        mockClient = {
            destroy: jest.fn(),
            setTimeout: jest.fn(),
            on: jest.fn(),
        };
        mockConnect.mockReturnValue(mockClient);
        jest.clearAllMocks();
    });

    it('should resolve true when connection succeeds', async () => {
        // Simulate successful connection
        setTimeout(() => {
            const connectCallback = mockConnect.mock.calls[0][2] as Function;
            connectCallback();
        }, 10);

        const result = await isInternetAvailable();
        expect(result).toBe(true);
        expect(mockClient.destroy).toHaveBeenCalled();
    });

    it('should resolve false on timeout', async () => {
        const timeout = 100;

        setTimeout(() => {
            const timeoutHandler = mockClient.on.mock.calls.find(
                call => call[0] === 'timeout'
            )?.[1];
            timeoutHandler?.();
        }, 50);

        const result = await isInternetAvailable({ timeout });
        expect(result).toBe(false);
    });

    it('should resolve false on error', async () => {
        setTimeout(() => {
            const errorHandler = mockClient.on.mock.calls.find(
                call => call[0] === 'error'
            )?.[1];
            errorHandler?.();
        }, 10);

        const result = await isInternetAvailable();
        expect(result).toBe(false);
    });

    // This test demonstrates the race condition
    it('might have race conditions between events', async () => {
        // Simulate multiple events firing around the same time
        setTimeout(() => {
            const connectCallback = mockConnect.mock.calls[0][2] as Function;
            const errorHandler = mockClient.on.mock.calls.find(
                call => call[0] === 'error'
            )?.[1];

            // Both fire nearly simultaneously
            connectCallback();
            errorHandler();
        }, 10);

        const result = await isInternetAvailable();
        // This could be true OR false depending on which event handler executes first
        console.log('Race condition result:', result);
    });
});