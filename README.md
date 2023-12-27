# Consumer example for test-automation-framework

In this respostiry there are examples of End-to-End tests (with Playwright), API tests (with mocha & chai for GraphQL), and Performance test (with k6), importing and showcasing the functionality in https://github.com/mohsenny/test-automation-framework

## Installation
```bash
npm i -and run build    # PowerShell
npm i && run build      # UNIX and CMD
```

## Run e2e tests
```bash
npm run test:e2e
```
### Results
![r1](https://github.com/mohsenny/taf-consumer/assets/1129811/46b31d4c-3927-465d-ab7d-7f2a3bc84784)

## Run GraphQL API tests
```bash
npm run test:api-graphql
```
### Results
![r2](https://github.com/mohsenny/taf-consumer/assets/1129811/82471ecd-b1fb-4225-891e-867e70a4af25)


## Run Performance tests (With k6)

There are a few stepts before running the tests:

### Windows Setup

1. Set your values for the environmental variables in [local.ps1](./scripts/setup/local.ps1).
2. Source the PowerShell script to set up the environment and dependencies:

   ```powershell
   . .\tests\performance\setup\local.ps1
   ```

### Unix-based OS Setup

1. Set your values for the environmental variables in [local.sh](./scripts/setup/local.sh).
2. Make the script executable and source it:

   ```bash
   chmod +x chmod +x ./tests/performance/setup/local.sh && source ./tests/performance/setup/local.sh
   ```

### Run Tests

```bash
npm run test:performance:local path/to/test/file.js
```

### Results

The test output will include various metrics:

![Test output](https://github.com/mohsenny/taf-consumer/assets/1129811/d773b8e0-5e18-451c-95bd-88fd92a9330d)

To help you understand each of these metrics better:

- `data_received`: The total amount of data received from the target server during the test. It's shown in kilobytes and the rate per second.

- `data_sent`: The total amount of data sent to the target server. This includes all HTTP request data sent by k6.

- `group_duration`: The average, minimum, median, maximum, 90th percentile, and 95th percentile durations of the named groups in your test script. Groups are a way to organize scenarios in k6.

- `http_req_blocked`: The time spent blocked before initiating the request. This can include time spent waiting for a free TCP connection from a connection pool if you're hitting connection limits.

- `http_req_connecting`: The time spent establishing TCP connections to the server. If this is high, it could indicate network issues or server overload.

- `http_req_duration`: The total time for the request. This includes sending time, waiting time, and receiving time. The detailed breakdown is provided for expected responses (expected_response).

- `http_req_failed`: The percentage of failed requests. Ideally, this should be 0%.

- `http_req_receiving`: The time spent receiving the response from the server after the initial request was sent.

- `http_req_sending`: The time spent sending the HTTP request to the server. This typically is a small number.

- `http_req_tls_handshaking`: Time spent performing the TLS handshake. If your request uses HTTPS, this includes the time taken to negotiate the SSL/TLS session.

- `http_req_waiting`: The time spent waiting for a response from the server (also known as Time to First Byte, TTFB). This doesn't include the time taken to download the response body.

- `http_reqs`: The total number of HTTP requests made during the entire test.

- `iteration_duration`: The time it takes to complete one full iteration of the main function in your script.

- `iterations`: The total number of times the main function was executed.

- `vus`: The number of Virtual Users (VUs) actively executing during the current test step.

- `vus_max`: The maximum number of concurrently active VUs during the test.
