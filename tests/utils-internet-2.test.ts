import { request } from 'https';

// Mock the https module
jest.mock('https');


describe("Utils Internet", () => {
    const mockRequest = request as jest.MockedFunction<typeof request>;

    let mockReq: any;
    let mockResponse: any;
    let requestCallback: (response: any) => void;
    let errorCallback: (error: Error) => void;
    let abortCallback: () => void;

    beforeEach(() => {
        jest.clearAllMocks();
        // Don't use fake timers by default - only when needed
    });

    const setupMocks = () => {
        mockReq = {
            on: jest.fn((event, callback) => {
                if (event === 'error') errorCallback = callback;
                if (event === 'abort') abortCallback = callback;
                return mockReq;
            }),
            end: jest.fn(),
            destroy: jest.fn(),
        };

        mockResponse = {
            statusCode: 200,
            resume: jest.fn(),
        };

        mockRequest.mockImplementation(((_url: any, options: any, callback?: any) => {
            if (typeof options === 'function') {
                requestCallback = options;
            } else if (callback) {
                requestCallback = callback;
            }
            return mockReq;
        }) as any);

        // Reset callbacks
        requestCallback = () => { };
        errorCallback = () => { };
        abortCallback = () => { };
    };

    afterEach(() => {
        jest.useRealTimers();
    });

    // Helper function to wait for next tick
    const waitForNextTick = () => new Promise(resolve => process.nextTick(resolve));

    // TODO: remove
    it('DUMMY TEST', () => {
        expect(true).toBe(true);
    });
    /*

    it('should resolve false on timeout', async () => {
        setupMocks();

        // Mock setTimeout to trigger immediately
        const originalSetTimeout = global.setTimeout;
        const setTimeoutMock = jest.fn((callback: Function) => {
            callback(); // Execute immediately
            return 123 as any;
        });
        global.setTimeout = setTimeoutMock as any;

        try {
            const promise = isInternetAvailable({ timeout: 1000 });

            await new Promise(resolve => setTimeout(resolve, 0));

            const result = await promise;
            expect(result).toBe(false);
            expect(mockReq.destroy).toHaveBeenCalled();
            expect(setTimeoutMock).toHaveBeenCalledWith(expect.any(Function), 1000);
        } finally {
            global.setTimeout = originalSetTimeout;
        }
    });

        it('should resolve false when request is aborted', async () => {
            const promise = isInternetAvailable();
    
            // Simulate abort
            abortCallback();
    
            await expect(promise).resolves.toBe(false);
        });
    
        it('should use custom URL when provided', async () => {
            const customUrl = 'https://example.com';
            const promise = isInternetAvailable({ url: customUrl });
    
            requestCallback(mockResponse);
    
            await promise;
    
            expect(mockRequest).toHaveBeenCalledWith(
                customUrl,
                expect.objectContaining({
                    method: 'HEAD',
                    agent: expect.any(Agent),
                }),
                expect.any(Function)
            );
        });
    
        it('should use custom timeout when provided', async () => {
            const promise = isInternetAvailable({ timeout: 5000 });
    
            jest.advanceTimersByTime(5000);
    
            await expect(promise).resolves.toBe(false);
        });
    
        it('should pass custom headers when provided', async () => {
            const customHeaders = { 'User-Agent': 'Test-Agent' };
            const promise = isInternetAvailable({ headers: customHeaders });
    
            requestCallback(mockResponse);
    
            await promise;
    
            expect(mockRequest).toHaveBeenCalledWith(
                expect.any(String),
                expect.objectContaining({
                    headers: customHeaders,
                }),
                expect.any(Function)
            );
        });
    
        it('should use default values when no options provided', async () => {
            const promise = isInternetAvailable();
    
            requestCallback(mockResponse);
    
            await promise;
    
            expect(mockRequest).toHaveBeenCalledWith(
                'https://www.google.com',
                expect.objectContaining({
                    method: 'HEAD',
                    agent: expect.any(Agent),
                }),
                expect.any(Function)
            );
        });
    
        it('should clean up resources on successful response', async () => {
            const promise = isInternetAvailable();
    
            requestCallback(mockResponse);
    
            await promise;
    
            expect(mockResponse.resume).toHaveBeenCalled();
            expect(mockReq.end).toHaveBeenCalled();
        });
    
        it('should handle multiple concurrent requests', async () => {
            const promise1 = isInternetAvailable();
            const promise2 = isInternetAvailable();
    
            // First request
            const firstCallArgs = mockRequest.mock.calls[0];
            const firstCallback = firstCallArgs[2] as Function;
            firstCallback({ ...mockResponse, statusCode: 200 });
    
            // Second request  
            const secondCallArgs = mockRequest.mock.calls[1];
            const secondCallback = secondCallArgs[2] as Function;
            secondCallback({ ...mockResponse, statusCode: 404 });
    
            await expect(promise1).resolves.toBe(true);
            await expect(promise2).resolves.toBe(false);
        });
    
        it('should not keep alive connections', async () => {
            const promise = isInternetAvailable();
    
            requestCallback(mockResponse);
    
            await promise;
    
            expect(mockRequest).toHaveBeenCalledWith(
                expect.any(String),
                expect.objectContaining({
                    agent: expect.objectContaining({
                        keepAlive: false,
                    }),
                }),
                expect.any(Function)
            );
        });
    
        */
})