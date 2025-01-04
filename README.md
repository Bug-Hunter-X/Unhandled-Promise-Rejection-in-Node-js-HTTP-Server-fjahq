# Unhandled Promise Rejection in Node.js HTTP Server

This repository demonstrates a common yet often overlooked error in Node.js: unhandled promise rejections within an HTTP server.  The server starts without issue but crashes silently when an unhandled promise rejection is encountered during request processing.  This bug is subtle and can be difficult to debug without proper error handling.

## The Problem

The `bug.js` file contains a simple HTTP server.  However, it lacks proper error handling for promise rejections.  This means if any asynchronous operation within the request handler throws an error, the server will crash without any clear indication of the problem. This is particularly problematic in production environments.

## The Solution

`bugSolution.js` demonstrates how to properly handle promise rejections using `process.on('unhandledRejection', ...)` This event listener catches unhandled rejections, logs the error details, and prevents the server from crashing unexpectedly.  Best practices also include adding `try...catch` blocks within asynchronous operations to catch and handle potential errors at their source. 