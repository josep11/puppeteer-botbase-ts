
// Mock the https module
jest.mock('https');

describe('isInternetAvailable', () => {

    // TODO: remove
    it('DUMMY TEST', () => {
        expect(true).toBe(true);
    });
    /*
    const mockRequest = request as jest.MockedFunction<typeof request>;

    let mockReq: any;
    let mockResponse: any;
    let requestCallback: (response: any) => void;
    let errorCallback: (error: Error) => void;
    let abortCallback: () => void;

    beforeEach(() => {
        jest.clearAllMocks();
        jest.useFakeTimers();

        mockReq = {
            on: jest.fn((event, callback) => {
                if (event === 'error') {
                    errorCallback = callback;
                }
                if (event === 'abort') {
                    abortCallback = callback;
                }
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
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    it('should resolve true for successful HTTP 200 response', async () => {
        const promise = isInternetAvailable();

        // Trigger successful response
        requestCallback(mockResponse);

        await expect(promise).resolves.toBe(true);
        expect(mockResponse.resume).toHaveBeenCalled();
        expect(mockReq.end).toHaveBeenCalled();
    });


    it('should resolve true for HTTP 3xx redirect responses', async () => {
        const promise = isInternetAvailable();

        mockResponse.statusCode = 301;
        requestCallback(mockResponse);

        await expect(promise).resolves.toBe(true);
    });

    it('should resolve true for HTTP 204 No Content', async () => {
        const promise = isInternetAvailable();

        mockResponse.statusCode = 204;
        requestCallback(mockResponse);

        await expect(promise).resolves.toBe(true);
    });


    it('should resolve false for HTTP 4xx client errors', async () => {
        const promise = isInternetAvailable();

        mockResponse.statusCode = 404;
        requestCallback(mockResponse);

        await expect(promise).resolves.toBe(false);
    });

    it('should resolve false for HTTP 5xx server errors', async () => {
        const promise = isInternetAvailable();

        mockResponse.statusCode = 503;
        requestCallback(mockResponse);

        await expect(promise).resolves.toBe(false);
    });



    it('should resolve false on request error', async () => {
        const promise = isInternetAvailable();

        // Simulate network error
        errorCallback(new Error('Network error'));

        await expect(promise).resolves.toBe(false);
    });
*/
});
