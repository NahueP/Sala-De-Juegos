(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-juegos-juegos-module~components-listados-listados-module"],{

/***/ "2chq":
/*!**********************************************************************************!*\
  !*** ./node_modules/@firebase/firestore/dist/esm5/prebuilt-9a1b1ae6-c205ad6b.js ***!
  \**********************************************************************************/
/*! exports provided: $, B, G, H, L, O, Q, X, Y, _, e, k, m, n, q, s, t, v, x, z */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$", function() { return wc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return _c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return kc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return Cc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return Ic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return gc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return Sc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return Lc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return Oc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return ea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Fc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return na; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return Vc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return Ec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return qc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return Mc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return ha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return mc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return xc; });
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/util */ "qOnz");
/* harmony import */ var _firebase_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/logger */ "q/0M");
/* harmony import */ var _firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/webchannel-wrapper */ "x7I3");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "mrSG");








/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * `ListenSequence` is a monotonic sequence. It is initialized with a minimum value to
 * exceed. All subsequent calls to next will return increasing values. If provided with a
 * `SequenceNumberSyncer`, it will additionally bump its next value when told of a new value, as
 * well as write out sequence numbers that it produces via `next()`.
 */ var _ = /** @class */ function() {
    function t(t, e) {
        var n = this;
        this.previousValue = t, e && (e.sequenceNumberHandler = function(t) {
            return n.t(t);
        }, this.i = function(t) {
            return e.writeSequenceNumber(t);
        });
    }
    return t.prototype.t = function(t) {
        return this.previousValue = Math.max(t, this.previousValue), this.previousValue;
    }, t.prototype.next = function() {
        var t = ++this.previousValue;
        return this.i && this.i(t), t;
    }, t;
}();

_.o = -1;

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var E = {
    // Causes are copied from:
    // https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
    /** Not an error; returned on success. */
    OK: "ok",
    /** The operation was cancelled (typically by the caller). */
    CANCELLED: "cancelled",
    /** Unknown error or an error from a different error domain. */
    UNKNOWN: "unknown",
    /**
     * Client specified an invalid argument. Note that this differs from
     * FAILED_PRECONDITION. INVALID_ARGUMENT indicates arguments that are
     * problematic regardless of the state of the system (e.g., a malformed file
     * name).
     */
    INVALID_ARGUMENT: "invalid-argument",
    /**
     * Deadline expired before operation could complete. For operations that
     * change the state of the system, this error may be returned even if the
     * operation has completed successfully. For example, a successful response
     * from a server could have been delayed long enough for the deadline to
     * expire.
     */
    DEADLINE_EXCEEDED: "deadline-exceeded",
    /** Some requested entity (e.g., file or directory) was not found. */
    NOT_FOUND: "not-found",
    /**
     * Some entity that we attempted to create (e.g., file or directory) already
     * exists.
     */
    ALREADY_EXISTS: "already-exists",
    /**
     * The caller does not have permission to execute the specified operation.
     * PERMISSION_DENIED must not be used for rejections caused by exhausting
     * some resource (use RESOURCE_EXHAUSTED instead for those errors).
     * PERMISSION_DENIED must not be used if the caller can not be identified
     * (use UNAUTHENTICATED instead for those errors).
     */
    PERMISSION_DENIED: "permission-denied",
    /**
     * The request does not have valid authentication credentials for the
     * operation.
     */
    UNAUTHENTICATED: "unauthenticated",
    /**
     * Some resource has been exhausted, perhaps a per-user quota, or perhaps the
     * entire file system is out of space.
     */
    RESOURCE_EXHAUSTED: "resource-exhausted",
    /**
     * Operation was rejected because the system is not in a state required for
     * the operation's execution. For example, directory to be deleted may be
     * non-empty, an rmdir operation is applied to a non-directory, etc.
     *
     * A litmus test that may help a service implementor in deciding
     * between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE:
     *  (a) Use UNAVAILABLE if the client can retry just the failing call.
     *  (b) Use ABORTED if the client should retry at a higher-level
     *      (e.g., restarting a read-modify-write sequence).
     *  (c) Use FAILED_PRECONDITION if the client should not retry until
     *      the system state has been explicitly fixed. E.g., if an "rmdir"
     *      fails because the directory is non-empty, FAILED_PRECONDITION
     *      should be returned since the client should not retry unless
     *      they have first fixed up the directory by deleting files from it.
     *  (d) Use FAILED_PRECONDITION if the client performs conditional
     *      REST Get/Update/Delete on a resource and the resource on the
     *      server does not match the condition. E.g., conflicting
     *      read-modify-write on the same resource.
     */
    FAILED_PRECONDITION: "failed-precondition",
    /**
     * The operation was aborted, typically due to a concurrency issue like
     * sequencer check failures, transaction aborts, etc.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */
    ABORTED: "aborted",
    /**
     * Operation was attempted past the valid range. E.g., seeking or reading
     * past end of file.
     *
     * Unlike INVALID_ARGUMENT, this error indicates a problem that may be fixed
     * if the system state changes. For example, a 32-bit file system will
     * generate INVALID_ARGUMENT if asked to read at an offset that is not in the
     * range [0,2^32-1], but it will generate OUT_OF_RANGE if asked to read from
     * an offset past the current file size.
     *
     * There is a fair bit of overlap between FAILED_PRECONDITION and
     * OUT_OF_RANGE. We recommend using OUT_OF_RANGE (the more specific error)
     * when it applies so that callers who are iterating through a space can
     * easily look for an OUT_OF_RANGE error to detect when they are done.
     */
    OUT_OF_RANGE: "out-of-range",
    /** Operation is not implemented or not supported/enabled in this service. */
    UNIMPLEMENTED: "unimplemented",
    /**
     * Internal errors. Means some invariants expected by underlying System has
     * been broken. If you see one of these errors, Something is very broken.
     */
    INTERNAL: "internal",
    /**
     * The service is currently unavailable. This is a most likely a transient
     * condition and may be corrected by retrying with a backoff.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */
    UNAVAILABLE: "unavailable",
    /** Unrecoverable data loss or corruption. */
    DATA_LOSS: "data-loss"
}, T = /** @class */ function(t) {
    /** @hideconstructor */
    function e(e, n) {
        var r = this;
        return (r = t.call(this, n) || this).code = e, r.message = n, r.name = "FirebaseError", 
        // HACK: We write a toString property directly because Error is not a real
        // class and so inheritance does not work correctly. We could alternatively
        // do the same "back-door inheritance" trick that FirebaseError does.
        r.toString = function() {
            return r.name + ": [code=" + r.code + "]: " + r.message;
        }, r;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e;
}(Error), S = new _firebase_logger__WEBPACK_IMPORTED_MODULE_1__["Logger"]("@firebase/firestore");

/** An error returned by a Firestore operation. */
// Helper methods are needed because variables can't be exported as read/write
function N() {
    return S.logLevel;
}

/**
 * Sets the verbosity of Cloud Firestore logs (debug, error, or silent).
 *
 * @param logLevel - The verbosity you set for activity and error logging. Can
 *   be any of the following values:
 *
 *   <ul>
 *     <li>`debug` for the most verbose logging level, primarily for
 *     debugging.</li>
 *     <li>`error` to log errors only.</li>
 *     <li><code>`silent` to turn off logging.</li>
 *   </ul>
 */ function D(t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    if (S.logLevel <= _firebase_logger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].DEBUG) {
        var r = e.map(x);
        S.debug.apply(S, Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__spreadArray"])([ "Firestore (8.3.2): " + t ], r));
    }
}

function A(t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    if (S.logLevel <= _firebase_logger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].ERROR) {
        var r = e.map(x);
        S.error.apply(S, Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__spreadArray"])([ "Firestore (8.3.2): " + t ], r));
    }
}

function k(t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    if (S.logLevel <= _firebase_logger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].WARN) {
        var r = e.map(x);
        S.warn.apply(S, Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__spreadArray"])([ "Firestore (8.3.2): " + t ], r));
    }
}

/**
 * Converts an additional log parameter to a string representation.
 */ function x(t) {
    if ("string" == typeof t) return t;
    try {
        return e = t, JSON.stringify(e);
    } catch (e) {
        // Converting to JSON failed, just log the object directly
        return t;
    }
    /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    /** Formats an object as a JSON string, suitable for logging. */    var e;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Unconditionally fails, throwing an Error with the given message.
 * Messages are stripped in production builds.
 *
 * Returns `never` and can be used in expressions:
 * @example
 * let futureVar = fail('not implemented yet');
 */ function C(t) {
    void 0 === t && (t = "Unexpected state");
    // Log the failure in addition to throw an exception, just in case the
    // exception is swallowed.
        var e = "FIRESTORE (8.3.2) INTERNAL ASSERTION FAILED: " + t;
    // NOTE: We don't use FirestoreError here because these are internal failures
    // that cannot be handled by the user. (Also it would create a circular
    // dependency between the error and assert modules which doesn't work.)
        throw A(e), new Error(e)
    /**
 * Fails if the given assertion condition is false, throwing an Error with the
 * given message if it did.
 *
 * Messages are stripped in production builds.
 */;
}

function R(t, e) {
    t || C();
}

/**
 * Casts `obj` to `T`. In non-production builds, verifies that `obj` is an
 * instance of `T` before casting.
 */ function O(t, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
e) {
    return t;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Generates `nBytes` of random bytes.
 *
 * If `nBytes < 0` , an error will be thrown.
 */ function L(t) {
    // Polyfills for IE and WebWorker by using `self` and `msCrypto` when `crypto` is not available.
    var e = 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    "undefined" != typeof self && (self.crypto || self.msCrypto), n = new Uint8Array(t);
    if (e && "function" == typeof e.getRandomValues) e.getRandomValues(n); else 
    // Falls back to Math.random
    for (var r = 0; r < t; r++) n[r] = Math.floor(256 * Math.random());
    return n;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var P = /** @class */ function() {
    function t() {}
    return t.u = function() {
        for (
        // Alphanumeric characters
        var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = Math.floor(256 / t.length) * t.length, n = ""
        // The largest byte value that is a multiple of `char.length`.
        ; n.length < 20; ) for (var r = L(40), i = 0; i < r.length; ++i) 
        // Only accept values that are [0, maxMultiple), this ensures they can
        // be evenly mapped to indices of `chars` via a modulo operation.
        n.length < 20 && r[i] < e && (n += t.charAt(r[i] % t.length));
        return n;
    }, t;
}();

function M(t, e) {
    return t < e ? -1 : t > e ? 1 : 0;
}

/** Helper to compare arrays using isEqual(). */ function F(t, e, n) {
    return t.length === e.length && t.every((function(t, r) {
        return n(t, e[r]);
    }));
}

/**
 * Returns the immediate lexicographically-following string. This is useful to
 * construct an inclusive range for indexeddb iterators.
 */ function V(t) {
    // Return the input string, with an additional NUL byte appended.
    return t + "\0";
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// The earliest date supported by Firestore timestamps (0001-01-01T00:00:00Z).
/**
 * A `Timestamp` represents a point in time independent of any time zone or
 * calendar, represented as seconds and fractions of seconds at nanosecond
 * resolution in UTC Epoch time.
 *
 * It is encoded using the Proleptic Gregorian Calendar which extends the
 * Gregorian calendar backwards to year one. It is encoded assuming all minutes
 * are 60 seconds long, i.e. leap seconds are "smeared" so that no leap second
 * table is needed for interpretation. Range is from 0001-01-01T00:00:00Z to
 * 9999-12-31T23:59:59.999999999Z.
 *
 * For examples and further specifications, refer to the
 * {@link https://github.com/google/protobuf/blob/master/src/google/protobuf/timestamp.proto | Timestamp definition}.
 */ var q = /** @class */ function() {
    /**
     * Creates a new timestamp.
     *
     * @param seconds - The number of seconds of UTC time since Unix epoch
     *     1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
     *     9999-12-31T23:59:59Z inclusive.
     * @param nanoseconds - The non-negative fractions of a second at nanosecond
     *     resolution. Negative second values with fractions must still have
     *     non-negative nanoseconds values that count forward in time. Must be
     *     from 0 to 999,999,999 inclusive.
     */
    function t(t, e) {
        if (this.seconds = t, this.nanoseconds = e, e < 0) throw new T(E.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
        if (e >= 1e9) throw new T(E.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
        if (t < -62135596800) throw new T(E.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
        // This will break in the year 10,000.
                if (t >= 253402300800) throw new T(E.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
    }
    /**
     * Creates a new timestamp with the current date, with millisecond precision.
     *
     * @returns a new timestamp representing the current date.
     */    return t.now = function() {
        return t.fromMillis(Date.now());
    }, 
    /**
     * Creates a new timestamp from the given date.
     *
     * @param date - The date to initialize the `Timestamp` from.
     * @returns A new `Timestamp` representing the same point in time as the given
     *     date.
     */
    t.fromDate = function(e) {
        return t.fromMillis(e.getTime());
    }, 
    /**
     * Creates a new timestamp from the given number of milliseconds.
     *
     * @param milliseconds - Number of milliseconds since Unix epoch
     *     1970-01-01T00:00:00Z.
     * @returns A new `Timestamp` representing the same point in time as the given
     *     number of milliseconds.
     */
    t.fromMillis = function(e) {
        var n = Math.floor(e / 1e3);
        return new t(n, 1e6 * (e - 1e3 * n));
    }, 
    /**
     * Converts a `Timestamp` to a JavaScript `Date` object. This conversion causes
     * a loss of precision since `Date` objects only support millisecond precision.
     *
     * @returns JavaScript `Date` object representing the same point in time as
     *     this `Timestamp`, with millisecond precision.
     */
    t.prototype.toDate = function() {
        return new Date(this.toMillis());
    }, 
    /**
     * Converts a `Timestamp` to a numeric timestamp (in milliseconds since
     * epoch). This operation causes a loss of precision.
     *
     * @returns The point in time corresponding to this timestamp, represented as
     *     the number of milliseconds since Unix epoch 1970-01-01T00:00:00Z.
     */
    t.prototype.toMillis = function() {
        return 1e3 * this.seconds + this.nanoseconds / 1e6;
    }, t.prototype._compareTo = function(t) {
        return this.seconds === t.seconds ? M(this.nanoseconds, t.nanoseconds) : M(this.seconds, t.seconds);
    }, 
    /**
     * Returns true if this `Timestamp` is equal to the provided one.
     *
     * @param other - The `Timestamp` to compare against.
     * @returns true if this `Timestamp` is equal to the provided one.
     */
    t.prototype.isEqual = function(t) {
        return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds;
    }, t.prototype.toString = function() {
        return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
    }, t.prototype.toJSON = function() {
        return {
            seconds: this.seconds,
            nanoseconds: this.nanoseconds
        };
    }, 
    /**
     * Converts this object to a primitive string, which allows Timestamp objects to be compared
     * using the `>`, `<=`, `>=` and `>` operators.
     */
    t.prototype.valueOf = function() {
        // This method returns a string of the form <seconds>.<nanoseconds> where <seconds> is
        // translated to have a non-negative value and both <seconds> and <nanoseconds> are left-padded
        // with zeroes to be a consistent length. Strings with this format then have a lexiographical
        // ordering that matches the expected ordering. The <seconds> translation is done to avoid
        // having a leading negative sign (i.e. a leading '-' character) in its string representation,
        // which would affect its lexiographical ordering.
        var t = this.seconds - -62135596800;
        // Note: Up to 12 decimal digits are required to represent all valid 'seconds' values.
                return String(t).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
    }, t;
}(), U = /** @class */ function() {
    function t(t) {
        this.timestamp = t;
    }
    return t.fromTimestamp = function(e) {
        return new t(e);
    }, t.min = function() {
        return new t(new q(0, 0));
    }, t.prototype.compareTo = function(t) {
        return this.timestamp._compareTo(t.timestamp);
    }, t.prototype.isEqual = function(t) {
        return this.timestamp.isEqual(t.timestamp);
    }, 
    /** Returns a number representation of the version for use in spec tests. */ t.prototype.toMicroseconds = function() {
        // Convert to microseconds.
        return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
    }, t.prototype.toString = function() {
        return "SnapshotVersion(" + this.timestamp.toString() + ")";
    }, t.prototype.toTimestamp = function() {
        return this.timestamp;
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A version of a document in Firestore. This corresponds to the version
 * timestamp, such as update_time or read_time.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function B(t) {
    var e = 0;
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
    return e;
}

function j(t, e) {
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
}

function K(t) {
    for (var e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
    return !0;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Path represents an ordered sequence of string segments.
 */ var G = /** @class */ function() {
    function t(t, e, n) {
        void 0 === e ? e = 0 : e > t.length && C(), void 0 === n ? n = t.length - e : n > t.length - e && C(), 
        this.segments = t, this.offset = e, this.len = n;
    }
    return Object.defineProperty(t.prototype, "length", {
        get: function() {
            return this.len;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.isEqual = function(e) {
        return 0 === t.comparator(this, e);
    }, t.prototype.child = function(e) {
        var n = this.segments.slice(this.offset, this.limit());
        return e instanceof t ? e.forEach((function(t) {
            n.push(t);
        })) : n.push(e), this.construct(n);
    }, 
    /** The index of one past the last segment of the path. */ t.prototype.limit = function() {
        return this.offset + this.length;
    }, t.prototype.popFirst = function(t) {
        return t = void 0 === t ? 1 : t, this.construct(this.segments, this.offset + t, this.length - t);
    }, t.prototype.popLast = function() {
        return this.construct(this.segments, this.offset, this.length - 1);
    }, t.prototype.firstSegment = function() {
        return this.segments[this.offset];
    }, t.prototype.lastSegment = function() {
        return this.get(this.length - 1);
    }, t.prototype.get = function(t) {
        return this.segments[this.offset + t];
    }, t.prototype.isEmpty = function() {
        return 0 === this.length;
    }, t.prototype.isPrefixOf = function(t) {
        if (t.length < this.length) return !1;
        for (var e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
        return !0;
    }, t.prototype.isImmediateParentOf = function(t) {
        if (this.length + 1 !== t.length) return !1;
        for (var e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
        return !0;
    }, t.prototype.forEach = function(t) {
        for (var e = this.offset, n = this.limit(); e < n; e++) t(this.segments[e]);
    }, t.prototype.toArray = function() {
        return this.segments.slice(this.offset, this.limit());
    }, t.comparator = function(t, e) {
        for (var n = Math.min(t.length, e.length), r = 0; r < n; r++) {
            var i = t.get(r), o = e.get(r);
            if (i < o) return -1;
            if (i > o) return 1;
        }
        return t.length < e.length ? -1 : t.length > e.length ? 1 : 0;
    }, t;
}(), z = /** @class */ function(t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.construct = function(t, n, r) {
        return new e(t, n, r);
    }, e.prototype.canonicalString = function() {
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
        return this.toArray().join("/");
    }, e.prototype.toString = function() {
        return this.canonicalString();
    }, 
    /**
     * Creates a resource path from the given slash-delimited string. If multiple
     * arguments are provided, all components are combined. Leading and trailing
     * slashes from all components are ignored.
     */
    e.fromString = function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
                for (var r = [], i = 0, o = t; i < o.length; i++) {
            var s = o[i];
            if (s.indexOf("//") >= 0) throw new T(E.INVALID_ARGUMENT, "Invalid segment (" + s + "). Paths must not contain // in them.");
            // Strip leading and traling slashed.
                        r.push.apply(r, s.split("/").filter((function(t) {
                return t.length > 0;
            })));
        }
        return new e(r);
    }, e.emptyPath = function() {
        return new e([]);
    }, e;
}(G), Q = /^[_a-zA-Z][_a-zA-Z0-9]*$/, W = /** @class */ function(t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.construct = function(t, n, r) {
        return new e(t, n, r);
    }, 
    /**
     * Returns true if the string could be used as a segment in a field path
     * without escaping.
     */
    e.isValidIdentifier = function(t) {
        return Q.test(t);
    }, e.prototype.canonicalString = function() {
        return this.toArray().map((function(t) {
            return t = t.replace(/\\/g, "\\\\").replace(/`/g, "\\`"), e.isValidIdentifier(t) || (t = "`" + t + "`"), 
            t;
        })).join(".");
    }, e.prototype.toString = function() {
        return this.canonicalString();
    }, 
    /**
     * Returns true if this field references the key of a document.
     */
    e.prototype.isKeyField = function() {
        return 1 === this.length && "__name__" === this.get(0);
    }, 
    /**
     * The field designating the key of a document.
     */
    e.keyField = function() {
        return new e([ "__name__" ]);
    }, 
    /**
     * Parses a field string from the given server-formatted string.
     *
     * - Splitting the empty string is not allowed (for now at least).
     * - Empty segments within the string (e.g. if there are two consecutive
     *   separators) are not allowed.
     *
     * TODO(b/37244157): we should make this more strict. Right now, it allows
     * non-identifier path components, even if they aren't escaped.
     */
    e.fromServerFormat = function(t) {
        for (var n = [], r = "", i = 0, o = function() {
            if (0 === r.length) throw new T(E.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
            n.push(r), r = "";
        }, s = !1; i < t.length; ) {
            var u = t[i];
            if ("\\" === u) {
                if (i + 1 === t.length) throw new T(E.INVALID_ARGUMENT, "Path has trailing escape character: " + t);
                var a = t[i + 1];
                if ("\\" !== a && "." !== a && "`" !== a) throw new T(E.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t);
                r += a, i += 2;
            } else "`" === u ? (s = !s, i++) : "." !== u || s ? (r += u, i++) : (o(), i++);
        }
        if (o(), s) throw new T(E.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
        return new e(n);
    }, e.emptyPath = function() {
        return new e([]);
    }, e;
}(G), H = /** @class */ function() {
    function t(t) {
        this.fields = t, 
        // TODO(dimond): validation of FieldMask
        // Sort the field mask to support `FieldMask.isEqual()` and assert below.
        t.sort(W.comparator)
        /**
     * Verifies that `fieldPath` is included by at least one field in this field
     * mask.
     *
     * This is an O(n) operation, where `n` is the size of the field mask.
     */;
    }
    return t.prototype.covers = function(t) {
        for (var e = 0, n = this.fields; e < n.length; e++) {
            if (n[e].isPrefixOf(t)) return !0;
        }
        return !1;
    }, t.prototype.isEqual = function(t) {
        return F(this.fields, t.fields, (function(t, e) {
            return t.isEqual(e);
        }));
    }, t;
}(), Y = /** @class */ function() {
    function t(t) {
        this.binaryString = t;
    }
    return t.fromBase64String = function(e) {
        return new t(atob(e));
    }, t.fromUint8Array = function(e) {
        return new t(
        /**
 * Helper function to convert an Uint8array to a binary string.
 */
        function(t) {
            for (var e = "", n = 0; n < t.length; ++n) e += String.fromCharCode(t[n]);
            return e;
        }(e));
    }, t.prototype.toBase64 = function() {
        return t = this.binaryString, btoa(t);
        /** Converts a binary string to a Base64 encoded string. */        var t;
        /** True if and only if the Base64 conversion functions are available. */    }, 
    t.prototype.toUint8Array = function() {
        return function(t) {
            for (var e = new Uint8Array(t.length), n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
            return e;
        }(this.binaryString);
    }, t.prototype.approximateByteSize = function() {
        return 2 * this.binaryString.length;
    }, t.prototype.compareTo = function(t) {
        return M(this.binaryString, t.binaryString);
    }, t.prototype.isEqual = function(t) {
        return this.binaryString === t.binaryString;
    }, t;
}();

/**
 * A slash-separated path for navigating resources (documents and collections)
 * within Firestore.
 */ Y.EMPTY_BYTE_STRING = new Y("");

var X = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);

/**
 * Converts the possible Proto values for a timestamp value into a "seconds and
 * nanos" representation.
 */ function J(t) {
    // The json interface (for the browser) will return an iso timestamp string,
    // while the proto js library (for node) will return a
    // google.protobuf.Timestamp instance.
    if (R(!!t), "string" == typeof t) {
        // The date string can have higher precision (nanos) than the Date class
        // (millis), so we do some custom parsing here.
        // Parse the nanos right out of the string.
        var e = 0, n = X.exec(t);
        if (R(!!n), n[1]) {
            // Pad the fraction out to 9 digits (nanos).
            var r = n[1];
            r = (r + "000000000").substr(0, 9), e = Number(r);
        }
        // Parse the date to get the seconds.
                var i = new Date(t);
        return {
            seconds: Math.floor(i.getTime() / 1e3),
            nanos: e
        };
    }
    return {
        seconds: $(t.seconds),
        nanos: $(t.nanos)
    };
}

/**
 * Converts the possible Proto types for numbers into a JavaScript number.
 * Returns 0 if the value is not numeric.
 */ function $(t) {
    // TODO(bjornick): Handle int64 greater than 53 bits.
    return "number" == typeof t ? t : "string" == typeof t ? Number(t) : 0;
}

/** Converts the possible Proto types for Blobs into a ByteString. */ function Z(t) {
    return "string" == typeof t ? Y.fromBase64String(t) : Y.fromUint8Array(t);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Represents a locally-applied ServerTimestamp.
 *
 * Server Timestamps are backed by MapValues that contain an internal field
 * `__type__` with a value of `server_timestamp`. The previous value and local
 * write time are stored in its `__previous_value__` and `__local_write_time__`
 * fields respectively.
 *
 * Notes:
 * - ServerTimestampValue instances are created as the result of applying a
 *   transform. They can only exist in the local view of a document. Therefore
 *   they do not need to be parsed or serialized.
 * - When evaluated locally (e.g. for snapshot.data()), they by default
 *   evaluate to `null`. This behavior can be configured by passing custom
 *   FieldValueOptions to value().
 * - With respect to other ServerTimestampValues, they sort by their
 *   localWriteTime.
 */ function tt(t) {
    var e, n;
    return "server_timestamp" === (null === (n = ((null === (e = null == t ? void 0 : t.mapValue) || void 0 === e ? void 0 : e.fields) || {}).__type__) || void 0 === n ? void 0 : n.stringValue);
}

/**
 * Creates a new ServerTimestamp proto value (using the internal format).
 */
/**
 * Returns the value of the field before this ServerTimestamp was set.
 *
 * Preserving the previous values allows the user to display the last resoled
 * value until the backend responds with the timestamp.
 */ function et(t) {
    var e = t.mapValue.fields.__previous_value__;
    return tt(e) ? et(e) : e;
}

/**
 * Returns the local time at which this timestamp was first set.
 */ function nt(t) {
    var e = J(t.mapValue.fields.__local_write_time__.timestampValue);
    return new q(e.seconds, e.nanos);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Sentinel value that sorts before any Mutation Batch ID. */
/**
 * Returns whether a variable is either undefined or null.
 */ function rt(t) {
    return null == t;
}

/** Returns whether the value represents -0. */ function it(t) {
    // Detect if the value is -0.0. Based on polyfill from
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
    return 0 === t && 1 / t == -1 / 0;
}

/**
 * Returns whether a value is an integer and in the safe integer range
 * @param value - The value to test for being an integer and in the safe range
 */ function ot(t) {
    return "number" == typeof t && Number.isInteger(t) && !it(t) && t <= Number.MAX_SAFE_INTEGER && t >= Number.MIN_SAFE_INTEGER;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var st = /** @class */ function() {
    function t(t) {
        this.path = t;
    }
    return t.fromPath = function(e) {
        return new t(z.fromString(e));
    }, t.fromName = function(e) {
        return new t(z.fromString(e).popFirst(5));
    }, 
    /** Returns true if the document is in the specified collectionId. */ t.prototype.hasCollectionId = function(t) {
        return this.path.length >= 2 && this.path.get(this.path.length - 2) === t;
    }, t.prototype.isEqual = function(t) {
        return null !== t && 0 === z.comparator(this.path, t.path);
    }, t.prototype.toString = function() {
        return this.path.toString();
    }, t.comparator = function(t, e) {
        return z.comparator(t.path, e.path);
    }, t.isDocumentKey = function(t) {
        return t.length % 2 == 0;
    }, 
    /**
     * Creates and returns a new document key with the given segments.
     *
     * @param segments - The segments of the path to the document
     * @returns A new instance of DocumentKey
     */
    t.fromSegments = function(e) {
        return new t(new z(e.slice()));
    }, t;
}();

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Extracts the backend's type order for the provided value. */ function ut(t) {
    return "nullValue" in t ? 0 /* NullValue */ : "booleanValue" in t ? 1 /* BooleanValue */ : "integerValue" in t || "doubleValue" in t ? 2 /* NumberValue */ : "timestampValue" in t ? 3 /* TimestampValue */ : "stringValue" in t ? 5 /* StringValue */ : "bytesValue" in t ? 6 /* BlobValue */ : "referenceValue" in t ? 7 /* RefValue */ : "geoPointValue" in t ? 8 /* GeoPointValue */ : "arrayValue" in t ? 9 /* ArrayValue */ : "mapValue" in t ? tt(t) ? 4 /* ServerTimestampValue */ : 10 /* ObjectValue */ : C();
}

/** Tests `left` and `right` for equality based on the backend semantics. */ function at(t, e) {
    var n = ut(t);
    if (n !== ut(e)) return !1;
    switch (n) {
      case 0 /* NullValue */ :
        return !0;

      case 1 /* BooleanValue */ :
        return t.booleanValue === e.booleanValue;

      case 4 /* ServerTimestampValue */ :
        return nt(t).isEqual(nt(e));

      case 3 /* TimestampValue */ :
        return function(t, e) {
            if ("string" == typeof t.timestampValue && "string" == typeof e.timestampValue && t.timestampValue.length === e.timestampValue.length) 
            // Use string equality for ISO 8601 timestamps
            return t.timestampValue === e.timestampValue;
            var n = J(t.timestampValue), r = J(e.timestampValue);
            return n.seconds === r.seconds && n.nanos === r.nanos;
        }(t, e);

      case 5 /* StringValue */ :
        return t.stringValue === e.stringValue;

      case 6 /* BlobValue */ :
        return function(t, e) {
            return Z(t.bytesValue).isEqual(Z(e.bytesValue));
        }(t, e);

      case 7 /* RefValue */ :
        return t.referenceValue === e.referenceValue;

      case 8 /* GeoPointValue */ :
        return function(t, e) {
            return $(t.geoPointValue.latitude) === $(e.geoPointValue.latitude) && $(t.geoPointValue.longitude) === $(e.geoPointValue.longitude);
        }(t, e);

      case 2 /* NumberValue */ :
        return function(t, e) {
            if ("integerValue" in t && "integerValue" in e) return $(t.integerValue) === $(e.integerValue);
            if ("doubleValue" in t && "doubleValue" in e) {
                var n = $(t.doubleValue), r = $(e.doubleValue);
                return n === r ? it(n) === it(r) : isNaN(n) && isNaN(r);
            }
            return !1;
        }(t, e);

      case 9 /* ArrayValue */ :
        return F(t.arrayValue.values || [], e.arrayValue.values || [], at);

      case 10 /* ObjectValue */ :
        return function(t, e) {
            var n = t.mapValue.fields || {}, r = e.mapValue.fields || {};
            if (B(n) !== B(r)) return !1;
            for (var i in n) if (n.hasOwnProperty(i) && (void 0 === r[i] || !at(n[i], r[i]))) return !1;
            return !0;
        }(t, e);

      default:
        return C();
    }
}

function ct(t, e) {
    return void 0 !== (t.values || []).find((function(t) {
        return at(t, e);
    }));
}

function ht(t, e) {
    var n = ut(t), r = ut(e);
    if (n !== r) return M(n, r);
    switch (n) {
      case 0 /* NullValue */ :
        return 0;

      case 1 /* BooleanValue */ :
        return M(t.booleanValue, e.booleanValue);

      case 2 /* NumberValue */ :
        return function(t, e) {
            var n = $(t.integerValue || t.doubleValue), r = $(e.integerValue || e.doubleValue);
            return n < r ? -1 : n > r ? 1 : n === r ? 0 : 
            // one or both are NaN.
            isNaN(n) ? isNaN(r) ? 0 : -1 : 1;
        }(t, e);

      case 3 /* TimestampValue */ :
        return ft(t.timestampValue, e.timestampValue);

      case 4 /* ServerTimestampValue */ :
        return ft(nt(t), nt(e));

      case 5 /* StringValue */ :
        return M(t.stringValue, e.stringValue);

      case 6 /* BlobValue */ :
        return function(t, e) {
            var n = Z(t), r = Z(e);
            return n.compareTo(r);
        }(t.bytesValue, e.bytesValue);

      case 7 /* RefValue */ :
        return function(t, e) {
            for (var n = t.split("/"), r = e.split("/"), i = 0; i < n.length && i < r.length; i++) {
                var o = M(n[i], r[i]);
                if (0 !== o) return o;
            }
            return M(n.length, r.length);
        }(t.referenceValue, e.referenceValue);

      case 8 /* GeoPointValue */ :
        return function(t, e) {
            var n = M($(t.latitude), $(e.latitude));
            return 0 !== n ? n : M($(t.longitude), $(e.longitude));
        }(t.geoPointValue, e.geoPointValue);

      case 9 /* ArrayValue */ :
        return function(t, e) {
            for (var n = t.values || [], r = e.values || [], i = 0; i < n.length && i < r.length; ++i) {
                var o = ht(n[i], r[i]);
                if (o) return o;
            }
            return M(n.length, r.length);
        }(t.arrayValue, e.arrayValue);

      case 10 /* ObjectValue */ :
        return function(t, e) {
            var n = t.fields || {}, r = Object.keys(n), i = e.fields || {}, o = Object.keys(i);
            // Even though MapValues are likely sorted correctly based on their insertion
            // order (e.g. when received from the backend), local modifications can bring
            // elements out of order. We need to re-sort the elements to ensure that
            // canonical IDs are independent of insertion order.
                        r.sort(), o.sort();
            for (var s = 0; s < r.length && s < o.length; ++s) {
                var u = M(r[s], o[s]);
                if (0 !== u) return u;
                var a = ht(n[r[s]], i[o[s]]);
                if (0 !== a) return a;
            }
            return M(r.length, o.length);
        }(t.mapValue, e.mapValue);

      default:
        throw C();
    }
}

function ft(t, e) {
    if ("string" == typeof t && "string" == typeof e && t.length === e.length) return M(t, e);
    var n = J(t), r = J(e), i = M(n.seconds, r.seconds);
    return 0 !== i ? i : M(n.nanos, r.nanos);
}

function lt(t) {
    return dt(t);
}

function dt(t) {
    return "nullValue" in t ? "null" : "booleanValue" in t ? "" + t.booleanValue : "integerValue" in t ? "" + t.integerValue : "doubleValue" in t ? "" + t.doubleValue : "timestampValue" in t ? function(t) {
        var e = J(t);
        return "time(" + e.seconds + "," + e.nanos + ")";
    }(t.timestampValue) : "stringValue" in t ? t.stringValue : "bytesValue" in t ? Z(t.bytesValue).toBase64() : "referenceValue" in t ? (n = t.referenceValue, 
    st.fromName(n).toString()) : "geoPointValue" in t ? "geo(" + (e = t.geoPointValue).latitude + "," + e.longitude + ")" : "arrayValue" in t ? function(t) {
        for (var e = "[", n = !0, r = 0, i = t.values || []; r < i.length; r++) {
            n ? n = !1 : e += ",", e += dt(i[r]);
        }
        return e + "]";
    }(t.arrayValue) : "mapValue" in t ? function(t) {
        for (
        // Iteration order in JavaScript is not guaranteed. To ensure that we generate
        // matching canonical IDs for identical maps, we need to sort the keys.
        var e = "{", n = !0, r = 0, i = Object.keys(t.fields || {}).sort(); r < i.length; r++) {
            var o = i[r];
            n ? n = !1 : e += ",", e += o + ":" + dt(t.fields[o]);
        }
        return e + "}";
    }(t.mapValue) : C();
    var e, n;
}

function pt(t, e) {
    return {
        referenceValue: "projects/" + t.projectId + "/databases/" + t.database + "/documents/" + e.path.canonicalString()
    };
}

/** Returns true if `value` is an IntegerValue . */ function yt(t) {
    return !!t && "integerValue" in t;
}

/** Returns true if `value` is a DoubleValue. */
/** Returns true if `value` is an ArrayValue. */ function vt(t) {
    return !!t && "arrayValue" in t;
}

/** Returns true if `value` is a NullValue. */ function mt(t) {
    return !!t && "nullValue" in t;
}

/** Returns true if `value` is NaN. */ function gt(t) {
    return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue));
}

/** Returns true if `value` is a MapValue. */ function wt(t) {
    return !!t && "mapValue" in t;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An ObjectValue represents a MapValue in the Firestore Proto and offers the
 * ability to add and remove fields (via the ObjectValueBuilder).
 */ var bt = /** @class */ function() {
    function t(t) {
        /**
         * A nested map that contains the accumulated changes that haven't yet been
         * applied to `partialValue`. Values can either be `Value` protos, Map<String,
         * Object> values (to represent additional nesting) or `null` (to represent
         * field deletes).
         */
        this.overlayMap = new Map, this.partialValue = t;
    }
    return t.empty = function() {
        return new t({
            mapValue: {}
        });
    }, 
    /**
     * Returns the value at the given path or null.
     *
     * @param path - the path to search
     * @returns The value at the path or null if the path is not set.
     */
    t.prototype.field = function(e) {
        return t.extractNestedValue(this.buildProto(), e);
    }, 
    /** Returns the full protobuf representation. */ t.prototype.toProto = function() {
        return this.field(W.emptyPath());
    }, 
    /**
     * Sets the field to the provided value.
     *
     * @param path - The field path to set.
     * @param value - The value to set.
     */
    t.prototype.set = function(t, e) {
        this.setOverlay(t, e);
    }, 
    /**
     * Sets the provided fields to the provided values.
     *
     * @param data - A map of fields to values (or null for deletes).
     */
    t.prototype.setAll = function(t) {
        var e = this;
        t.forEach((function(t, n) {
            t ? e.set(n, t) : e.delete(n);
        }));
    }, 
    /**
     * Removes the field at the specified path. If there is no field at the
     * specified path, nothing is changed.
     *
     * @param path - The field path to remove.
     */
    t.prototype.delete = function(t) {
        this.setOverlay(t, null);
    }, t.prototype.isEqual = function(t) {
        return at(this.buildProto(), t.buildProto());
    }, 
    /**
     * Adds `value` to the overlay map at `path`. Creates nested map entries if
     * needed.
     */
    t.prototype.setOverlay = function(t, e) {
        for (var n = this.overlayMap, r = 0; r < t.length - 1; ++r) {
            var i = t.get(r), o = n.get(i);
            o instanceof Map ? 
            // Re-use a previously created map
            n = o : o && 10 /* ObjectValue */ === ut(o) ? (
            // Convert the existing Protobuf MapValue into a map
            o = new Map(Object.entries(o.mapValue.fields || {})), n.set(i, o), n = o) : (
            // Create an empty map to represent the current nesting level
            o = new Map, n.set(i, o), n = o);
        }
        n.set(t.lastSegment(), e);
    }, 
    /**
     * Applies any overlays from `currentOverlays` that exist at `currentPath`
     * and returns the merged data at `currentPath` (or null if there were no
     * changes).
     *
     * @param currentPath - The path at the current nesting level. Can be set to
     * FieldValue.emptyPath() to represent the root.
     * @param currentOverlays - The overlays at the current nesting level in the
     * same format as `overlayMap`.
     * @returns The merged data at `currentPath` or null if no modifications
     * were applied.
     */
    t.prototype.applyOverlay = function(e, n) {
        var r = this, i = !1, o = t.extractNestedValue(this.partialValue, e), s = wt(o) ? // If there is already data at the current path, base our
        Object.assign({}, o.mapValue.fields) : {};
        return n.forEach((function(t, n) {
            if (t instanceof Map) {
                var o = r.applyOverlay(e.child(n), t);
                null != o && (s[n] = o, i = !0);
            } else null !== t ? (s[n] = t, i = !0) : s.hasOwnProperty(n) && (delete s[n], i = !0);
        })), i ? {
            mapValue: {
                fields: s
            }
        } : null;
    }, 
    /**
     * Builds the Protobuf that backs this ObjectValue.
     *
     * This method applies any outstanding modifications and memoizes the result.
     * Further invocations are based on this memoized result.
     */
    t.prototype.buildProto = function() {
        var t = this.applyOverlay(W.emptyPath(), this.overlayMap);
        return null != t && (this.partialValue = t, this.overlayMap.clear()), this.partialValue;
    }, t.extractNestedValue = function(t, e) {
        if (e.isEmpty()) return t;
        for (var n = t, r = 0; r < e.length - 1; ++r) {
            if (!n.mapValue.fields) return null;
            if (!wt(n = n.mapValue.fields[e.get(r)])) return null;
        }
        return (n = (n.mapValue.fields || {})[e.lastSegment()]) || null;
    }, t.prototype.clone = function() {
        return new t(this.buildProto());
    }, t;
}();

/**
 * Returns a FieldMask built from all fields in a MapValue.
 */ function It(t) {
    var e = [];
    return j(t.fields || {}, (function(t, n) {
        var r = new W([ t ]);
        if (wt(n)) {
            var i = It(n.mapValue).fields;
            if (0 === i.length) 
            // Preserve the empty map by adding it to the FieldMask.
            e.push(r); else 
            // For nested and non-empty ObjectValues, add the FieldPath of the
            // leaf nodes.
            for (var o = 0, s = i; o < s.length; o++) {
                var u = s[o];
                e.push(r.child(u));
            }
        } else 
        // For nested and non-empty ObjectValues, add the FieldPath of the leaf
        // nodes.
        e.push(r);
    })), new H(e)
    /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    /**
 * Represents a document in Firestore with a key, version, data and whether it
 * has local mutations applied to it.
 *
 * Documents can transition between states via `convertToFoundDocument()`,
 * `convertToNoDocument()` and `convertToUnknownDocument()`. If a document does
 * not transition to one of these states even after all mutations have been
 * applied, `isValidDocument()` returns false and the document should be removed
 * from all views.
 */;
}

var _t = /** @class */ function() {
    function t(t, e, n, r, i) {
        this.key = t, this.documentType = e, this.version = n, this.data = r, this.documentState = i
        /**
     * Creates a document with no known version or data, but which can serve as
     * base document for mutations.
     */;
    }
    return t.newInvalidDocument = function(e) {
        return new t(e, 0 /* INVALID */ , U.min(), bt.empty(), 0 /* SYNCED */);
    }, 
    /**
     * Creates a new document that is known to exist with the given data at the
     * given version.
     */
    t.newFoundDocument = function(e, n, r) {
        return new t(e, 1 /* FOUND_DOCUMENT */ , n, r, 0 /* SYNCED */);
    }, 
    /** Creates a new document that is known to not exist at the given version. */ t.newNoDocument = function(e, n) {
        return new t(e, 2 /* NO_DOCUMENT */ , n, bt.empty(), 0 /* SYNCED */);
    }, 
    /**
     * Creates a new document that is known to exist at the given version but
     * whose data is not known (e.g. a document that was updated without a known
     * base document).
     */
    t.newUnknownDocument = function(e, n) {
        return new t(e, 3 /* UNKNOWN_DOCUMENT */ , n, bt.empty(), 2 /* HAS_COMMITTED_MUTATIONS */);
    }, 
    /**
     * Changes the document type to indicate that it exists and that its version
     * and data are known.
     */
    t.prototype.convertToFoundDocument = function(t, e) {
        return this.version = t, this.documentType = 1 /* FOUND_DOCUMENT */ , this.data = e, 
        this.documentState = 0 /* SYNCED */ , this;
    }, 
    /**
     * Changes the document type to indicate that it doesn't exist at the given
     * version.
     */
    t.prototype.convertToNoDocument = function(t) {
        return this.version = t, this.documentType = 2 /* NO_DOCUMENT */ , this.data = bt.empty(), 
        this.documentState = 0 /* SYNCED */ , this;
    }, 
    /**
     * Changes the document type to indicate that it exists at a given version but
     * that its data is not known (e.g. a document that was updated without a known
     * base document).
     */
    t.prototype.convertToUnknownDocument = function(t) {
        return this.version = t, this.documentType = 3 /* UNKNOWN_DOCUMENT */ , this.data = bt.empty(), 
        this.documentState = 2 /* HAS_COMMITTED_MUTATIONS */ , this;
    }, t.prototype.setHasCommittedMutations = function() {
        return this.documentState = 2 /* HAS_COMMITTED_MUTATIONS */ , this;
    }, t.prototype.setHasLocalMutations = function() {
        return this.documentState = 1 /* HAS_LOCAL_MUTATIONS */ , this;
    }, Object.defineProperty(t.prototype, "hasLocalMutations", {
        get: function() {
            return 1 /* HAS_LOCAL_MUTATIONS */ === this.documentState;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "hasCommittedMutations", {
        get: function() {
            return 2 /* HAS_COMMITTED_MUTATIONS */ === this.documentState;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "hasPendingWrites", {
        get: function() {
            return this.hasLocalMutations || this.hasCommittedMutations;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.isValidDocument = function() {
        return 0 /* INVALID */ !== this.documentType;
    }, t.prototype.isFoundDocument = function() {
        return 1 /* FOUND_DOCUMENT */ === this.documentType;
    }, t.prototype.isNoDocument = function() {
        return 2 /* NO_DOCUMENT */ === this.documentType;
    }, t.prototype.isUnknownDocument = function() {
        return 3 /* UNKNOWN_DOCUMENT */ === this.documentType;
    }, t.prototype.isEqual = function(e) {
        return e instanceof t && this.key.isEqual(e.key) && this.version.isEqual(e.version) && this.documentType === e.documentType && this.documentState === e.documentState && this.data.isEqual(e.data);
    }, t.prototype.clone = function() {
        return new t(this.key, this.documentType, this.version, this.data.clone(), this.documentState);
    }, t.prototype.toString = function() {
        return "Document(" + this.key + ", " + this.version + ", " + JSON.stringify(this.data.toProto()) + ", {documentType: " + this.documentType + "}), {documentState: " + this.documentState + "})";
    }, t;
}(), Et = function(t, e, n, r, i, o, s) {
    void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), 
    void 0 === i && (i = null), void 0 === o && (o = null), void 0 === s && (s = null), 
    this.path = t, this.collectionGroup = e, this.orderBy = n, this.filters = r, this.limit = i, 
    this.startAt = o, this.endAt = s, this.h = null;
};

/**
 * Compares the value for field `field` in the provided documents. Throws if
 * the field does not exist in both documents.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Visible for testing
/**
 * Initializes a Target with a path and optional additional query constraints.
 * Path must currently be empty if this is a collection group query.
 *
 * NOTE: you should always construct `Target` from `Query.toTarget` instead of
 * using this factory method, because `Query` provides an implicit `orderBy`
 * property.
 */
function Tt(t, e, n, r, i, o, s) {
    return void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), 
    void 0 === i && (i = null), void 0 === o && (o = null), void 0 === s && (s = null), 
    new Et(t, e, n, r, i, o, s);
}

function St(t) {
    var e = O(t);
    if (null === e.h) {
        var n = e.path.canonicalString();
        null !== e.collectionGroup && (n += "|cg:" + e.collectionGroup), n += "|f:", n += e.filters.map((function(t) {
            return function(t) {
                // TODO(b/29183165): Technically, this won't be unique if two values have
                // the same description, such as the int 3 and the string "3". So we should
                // add the types in here somehow, too.
                return t.field.canonicalString() + t.op.toString() + lt(t.value);
            }(t);
        })).join(","), n += "|ob:", n += e.orderBy.map((function(t) {
            return function(t) {
                // TODO(b/29183165): Make this collision robust.
                return t.field.canonicalString() + t.dir;
            }(t);
        })).join(","), rt(e.limit) || (n += "|l:", n += e.limit), e.startAt && (n += "|lb:", 
        n += Vt(e.startAt)), e.endAt && (n += "|ub:", n += Vt(e.endAt)), e.h = n;
    }
    return e.h;
}

function Nt(t, e) {
    if (t.limit !== e.limit) return !1;
    if (t.orderBy.length !== e.orderBy.length) return !1;
    for (var n = 0; n < t.orderBy.length; n++) if (!Ut(t.orderBy[n], e.orderBy[n])) return !1;
    if (t.filters.length !== e.filters.length) return !1;
    for (var r = 0; r < t.filters.length; r++) if (i = t.filters[r], o = e.filters[r], 
    i.op !== o.op || !i.field.isEqual(o.field) || !at(i.value, o.value)) return !1;
    var i, o;
    return t.collectionGroup === e.collectionGroup && !!t.path.isEqual(e.path) && !!jt(t.startAt, e.startAt) && jt(t.endAt, e.endAt);
}

function Dt(t) {
    return st.isDocumentKey(t.path) && null === t.collectionGroup && 0 === t.filters.length;
}

var At = /** @class */ function(t) {
    function e(e, n, r) {
        var i = this;
        return (i = t.call(this) || this).field = e, i.op = n, i.value = r, i;
    }
    /**
     * Creates a filter based on the provided arguments.
     */    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.create = function(t, n, r) {
        return t.isKeyField() ? "in" /* IN */ === n || "not-in" /* NOT_IN */ === n ? this.l(t, n, r) : new kt(t, n, r) : "array-contains" /* ARRAY_CONTAINS */ === n ? new Ot(t, r) : "in" /* IN */ === n ? new Lt(t, r) : "not-in" /* NOT_IN */ === n ? new Pt(t, r) : "array-contains-any" /* ARRAY_CONTAINS_ANY */ === n ? new Mt(t, r) : new e(t, n, r);
    }, e.l = function(t, e, n) {
        return "in" /* IN */ === e ? new xt(t, n) : new Ct(t, n);
    }, e.prototype.matches = function(t) {
        var e = t.data.field(this.field);
        // Types do not have to match in NOT_EQUAL filters.
                return "!=" /* NOT_EQUAL */ === this.op ? null !== e && this.m(ht(e, this.value)) : null !== e && ut(this.value) === ut(e) && this.m(ht(e, this.value));
        // Only compare types with matching backend order (such as double and int).
        }, e.prototype.m = function(t) {
        switch (this.op) {
          case "<" /* LESS_THAN */ :
            return t < 0;

          case "<=" /* LESS_THAN_OR_EQUAL */ :
            return t <= 0;

          case "==" /* EQUAL */ :
            return 0 === t;

          case "!=" /* NOT_EQUAL */ :
            return 0 !== t;

          case ">" /* GREATER_THAN */ :
            return t > 0;

          case ">=" /* GREATER_THAN_OR_EQUAL */ :
            return t >= 0;

          default:
            return C();
        }
    }, e.prototype.g = function() {
        return [ "<" /* LESS_THAN */ , "<=" /* LESS_THAN_OR_EQUAL */ , ">" /* GREATER_THAN */ , ">=" /* GREATER_THAN_OR_EQUAL */ , "!=" /* NOT_EQUAL */ , "not-in" /* NOT_IN */ ].indexOf(this.op) >= 0;
    }, e;
}((function() {}));

var kt = /** @class */ function(t) {
    function e(e, n, r) {
        var i = this;
        return (i = t.call(this, e, n, r) || this).key = st.fromName(r.referenceValue), 
        i;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.matches = function(t) {
        var e = st.comparator(t.key, this.key);
        return this.m(e);
    }, e;
}(At), xt = /** @class */ function(t) {
    function e(e, n) {
        var r = this;
        return (r = t.call(this, e, "in" /* IN */ , n) || this).keys = Rt("in" /* IN */ , n), 
        r;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.matches = function(t) {
        return this.keys.some((function(e) {
            return e.isEqual(t.key);
        }));
    }, e;
}(At), Ct = /** @class */ function(t) {
    function e(e, n) {
        var r = this;
        return (r = t.call(this, e, "not-in" /* NOT_IN */ , n) || this).keys = Rt("not-in" /* NOT_IN */ , n), 
        r;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.matches = function(t) {
        return !this.keys.some((function(e) {
            return e.isEqual(t.key);
        }));
    }, e;
}(At);

/** Filter that matches on key fields within an array. */ function Rt(t, e) {
    var n;
    return ((null === (n = e.arrayValue) || void 0 === n ? void 0 : n.values) || []).map((function(t) {
        return st.fromName(t.referenceValue);
    }));
}

/** A Filter that implements the array-contains operator. */ var Ot = /** @class */ function(t) {
    function e(e, n) {
        return t.call(this, e, "array-contains" /* ARRAY_CONTAINS */ , n) || this;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.matches = function(t) {
        var e = t.data.field(this.field);
        return vt(e) && ct(e.arrayValue, this.value);
    }, e;
}(At), Lt = /** @class */ function(t) {
    function e(e, n) {
        return t.call(this, e, "in" /* IN */ , n) || this;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.matches = function(t) {
        var e = t.data.field(this.field);
        return null !== e && ct(this.value.arrayValue, e);
    }, e;
}(At), Pt = /** @class */ function(t) {
    function e(e, n) {
        return t.call(this, e, "not-in" /* NOT_IN */ , n) || this;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.matches = function(t) {
        if (ct(this.value.arrayValue, {
            nullValue: "NULL_VALUE"
        })) return !1;
        var e = t.data.field(this.field);
        return null !== e && !ct(this.value.arrayValue, e);
    }, e;
}(At), Mt = /** @class */ function(t) {
    function e(e, n) {
        return t.call(this, e, "array-contains-any" /* ARRAY_CONTAINS_ANY */ , n) || this;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.matches = function(t) {
        var e = this, n = t.data.field(this.field);
        return !(!vt(n) || !n.arrayValue.values) && n.arrayValue.values.some((function(t) {
            return ct(e.value.arrayValue, t);
        }));
    }, e;
}(At), Ft = function(t, e) {
    this.position = t, this.before = e;
};

/** A Filter that implements the IN operator. */ function Vt(t) {
    // TODO(b/29183165): Make this collision robust.
    return (t.before ? "b" : "a") + ":" + t.position.map((function(t) {
        return lt(t);
    })).join(",");
}

/**
 * An ordering on a field, in some Direction. Direction defaults to ASCENDING.
 */ var qt = function(t, e /* ASCENDING */) {
    void 0 === e && (e = "asc"), this.field = t, this.dir = e;
};

function Ut(t, e) {
    return t.dir === e.dir && t.field.isEqual(e.field);
}

/**
 * Returns true if a document sorts before a bound using the provided sort
 * order.
 */ function Bt(t, e, n) {
    for (var r = 0, i = 0; i < t.position.length; i++) {
        var o = e[i], s = t.position[i];
        if (r = o.field.isKeyField() ? st.comparator(st.fromName(s.referenceValue), n.key) : ht(s, n.data.field(o.field)), 
        "desc" /* DESCENDING */ === o.dir && (r *= -1), 0 !== r) break;
    }
    return t.before ? r <= 0 : r < 0;
}

function jt(t, e) {
    if (null === t) return null === e;
    if (null === e) return !1;
    if (t.before !== e.before || t.position.length !== e.position.length) return !1;
    for (var n = 0; n < t.position.length; n++) if (!at(t.position[n], e.position[n])) return !1;
    return !0;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Query encapsulates all the query attributes we support in the SDK. It can
 * be run against the LocalStore, as well as be converted to a `Target` to
 * query the RemoteStore results.
 *
 * Visible for testing.
 */ var Kt = 
/**
     * Initializes a Query with a path and optional additional query constraints.
     * Path must currently be empty if this is a collection group query.
     */
function(t, e, n, r, i, o /* First */ , s, u) {
    void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), 
    void 0 === i && (i = null), void 0 === o && (o = "F"), void 0 === s && (s = null), 
    void 0 === u && (u = null), this.path = t, this.collectionGroup = e, this.explicitOrderBy = n, 
    this.filters = r, this.limit = i, this.limitType = o, this.startAt = s, this.endAt = u, 
    this.p = null, 
    // The corresponding `Target` of this `Query` instance.
    this.T = null, this.startAt, this.endAt;
};

/** Creates a new Query instance with the options provided. */ function Gt(t, e, n, r, i, o, s, u) {
    return new Kt(t, e, n, r, i, o, s, u);
}

/** Creates a new Query for a query that matches all documents at `path` */ function zt(t) {
    return new Kt(t);
}

/**
 * Helper to convert a collection group query into a collection query at a
 * specific path. This is used when executing collection group queries, since
 * we have to split the query into a set of collection queries at multiple
 * paths.
 */ function Qt(t) {
    return !rt(t.limit) && "F" /* First */ === t.limitType;
}

function Wt(t) {
    return !rt(t.limit) && "L" /* Last */ === t.limitType;
}

function Ht(t) {
    return t.explicitOrderBy.length > 0 ? t.explicitOrderBy[0].field : null;
}

function Yt(t) {
    for (var e = 0, n = t.filters; e < n.length; e++) {
        var r = n[e];
        if (r.g()) return r.field;
    }
    return null;
}

/**
 * Checks if any of the provided Operators are included in the query and
 * returns the first one that is, or null if none are.
 */
/**
 * Returns whether the query matches a collection group rather than a specific
 * collection.
 */ function Xt(t) {
    return null !== t.collectionGroup;
}

/**
 * Returns the implicit order by constraint that is used to execute the Query,
 * which can be different from the order by constraints the user provided (e.g.
 * the SDK and backend always orders by `__name__`).
 */ function Jt(t) {
    var e = O(t);
    if (null === e.p) {
        e.p = [];
        var n = Yt(e), r = Ht(e);
        if (null !== n && null === r) 
        // In order to implicitly add key ordering, we must also add the
        // inequality filter field for it to be a valid query.
        // Note that the default inequality field and key ordering is ascending.
        n.isKeyField() || e.p.push(new qt(n)), e.p.push(new qt(W.keyField(), "asc" /* ASCENDING */)); else {
            for (var i = !1, o = 0, s = e.explicitOrderBy; o < s.length; o++) {
                var u = s[o];
                e.p.push(u), u.field.isKeyField() && (i = !0);
            }
            if (!i) {
                // The order of the implicit key ordering always matches the last
                // explicit order by
                var a = e.explicitOrderBy.length > 0 ? e.explicitOrderBy[e.explicitOrderBy.length - 1].dir : "asc" /* ASCENDING */;
                e.p.push(new qt(W.keyField(), a));
            }
        }
    }
    return e.p;
}

/**
 * Converts this `Query` instance to it's corresponding `Target` representation.
 */ function $t(t) {
    var e = O(t);
    if (!e.T) if ("F" /* First */ === e.limitType) e.T = Tt(e.path, e.collectionGroup, Jt(e), e.filters, e.limit, e.startAt, e.endAt); else {
        for (
        // Flip the orderBy directions since we want the last results
        var n = [], r = 0, i = Jt(e); r < i.length; r++) {
            var o = i[r], s = "desc" /* DESCENDING */ === o.dir ? "asc" /* ASCENDING */ : "desc" /* DESCENDING */;
            n.push(new qt(o.field, s));
        }
        // We need to swap the cursors to match the now-flipped query ordering.
                var u = e.endAt ? new Ft(e.endAt.position, !e.endAt.before) : null, a = e.startAt ? new Ft(e.startAt.position, !e.startAt.before) : null;
        // Now return as a LimitType.First query.
                e.T = Tt(e.path, e.collectionGroup, n, e.filters, e.limit, u, a);
    }
    return e.T;
}

function Zt(t, e, n) {
    return new Kt(t.path, t.collectionGroup, t.explicitOrderBy.slice(), t.filters.slice(), e, n, t.startAt, t.endAt);
}

function te(t, e) {
    return Nt($t(t), $t(e)) && t.limitType === e.limitType;
}

// TODO(b/29183165): This is used to get a unique string from a query to, for
// example, use as a dictionary key, but the implementation is subject to
// collisions. Make it collision-free.
function ee(t) {
    return St($t(t)) + "|lt:" + t.limitType;
}

function ne(t) {
    return "Query(target=" + function(t) {
        var e = t.path.canonicalString();
        return null !== t.collectionGroup && (e += " collectionGroup=" + t.collectionGroup), 
        t.filters.length > 0 && (e += ", filters: [" + t.filters.map((function(t) {
            return (e = t).field.canonicalString() + " " + e.op + " " + lt(e.value);
            /** Returns a debug description for `filter`. */            var e;
            /** Filter that matches on key fields (i.e. '__name__'). */        })).join(", ") + "]"), 
        rt(t.limit) || (e += ", limit: " + t.limit), t.orderBy.length > 0 && (e += ", orderBy: [" + t.orderBy.map((function(t) {
            return function(t) {
                return t.field.canonicalString() + " (" + t.dir + ")";
            }(t);
        })).join(", ") + "]"), t.startAt && (e += ", startAt: " + Vt(t.startAt)), t.endAt && (e += ", endAt: " + Vt(t.endAt)), 
        "Target(" + e + ")";
    }($t(t)) + "; limitType=" + t.limitType + ")";
}

/** Returns whether `doc` matches the constraints of `query`. */ function re(t, e) {
    return e.isFoundDocument() && function(t, e) {
        var n = e.key.path;
        return null !== t.collectionGroup ? e.key.hasCollectionId(t.collectionGroup) && t.path.isPrefixOf(n) : st.isDocumentKey(t.path) ? t.path.isEqual(n) : t.path.isImmediateParentOf(n);
    }(t, e) && function(t, e) {
        for (var n = 0, r = t.explicitOrderBy; n < r.length; n++) {
            var i = r[n];
            // order by key always matches
                        if (!i.field.isKeyField() && null === e.data.field(i.field)) return !1;
        }
        return !0;
    }(t, e) && function(t, e) {
        for (var n = 0, r = t.filters; n < r.length; n++) {
            if (!r[n].matches(e)) return !1;
        }
        return !0;
    }(t, e) && function(t, e) {
        return !(t.startAt && !Bt(t.startAt, Jt(t), e)) && (!t.endAt || !Bt(t.endAt, Jt(t), e));
    }(t, e);
}

function ie(t) {
    return function(e, n) {
        for (var r = !1, i = 0, o = Jt(t); i < o.length; i++) {
            var s = o[i], u = oe(s, e, n);
            if (0 !== u) return u;
            r = r || s.field.isKeyField();
        }
        return 0;
    };
}

function oe(t, e, n) {
    var r = t.field.isKeyField() ? st.comparator(e.key, n.key) : function(t, e, n) {
        var r = e.data.field(t), i = n.data.field(t);
        return null !== r && null !== i ? ht(r, i) : C();
    }(t.field, e, n);
    switch (t.dir) {
      case "asc" /* ASCENDING */ :
        return r;

      case "desc" /* DESCENDING */ :
        return -1 * r;

      default:
        return C();
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns an DoubleValue for `value` that is encoded based the serializer's
 * `useProto3Json` setting.
 */ function se(t, e) {
    if (t.I) {
        if (isNaN(e)) return {
            doubleValue: "NaN"
        };
        if (e === 1 / 0) return {
            doubleValue: "Infinity"
        };
        if (e === -1 / 0) return {
            doubleValue: "-Infinity"
        };
    }
    return {
        doubleValue: it(e) ? "-0" : e
    };
}

/**
 * Returns an IntegerValue for `value`.
 */ function ue(t) {
    return {
        integerValue: "" + t
    };
}

/**
 * Returns a value for a number that's appropriate to put into a proto.
 * The return value is an IntegerValue if it can safely represent the value,
 * otherwise a DoubleValue is returned.
 */ function ae(t, e) {
    return ot(e) ? ue(e) : se(t, e);
}

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Used to represent a field transform on a mutation. */ var ce = function() {
    // Make sure that the structural type of `TransformOperation` is unique.
    // See https://github.com/microsoft/TypeScript/issues/5451
    this._ = void 0;
};

/**
 * Computes the local transform result against the provided `previousValue`,
 * optionally using the provided localWriteTime.
 */ function he(t, e, n) {
    return t instanceof de ? function(t, e) {
        var n = {
            fields: {
                __type__: {
                    stringValue: "server_timestamp"
                },
                __local_write_time__: {
                    timestampValue: {
                        seconds: t.seconds,
                        nanos: t.nanoseconds
                    }
                }
            }
        };
        return e && (n.fields.__previous_value__ = e), {
            mapValue: n
        };
    }(n, e) : t instanceof pe ? ye(t, e) : t instanceof ve ? me(t, e) : function(t, e) {
        // PORTING NOTE: Since JavaScript's integer arithmetic is limited to 53 bit
        // precision and resolves overflows by reducing precision, we do not
        // manually cap overflows at 2^63.
        var n = le(t, e), r = we(n) + we(t.A);
        return yt(n) && yt(t.A) ? ue(r) : se(t.R, r);
    }(t, e);
}

/**
 * Computes a final transform result after the transform has been acknowledged
 * by the server, potentially using the server-provided transformResult.
 */ function fe(t, e, n) {
    // The server just sends null as the transform result for array operations,
    // so we have to calculate a result the same as we do for local
    // applications.
    return t instanceof pe ? ye(t, e) : t instanceof ve ? me(t, e) : n;
}

/**
 * If this transform operation is not idempotent, returns the base value to
 * persist for this transform. If a base value is returned, the transform
 * operation is always applied to this base value, even if document has
 * already been updated.
 *
 * Base values provide consistent behavior for non-idempotent transforms and
 * allow us to return the same latency-compensated value even if the backend
 * has already applied the transform operation. The base value is null for
 * idempotent transforms, as they can be re-played even if the backend has
 * already applied them.
 *
 * @returns a base value to store along with the mutation, or null for
 * idempotent transforms.
 */ function le(t, e) {
    return t instanceof ge ? yt(n = e) || function(t) {
        return !!t && "doubleValue" in t;
    }(n) ? e : {
        integerValue: 0
    } : null;
    var n;
}

/** Transforms a value into a server-generated timestamp. */ var de = /** @class */ function(t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e;
}(ce), pe = /** @class */ function(t) {
    function e(e) {
        var n = this;
        return (n = t.call(this) || this).elements = e, n;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e;
}(ce);

/** Transforms an array value via a union operation. */ function ye(t, e) {
    for (var n = be(e), r = function(t) {
        n.some((function(e) {
            return at(e, t);
        })) || n.push(t);
    }, i = 0, o = t.elements; i < o.length; i++) {
        r(o[i]);
    }
    return {
        arrayValue: {
            values: n
        }
    };
}

/** Transforms an array value via a remove operation. */ var ve = /** @class */ function(t) {
    function e(e) {
        var n = this;
        return (n = t.call(this) || this).elements = e, n;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e;
}(ce);

function me(t, e) {
    for (var n = be(e), r = function(t) {
        n = n.filter((function(e) {
            return !at(e, t);
        }));
    }, i = 0, o = t.elements; i < o.length; i++) {
        r(o[i]);
    }
    return {
        arrayValue: {
            values: n
        }
    };
}

/**
 * Implements the backend semantics for locally computed NUMERIC_ADD (increment)
 * transforms. Converts all field values to integers or doubles, but unlike the
 * backend does not cap integer values at 2^63. Instead, JavaScript number
 * arithmetic is used and precision loss can occur for values greater than 2^53.
 */ var ge = /** @class */ function(t) {
    function e(e, n) {
        var r = this;
        return (r = t.call(this) || this).R = e, r.A = n, r;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e;
}(ce);

function we(t) {
    return $(t.integerValue || t.doubleValue);
}

function be(t) {
    return vt(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** A field path and the TransformOperation to perform upon it. */ var Ie = function(t, e) {
    this.field = t, this.transform = e;
};

/** The result of successfully applying a mutation to the backend. */
var _e = function(
/**
     * The version at which the mutation was committed:
     *
     * - For most operations, this is the updateTime in the WriteResult.
     * - For deletes, the commitTime of the WriteResponse (because deletes are
     *   not stored and have no updateTime).
     *
     * Note that these versions can be different: No-op writes will not change
     * the updateTime even though the commitTime advances.
     */
t, 
/**
     * The resulting fields returned from the backend after a mutation
     * containing field transforms has been committed. Contains one FieldValue
     * for each FieldTransform that was in the mutation.
     *
     * Will be empty if the mutation did not contain any field transforms.
     */
e) {
    this.version = t, this.transformResults = e;
}, Ee = /** @class */ function() {
    function t(t, e) {
        this.updateTime = t, this.exists = e
        /** Creates a new empty Precondition. */;
    }
    return t.none = function() {
        return new t;
    }, 
    /** Creates a new Precondition with an exists flag. */ t.exists = function(e) {
        return new t(void 0, e);
    }, 
    /** Creates a new Precondition based on a version a document exists at. */ t.updateTime = function(e) {
        return new t(e);
    }, Object.defineProperty(t.prototype, "isNone", {
        /** Returns whether this Precondition is empty. */ get: function() {
            return void 0 === this.updateTime && void 0 === this.exists;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.isEqual = function(t) {
        return this.exists === t.exists && (this.updateTime ? !!t.updateTime && this.updateTime.isEqual(t.updateTime) : !t.updateTime);
    }, t;
}();

/**
 * Encodes a precondition for a mutation. This follows the model that the
 * backend accepts with the special case of an explicit "empty" precondition
 * (meaning no precondition).
 */
/** Returns true if the preconditions is valid for the given document. */ function Te(t, e) {
    return void 0 !== t.updateTime ? e.isFoundDocument() && e.version.isEqual(t.updateTime) : void 0 === t.exists || t.exists === e.isFoundDocument();
}

/**
 * A mutation describes a self-contained change to a document. Mutations can
 * create, replace, delete, and update subsets of documents.
 *
 * Mutations not only act on the value of the document but also its version.
 *
 * For local mutations (mutations that haven't been committed yet), we preserve
 * the existing version for Set and Patch mutations. For Delete mutations, we
 * reset the version to 0.
 *
 * Here's the expected transition table.
 *
 * MUTATION           APPLIED TO            RESULTS IN
 *
 * SetMutation        Document(v3)          Document(v3)
 * SetMutation        NoDocument(v3)        Document(v0)
 * SetMutation        InvalidDocument(v0)   Document(v0)
 * PatchMutation      Document(v3)          Document(v3)
 * PatchMutation      NoDocument(v3)        NoDocument(v3)
 * PatchMutation      InvalidDocument(v0)   UnknownDocument(v3)
 * DeleteMutation     Document(v3)          NoDocument(v0)
 * DeleteMutation     NoDocument(v3)        NoDocument(v0)
 * DeleteMutation     InvalidDocument(v0)   NoDocument(v0)
 *
 * For acknowledged mutations, we use the updateTime of the WriteResponse as
 * the resulting version for Set and Patch mutations. As deletes have no
 * explicit update time, we use the commitTime of the WriteResponse for
 * Delete mutations.
 *
 * If a mutation is acknowledged by the backend but fails the precondition check
 * locally, we transition to an `UnknownDocument` and rely on Watch to send us
 * the updated version.
 *
 * Field transforms are used only with Patch and Set Mutations. We use the
 * `updateTransforms` message to store transforms, rather than the `transforms`s
 * messages.
 *
 * ## Subclassing Notes
 *
 * Every type of mutation needs to implement its own applyToRemoteDocument() and
 * applyToLocalView() to implement the actual behavior of applying the mutation
 * to some source document (see `applySetMutationToRemoteDocument()` for an
 * example).
 */ var Se = function() {};

/**
 * Applies this mutation to the given document for the purposes of computing a
 * new remote document. If the input document doesn't match the expected state
 * (e.g. it is invalid or outdated), the document type may transition to
 * unknown.
 *
 * @param mutation - The mutation to apply.
 * @param document - The document to mutate. The input document can be an
 *     invalid document if the client has no knowledge of the pre-mutation state
 *     of the document.
 * @param mutationResult - The result of applying the mutation from the backend.
 */ function Ne(t, e, n) {
    t instanceof Ce ? function(t, e, n) {
        // Unlike applySetMutationToLocalView, if we're applying a mutation to a
        // remote document the server has accepted the mutation so the precondition
        // must have held.
        var r = t.value.clone(), i = Le(t.fieldTransforms, e, n.transformResults);
        r.setAll(i), e.convertToFoundDocument(n.version, r).setHasCommittedMutations();
    }(t, e, n) : t instanceof Re ? function(t, e, n) {
        if (Te(t.precondition, e)) {
            var r = Le(t.fieldTransforms, e, n.transformResults), i = e.data;
            i.setAll(Oe(t)), i.setAll(r), e.convertToFoundDocument(n.version, i).setHasCommittedMutations();
        } else e.convertToUnknownDocument(n.version);
    }(t, e, n) : function(t, e, n) {
        // Unlike applyToLocalView, if we're applying a mutation to a remote
        // document the server has accepted the mutation so the precondition must
        // have held.
        e.convertToNoDocument(n.version).setHasCommittedMutations();
    }(0, e, n);
}

/**
 * Applies this mutation to the given document for the purposes of computing
 * the new local view of a document. If the input document doesn't match the
 * expected state, the document is not modified.
 *
 * @param mutation - The mutation to apply.
 * @param document - The document to mutate. The input document can be an
 *     invalid document if the client has no knowledge of the pre-mutation state
 *     of the document.
 * @param localWriteTime - A timestamp indicating the local write time of the
 *     batch this mutation is a part of.
 */ function De(t, e, n) {
    t instanceof Ce ? function(t, e, n) {
        if (Te(t.precondition, e)) {
            var r = t.value.clone(), i = Pe(t.fieldTransforms, n, e);
            r.setAll(i), e.convertToFoundDocument(xe(e), r).setHasLocalMutations();
        }
    }(t, e, n) : t instanceof Re ? function(t, e, n) {
        if (Te(t.precondition, e)) {
            var r = Pe(t.fieldTransforms, n, e), i = e.data;
            i.setAll(Oe(t)), i.setAll(r), e.convertToFoundDocument(xe(e), i).setHasLocalMutations();
        }
    }(t, e, n) : function(t, e) {
        Te(t.precondition, e) && 
        // We don't call `setHasLocalMutations()` since we want to be backwards
        // compatible with the existing SDK behavior.
        e.convertToNoDocument(U.min());
    }(t, e);
}

/**
 * If this mutation is not idempotent, returns the base value to persist with
 * this mutation. If a base value is returned, the mutation is always applied
 * to this base value, even if document has already been updated.
 *
 * The base value is a sparse object that consists of only the document
 * fields for which this mutation contains a non-idempotent transformation
 * (e.g. a numeric increment). The provided value guarantees consistent
 * behavior for non-idempotent transforms and allow us to return the same
 * latency-compensated value even if the backend has already applied the
 * mutation. The base value is null for idempotent mutations, as they can be
 * re-played even if the backend has already applied them.
 *
 * @returns a base value to store along with the mutation, or null for
 * idempotent mutations.
 */ function Ae(t, e) {
    for (var n = null, r = 0, i = t.fieldTransforms; r < i.length; r++) {
        var o = i[r], s = e.data.field(o.field), u = le(o.transform, s || null);
        null != u && (null == n && (n = bt.empty()), n.set(o.field, u));
    }
    return n || null;
}

function ke(t, e) {
    return t.type === e.type && !!t.key.isEqual(e.key) && !!t.precondition.isEqual(e.precondition) && !!function(t, e) {
        return void 0 === t && void 0 === e || !(!t || !e) && F(t, e, (function(t, e) {
            return function(t, e) {
                return t.field.isEqual(e.field) && function(t, e) {
                    return t instanceof pe && e instanceof pe || t instanceof ve && e instanceof ve ? F(t.elements, e.elements, at) : t instanceof ge && e instanceof ge ? at(t.A, e.A) : t instanceof de && e instanceof de;
                }(t.transform, e.transform);
            }(t, e);
        }));
    }(t.fieldTransforms, e.fieldTransforms) && (0 /* Set */ === t.type ? t.value.isEqual(e.value) : 1 /* Patch */ !== t.type || t.data.isEqual(e.data) && t.fieldMask.isEqual(e.fieldMask));
}

/**
 * Returns the version from the given document for use as the result of a
 * mutation. Mutations are defined to return the version of the base document
 * only if it is an existing document. Deleted and unknown documents have a
 * post-mutation version of SnapshotVersion.min().
 */ function xe(t) {
    return t.isFoundDocument() ? t.version : U.min();
}

/**
 * A mutation that creates or replaces the document at the given key with the
 * object value contents.
 */ var Ce = /** @class */ function(t) {
    function e(e, n, r, i) {
        void 0 === i && (i = []);
        var o = this;
        return (o = t.call(this) || this).key = e, o.value = n, o.precondition = r, o.fieldTransforms = i, 
        o.type = 0 /* Set */ , o;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e;
}(Se), Re = /** @class */ function(t) {
    function e(e, n, r, i, o) {
        void 0 === o && (o = []);
        var s = this;
        return (s = t.call(this) || this).key = e, s.data = n, s.fieldMask = r, s.precondition = i, 
        s.fieldTransforms = o, s.type = 1 /* Patch */ , s;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e;
}(Se);

function Oe(t) {
    var e = new Map;
    return t.fieldMask.fields.forEach((function(n) {
        if (!n.isEmpty()) {
            var r = t.data.field(n);
            e.set(n, r);
        }
    })), e
    /**
 * Creates a list of "transform results" (a transform result is a field value
 * representing the result of applying a transform) for use after a mutation
 * containing transforms has been acknowledged by the server.
 *
 * @param fieldTransforms - The field transforms to apply the result to.
 * @param mutableDocument - The current state of the document after applying all
 * previous mutations.
 * @param serverTransformResults - The transform results received by the server.
 * @returns The transform results list.
 */;
}

function Le(t, e, n) {
    var r = new Map;
    R(t.length === n.length);
    for (var i = 0; i < n.length; i++) {
        var o = t[i], s = o.transform, u = e.data.field(o.field);
        r.set(o.field, fe(s, u, n[i]));
    }
    return r;
}

/**
 * Creates a list of "transform results" (a transform result is a field value
 * representing the result of applying a transform) for use when applying a
 * transform locally.
 *
 * @param fieldTransforms - The field transforms to apply the result to.
 * @param localWriteTime - The local time of the mutation (used to
 *     generate ServerTimestampValues).
 * @param mutableDocument - The current state of the document after applying all
 *     previous mutations.
 * @returns The transform results list.
 */ function Pe(t, e, n) {
    for (var r = new Map, i = 0, o = t; i < o.length; i++) {
        var s = o[i], u = s.transform, a = n.data.field(s.field);
        r.set(s.field, he(u, a, e));
    }
    return r;
}

/** A mutation that deletes the document at the given key. */ var Me, Fe, Ve = /** @class */ function(t) {
    function e(e, n) {
        var r = this;
        return (r = t.call(this) || this).key = e, r.precondition = n, r.type = 2 /* Delete */ , 
        r.fieldTransforms = [], r;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e;
}(Se), qe = /** @class */ function(t) {
    function e(e, n) {
        var r = this;
        return (r = t.call(this) || this).key = e, r.precondition = n, r.type = 3 /* Verify */ , 
        r.fieldTransforms = [], r;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e;
}(Se), Ue = 
// TODO(b/33078163): just use simplest form of existence filter for now
function(t) {
    this.count = t;
};

/**
 * Determines whether an error code represents a permanent error when received
 * in response to a non-write operation.
 *
 * See isPermanentWriteError for classifying write errors.
 */
function Be(t) {
    switch (t) {
      case E.OK:
        return C();

      case E.CANCELLED:
      case E.UNKNOWN:
      case E.DEADLINE_EXCEEDED:
      case E.RESOURCE_EXHAUSTED:
      case E.INTERNAL:
      case E.UNAVAILABLE:
 // Unauthenticated means something went wrong with our token and we need
        // to retry with new credentials which will happen automatically.
              case E.UNAUTHENTICATED:
        return !1;

      case E.INVALID_ARGUMENT:
      case E.NOT_FOUND:
      case E.ALREADY_EXISTS:
      case E.PERMISSION_DENIED:
      case E.FAILED_PRECONDITION:
 // Aborted might be retried in some scenarios, but that is dependant on
        // the context and should handled individually by the calling code.
        // See https://cloud.google.com/apis/design/errors.
              case E.ABORTED:
      case E.OUT_OF_RANGE:
      case E.UNIMPLEMENTED:
      case E.DATA_LOSS:
        return !0;

      default:
        return C();
    }
}

/**
 * Determines whether an error code represents a permanent error when received
 * in response to a write operation.
 *
 * Write operations must be handled specially because as of b/119437764, ABORTED
 * errors on the write stream should be retried too (even though ABORTED errors
 * are not generally retryable).
 *
 * Note that during the initial handshake on the write stream an ABORTED error
 * signals that we should discard our stream token (i.e. it is permanent). This
 * means a handshake error should be classified with isPermanentError, above.
 */
/**
 * Maps an error Code from GRPC status code number, like 0, 1, or 14. These
 * are not the same as HTTP status codes.
 *
 * @returns The Code equivalent to the given GRPC status code. Fails if there
 *     is no match.
 */ function je(t) {
    if (void 0 === t) 
    // This shouldn't normally happen, but in certain error cases (like trying
    // to send invalid proto messages) we may get an error with no GRPC code.
    return A("GRPC error has no .code"), E.UNKNOWN;
    switch (t) {
      case Me.OK:
        return E.OK;

      case Me.CANCELLED:
        return E.CANCELLED;

      case Me.UNKNOWN:
        return E.UNKNOWN;

      case Me.DEADLINE_EXCEEDED:
        return E.DEADLINE_EXCEEDED;

      case Me.RESOURCE_EXHAUSTED:
        return E.RESOURCE_EXHAUSTED;

      case Me.INTERNAL:
        return E.INTERNAL;

      case Me.UNAVAILABLE:
        return E.UNAVAILABLE;

      case Me.UNAUTHENTICATED:
        return E.UNAUTHENTICATED;

      case Me.INVALID_ARGUMENT:
        return E.INVALID_ARGUMENT;

      case Me.NOT_FOUND:
        return E.NOT_FOUND;

      case Me.ALREADY_EXISTS:
        return E.ALREADY_EXISTS;

      case Me.PERMISSION_DENIED:
        return E.PERMISSION_DENIED;

      case Me.FAILED_PRECONDITION:
        return E.FAILED_PRECONDITION;

      case Me.ABORTED:
        return E.ABORTED;

      case Me.OUT_OF_RANGE:
        return E.OUT_OF_RANGE;

      case Me.UNIMPLEMENTED:
        return E.UNIMPLEMENTED;

      case Me.DATA_LOSS:
        return E.DATA_LOSS;

      default:
        return C();
    }
}

/**
 * Converts an HTTP response's error status to the equivalent error code.
 *
 * @param status - An HTTP error response status ("FAILED_PRECONDITION",
 * "UNKNOWN", etc.)
 * @returns The equivalent Code. Non-matching responses are mapped to
 *     Code.UNKNOWN.
 */ (Fe = Me || (Me = {}))[Fe.OK = 0] = "OK", Fe[Fe.CANCELLED = 1] = "CANCELLED", 
Fe[Fe.UNKNOWN = 2] = "UNKNOWN", Fe[Fe.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", 
Fe[Fe.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", Fe[Fe.NOT_FOUND = 5] = "NOT_FOUND", 
Fe[Fe.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", Fe[Fe.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", 
Fe[Fe.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", Fe[Fe.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", 
Fe[Fe.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", Fe[Fe.ABORTED = 10] = "ABORTED", 
Fe[Fe.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", Fe[Fe.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", 
Fe[Fe.INTERNAL = 13] = "INTERNAL", Fe[Fe.UNAVAILABLE = 14] = "UNAVAILABLE", Fe[Fe.DATA_LOSS = 15] = "DATA_LOSS";

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// An immutable sorted map implementation, based on a Left-leaning Red-Black
// tree.
var Ke = /** @class */ function() {
    function t(t, e) {
        this.comparator = t, this.root = e || ze.EMPTY;
    }
    // Returns a copy of the map, with the specified key/value added or replaced.
        return t.prototype.insert = function(e, n) {
        return new t(this.comparator, this.root.insert(e, n, this.comparator).copy(null, null, ze.BLACK, null, null));
    }, 
    // Returns a copy of the map, with the specified key removed.
    t.prototype.remove = function(e) {
        return new t(this.comparator, this.root.remove(e, this.comparator).copy(null, null, ze.BLACK, null, null));
    }, 
    // Returns the value of the node with the given key, or null.
    t.prototype.get = function(t) {
        for (var e = this.root; !e.isEmpty(); ) {
            var n = this.comparator(t, e.key);
            if (0 === n) return e.value;
            n < 0 ? e = e.left : n > 0 && (e = e.right);
        }
        return null;
    }, 
    // Returns the index of the element in this sorted map, or -1 if it doesn't
    // exist.
    t.prototype.indexOf = function(t) {
        for (
        // Number of nodes that were pruned when descending right
        var e = 0, n = this.root; !n.isEmpty(); ) {
            var r = this.comparator(t, n.key);
            if (0 === r) return e + n.left.size;
            r < 0 ? n = n.left : (
            // Count all nodes left of the node plus the node itself
            e += n.left.size + 1, n = n.right);
        }
        // Node not found
                return -1;
    }, t.prototype.isEmpty = function() {
        return this.root.isEmpty();
    }, Object.defineProperty(t.prototype, "size", {
        // Returns the total number of nodes in the map.
        get: function() {
            return this.root.size;
        },
        enumerable: !1,
        configurable: !0
    }), 
    // Returns the minimum key in the map.
    t.prototype.minKey = function() {
        return this.root.minKey();
    }, 
    // Returns the maximum key in the map.
    t.prototype.maxKey = function() {
        return this.root.maxKey();
    }, 
    // Traverses the map in key order and calls the specified action function
    // for each key/value pair. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.inorderTraversal = function(t) {
        return this.root.inorderTraversal(t);
    }, t.prototype.forEach = function(t) {
        this.inorderTraversal((function(e, n) {
            return t(e, n), !1;
        }));
    }, t.prototype.toString = function() {
        var t = [];
        return this.inorderTraversal((function(e, n) {
            return t.push(e + ":" + n), !1;
        })), "{" + t.join(", ") + "}";
    }, 
    // Traverses the map in reverse key order and calls the specified action
    // function for each key/value pair. If action returns true, traversal is
    // aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.reverseTraversal = function(t) {
        return this.root.reverseTraversal(t);
    }, 
    // Returns an iterator over the SortedMap.
    t.prototype.getIterator = function() {
        return new Ge(this.root, null, this.comparator, !1);
    }, t.prototype.getIteratorFrom = function(t) {
        return new Ge(this.root, t, this.comparator, !1);
    }, t.prototype.getReverseIterator = function() {
        return new Ge(this.root, null, this.comparator, !0);
    }, t.prototype.getReverseIteratorFrom = function(t) {
        return new Ge(this.root, t, this.comparator, !0);
    }, t;
}(), Ge = /** @class */ function() {
    function t(t, e, n, r) {
        this.isReverse = r, this.nodeStack = [];
        for (var i = 1; !t.isEmpty(); ) if (i = e ? n(t.key, e) : 1, 
        // flip the comparison if we're going in reverse
        r && (i *= -1), i < 0) 
        // This node is less than our start key. ignore it
        t = this.isReverse ? t.left : t.right; else {
            if (0 === i) {
                // This node is exactly equal to our start key. Push it on the stack,
                // but stop iterating;
                this.nodeStack.push(t);
                break;
            }
            // This node is greater than our start key, add it to the stack and move
            // to the next one
                        this.nodeStack.push(t), t = this.isReverse ? t.right : t.left;
        }
    }
    return t.prototype.getNext = function() {
        var t = this.nodeStack.pop(), e = {
            key: t.key,
            value: t.value
        };
        if (this.isReverse) for (t = t.left; !t.isEmpty(); ) this.nodeStack.push(t), t = t.right; else for (t = t.right; !t.isEmpty(); ) this.nodeStack.push(t), 
        t = t.left;
        return e;
    }, t.prototype.hasNext = function() {
        return this.nodeStack.length > 0;
    }, t.prototype.peek = function() {
        if (0 === this.nodeStack.length) return null;
        var t = this.nodeStack[this.nodeStack.length - 1];
        return {
            key: t.key,
            value: t.value
        };
    }, t;
}(), ze = /** @class */ function() {
    function t(e, n, r, i, o) {
        this.key = e, this.value = n, this.color = null != r ? r : t.RED, this.left = null != i ? i : t.EMPTY, 
        this.right = null != o ? o : t.EMPTY, this.size = this.left.size + 1 + this.right.size;
    }
    // Returns a copy of the current node, optionally replacing pieces of it.
        return t.prototype.copy = function(e, n, r, i, o) {
        return new t(null != e ? e : this.key, null != n ? n : this.value, null != r ? r : this.color, null != i ? i : this.left, null != o ? o : this.right);
    }, t.prototype.isEmpty = function() {
        return !1;
    }, 
    // Traverses the tree in key order and calls the specified action function
    // for each node. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.inorderTraversal = function(t) {
        return this.left.inorderTraversal(t) || t(this.key, this.value) || this.right.inorderTraversal(t);
    }, 
    // Traverses the tree in reverse key order and calls the specified action
    // function for each node. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.reverseTraversal = function(t) {
        return this.right.reverseTraversal(t) || t(this.key, this.value) || this.left.reverseTraversal(t);
    }, 
    // Returns the minimum node in the tree.
    t.prototype.min = function() {
        return this.left.isEmpty() ? this : this.left.min();
    }, 
    // Returns the maximum key in the tree.
    t.prototype.minKey = function() {
        return this.min().key;
    }, 
    // Returns the maximum key in the tree.
    t.prototype.maxKey = function() {
        return this.right.isEmpty() ? this.key : this.right.maxKey();
    }, 
    // Returns new tree, with the key/value added.
    t.prototype.insert = function(t, e, n) {
        var r = this, i = n(t, r.key);
        return (r = i < 0 ? r.copy(null, null, null, r.left.insert(t, e, n), null) : 0 === i ? r.copy(null, e, null, null, null) : r.copy(null, null, null, null, r.right.insert(t, e, n))).fixUp();
    }, t.prototype.removeMin = function() {
        if (this.left.isEmpty()) return t.EMPTY;
        var e = this;
        return e.left.isRed() || e.left.left.isRed() || (e = e.moveRedLeft()), (e = e.copy(null, null, null, e.left.removeMin(), null)).fixUp();
    }, 
    // Returns new tree, with the specified item removed.
    t.prototype.remove = function(e, n) {
        var r, i = this;
        if (n(e, i.key) < 0) i.left.isEmpty() || i.left.isRed() || i.left.left.isRed() || (i = i.moveRedLeft()), 
        i = i.copy(null, null, null, i.left.remove(e, n), null); else {
            if (i.left.isRed() && (i = i.rotateRight()), i.right.isEmpty() || i.right.isRed() || i.right.left.isRed() || (i = i.moveRedRight()), 
            0 === n(e, i.key)) {
                if (i.right.isEmpty()) return t.EMPTY;
                r = i.right.min(), i = i.copy(r.key, r.value, null, null, i.right.removeMin());
            }
            i = i.copy(null, null, null, null, i.right.remove(e, n));
        }
        return i.fixUp();
    }, t.prototype.isRed = function() {
        return this.color;
    }, 
    // Returns new tree after performing any needed rotations.
    t.prototype.fixUp = function() {
        var t = this;
        return t.right.isRed() && !t.left.isRed() && (t = t.rotateLeft()), t.left.isRed() && t.left.left.isRed() && (t = t.rotateRight()), 
        t.left.isRed() && t.right.isRed() && (t = t.colorFlip()), t;
    }, t.prototype.moveRedLeft = function() {
        var t = this.colorFlip();
        return t.right.left.isRed() && (t = (t = (t = t.copy(null, null, null, null, t.right.rotateRight())).rotateLeft()).colorFlip()), 
        t;
    }, t.prototype.moveRedRight = function() {
        var t = this.colorFlip();
        return t.left.left.isRed() && (t = (t = t.rotateRight()).colorFlip()), t;
    }, t.prototype.rotateLeft = function() {
        var e = this.copy(null, null, t.RED, null, this.right.left);
        return this.right.copy(null, null, this.color, e, null);
    }, t.prototype.rotateRight = function() {
        var e = this.copy(null, null, t.RED, this.left.right, null);
        return this.left.copy(null, null, this.color, null, e);
    }, t.prototype.colorFlip = function() {
        var t = this.left.copy(null, null, !this.left.color, null, null), e = this.right.copy(null, null, !this.right.color, null, null);
        return this.copy(null, null, !this.color, t, e);
    }, 
    // For testing.
    t.prototype.checkMaxDepth = function() {
        var t = this.check();
        return Math.pow(2, t) <= this.size + 1;
    }, 
    // In a balanced RB tree, the black-depth (number of black nodes) from root to
    // leaves is equal on both sides.  This function verifies that or asserts.
    t.prototype.check = function() {
        if (this.isRed() && this.left.isRed()) throw C();
        if (this.right.isRed()) throw C();
        var t = this.left.check();
        if (t !== this.right.check()) throw C();
        return t + (this.isRed() ? 0 : 1);
    }, t;
}();

// end SortedMap
// An iterator over an LLRBNode.
// end LLRBNode
// Empty node is shared between all LLRB trees.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
ze.EMPTY = null, ze.RED = !0, ze.BLACK = !1, 
// end LLRBEmptyNode
ze.EMPTY = new (/** @class */ function() {
    function t() {
        this.size = 0;
    }
    return Object.defineProperty(t.prototype, "key", {
        get: function() {
            throw C();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "value", {
        get: function() {
            throw C();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "color", {
        get: function() {
            throw C();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "left", {
        get: function() {
            throw C();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "right", {
        get: function() {
            throw C();
        },
        enumerable: !1,
        configurable: !0
    }), 
    // Returns a copy of the current node.
    t.prototype.copy = function(t, e, n, r, i) {
        return this;
    }, 
    // Returns a copy of the tree, with the specified key/value added.
    t.prototype.insert = function(t, e, n) {
        return new ze(t, e);
    }, 
    // Returns a copy of the tree, with the specified key removed.
    t.prototype.remove = function(t, e) {
        return this;
    }, t.prototype.isEmpty = function() {
        return !0;
    }, t.prototype.inorderTraversal = function(t) {
        return !1;
    }, t.prototype.reverseTraversal = function(t) {
        return !1;
    }, t.prototype.minKey = function() {
        return null;
    }, t.prototype.maxKey = function() {
        return null;
    }, t.prototype.isRed = function() {
        return !1;
    }, 
    // For testing.
    t.prototype.checkMaxDepth = function() {
        return !0;
    }, t.prototype.check = function() {
        return 0;
    }, t;
}());

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * SortedSet is an immutable (copy-on-write) collection that holds elements
 * in order specified by the provided comparator.
 *
 * NOTE: if provided comparator returns 0 for two elements, we consider them to
 * be equal!
 */
var Qe = /** @class */ function() {
    function t(t) {
        this.comparator = t, this.data = new Ke(this.comparator);
    }
    return t.prototype.has = function(t) {
        return null !== this.data.get(t);
    }, t.prototype.first = function() {
        return this.data.minKey();
    }, t.prototype.last = function() {
        return this.data.maxKey();
    }, Object.defineProperty(t.prototype, "size", {
        get: function() {
            return this.data.size;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.indexOf = function(t) {
        return this.data.indexOf(t);
    }, 
    /** Iterates elements in order defined by "comparator" */ t.prototype.forEach = function(t) {
        this.data.inorderTraversal((function(e, n) {
            return t(e), !1;
        }));
    }, 
    /** Iterates over `elem`s such that: range[0] &lt;= elem &lt; range[1]. */ t.prototype.forEachInRange = function(t, e) {
        for (var n = this.data.getIteratorFrom(t[0]); n.hasNext(); ) {
            var r = n.getNext();
            if (this.comparator(r.key, t[1]) >= 0) return;
            e(r.key);
        }
    }, 
    /**
     * Iterates over `elem`s such that: start &lt;= elem until false is returned.
     */
    t.prototype.forEachWhile = function(t, e) {
        var n;
        for (n = void 0 !== e ? this.data.getIteratorFrom(e) : this.data.getIterator(); n.hasNext(); ) if (!t(n.getNext().key)) return;
    }, 
    /** Finds the least element greater than or equal to `elem`. */ t.prototype.firstAfterOrEqual = function(t) {
        var e = this.data.getIteratorFrom(t);
        return e.hasNext() ? e.getNext().key : null;
    }, t.prototype.getIterator = function() {
        return new We(this.data.getIterator());
    }, t.prototype.getIteratorFrom = function(t) {
        return new We(this.data.getIteratorFrom(t));
    }, 
    /** Inserts or updates an element */ t.prototype.add = function(t) {
        return this.copy(this.data.remove(t).insert(t, !0));
    }, 
    /** Deletes an element */ t.prototype.delete = function(t) {
        return this.has(t) ? this.copy(this.data.remove(t)) : this;
    }, t.prototype.isEmpty = function() {
        return this.data.isEmpty();
    }, t.prototype.unionWith = function(t) {
        var e = this;
        // Make sure `result` always refers to the larger one of the two sets.
                return e.size < t.size && (e = t, t = this), t.forEach((function(t) {
            e = e.add(t);
        })), e;
    }, t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) return !1;
        if (this.size !== e.size) return !1;
        for (var n = this.data.getIterator(), r = e.data.getIterator(); n.hasNext(); ) {
            var i = n.getNext().key, o = r.getNext().key;
            if (0 !== this.comparator(i, o)) return !1;
        }
        return !0;
    }, t.prototype.toArray = function() {
        var t = [];
        return this.forEach((function(e) {
            t.push(e);
        })), t;
    }, t.prototype.toString = function() {
        var t = [];
        return this.forEach((function(e) {
            return t.push(e);
        })), "SortedSet(" + t.toString() + ")";
    }, t.prototype.copy = function(e) {
        var n = new t(this.comparator);
        return n.data = e, n;
    }, t;
}(), We = /** @class */ function() {
    function t(t) {
        this.iter = t;
    }
    return t.prototype.getNext = function() {
        return this.iter.getNext().key;
    }, t.prototype.hasNext = function() {
        return this.iter.hasNext();
    }, t;
}(), He = new Ke(st.comparator);

function Ye() {
    return He;
}

var Xe = new Ke(st.comparator);

function Je() {
    return Xe;
}

var $e = new Ke(st.comparator);

function Ze() {
    return $e;
}

var tn = new Qe(st.comparator);

function en() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    for (var n = tn, r = 0, i = t; r < i.length; r++) {
        var o = i[r];
        n = n.add(o);
    }
    return n;
}

var nn = new Qe(M);

function rn() {
    return nn;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An event from the RemoteStore. It is split into targetChanges (changes to the
 * state or the set of documents in our watched targets) and documentUpdates
 * (changes to the actual documents).
 */ var on = /** @class */ function() {
    function t(
    /**
     * The snapshot version this event brings us up to, or MIN if not set.
     */
    t, 
    /**
     * A map from target to changes to the target. See TargetChange.
     */
    e, 
    /**
     * A set of targets that is known to be inconsistent. Listens for these
     * targets should be re-established without resume tokens.
     */
    n, 
    /**
     * A set of which documents have changed or been deleted, along with the
     * doc's new values (if not deleted).
     */
    r, 
    /**
     * A set of which document updates are due only to limbo resolution targets.
     */
    i) {
        this.snapshotVersion = t, this.targetChanges = e, this.targetMismatches = n, this.documentUpdates = r, 
        this.resolvedLimboDocuments = i;
    }
    /**
     * HACK: Views require RemoteEvents in order to determine whether the view is
     * CURRENT, but secondary tabs don't receive remote events. So this method is
     * used to create a synthesized RemoteEvent that can be used to apply a
     * CURRENT status change to a View, for queries executed in a different tab.
     */
    // PORTING NOTE: Multi-tab only
        return t.createSynthesizedRemoteEventForCurrentChange = function(e, n) {
        var r = new Map;
        return r.set(e, sn.createSynthesizedTargetChangeForCurrentChange(e, n)), new t(U.min(), r, rn(), Ye(), en());
    }, t;
}(), sn = /** @class */ function() {
    function t(
    /**
     * An opaque, server-assigned token that allows watching a query to be resumed
     * after disconnecting without retransmitting all the data that matches the
     * query. The resume token essentially identifies a point in time from which
     * the server should resume sending results.
     */
    t, 
    /**
     * The "current" (synced) status of this target. Note that "current"
     * has special meaning in the RPC protocol that implies that a target is
     * both up-to-date and consistent with the rest of the watch stream.
     */
    e, 
    /**
     * The set of documents that were newly assigned to this target as part of
     * this remote event.
     */
    n, 
    /**
     * The set of documents that were already assigned to this target but received
     * an update during this remote event.
     */
    r, 
    /**
     * The set of documents that were removed from this target as part of this
     * remote event.
     */
    i) {
        this.resumeToken = t, this.current = e, this.addedDocuments = n, this.modifiedDocuments = r, 
        this.removedDocuments = i
        /**
     * This method is used to create a synthesized TargetChanges that can be used to
     * apply a CURRENT status change to a View (for queries executed in a different
     * tab) or for new queries (to raise snapshots with correct CURRENT status).
     */;
    }
    return t.createSynthesizedTargetChangeForCurrentChange = function(e, n) {
        return new t(Y.EMPTY_BYTE_STRING, n, en(), en(), en());
    }, t;
}(), un = function(
/** The new document applies to all of these targets. */
t, 
/** The new document is removed from all of these targets. */
e, 
/** The key of the document for this change. */
n, 
/**
     * The new document or NoDocument if it was deleted. Is null if the
     * document went out of view without the server sending a new document.
     */
r) {
    this.v = t, this.removedTargetIds = e, this.key = n, this.P = r;
}, an = function(t, e) {
    this.targetId = t, this.V = e;
}, cn = function(
/** What kind of change occurred to the watch target. */
t, 
/** The target IDs that were added/removed/set. */
e, 
/**
     * An opaque, server-assigned token that allows watching a target to be
     * resumed after disconnecting without retransmitting all the data that
     * matches the target. The resume token essentially identifies a point in
     * time from which the server should resume sending results.
     */
n
/** An RPC error indicating why the watch failed. */ , r) {
    void 0 === n && (n = Y.EMPTY_BYTE_STRING), void 0 === r && (r = null), this.state = t, 
    this.targetIds = e, this.resumeToken = n, this.cause = r;
}, hn = /** @class */ function() {
    function t() {
        /**
         * The number of pending responses (adds or removes) that we are waiting on.
         * We only consider targets active that have no pending responses.
         */
        this.S = 0, 
        /**
             * Keeps track of the document changes since the last raised snapshot.
             *
             * These changes are continuously updated as we receive document updates and
             * always reflect the current set of changes against the last issued snapshot.
             */
        this.D = dn(), 
        /** See public getters for explanations of these fields. */
        this.C = Y.EMPTY_BYTE_STRING, this.N = !1, 
        /**
             * Whether this target state should be included in the next snapshot. We
             * initialize to true so that newly-added targets are included in the next
             * RemoteEvent.
             */
        this.F = !0;
    }
    return Object.defineProperty(t.prototype, "current", {
        /**
         * Whether this target has been marked 'current'.
         *
         * 'Current' has special meaning in the RPC protocol: It implies that the
         * Watch backend has sent us all changes up to the point at which the target
         * was added and that the target is consistent with the rest of the watch
         * stream.
         */
        get: function() {
            return this.N;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "resumeToken", {
        /** The last resume token sent to us for this target. */ get: function() {
            return this.C;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "k", {
        /** Whether this target has pending target adds or target removes. */ get: function() {
            return 0 !== this.S;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "O", {
        /** Whether we have modified any state that should trigger a snapshot. */ get: function() {
            return this.F;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Applies the resume token to the TargetChange, but only when it has a new
     * value. Empty resumeTokens are discarded.
     */
    t.prototype.$ = function(t) {
        t.approximateByteSize() > 0 && (this.F = !0, this.C = t);
    }, 
    /**
     * Creates a target change from the current set of changes.
     *
     * To reset the document changes after raising this snapshot, call
     * `clearPendingChanges()`.
     */
    t.prototype.M = function() {
        var t = en(), e = en(), n = en();
        return this.D.forEach((function(r, i) {
            switch (i) {
              case 0 /* Added */ :
                t = t.add(r);
                break;

              case 2 /* Modified */ :
                e = e.add(r);
                break;

              case 1 /* Removed */ :
                n = n.add(r);
                break;

              default:
                C();
            }
        })), new sn(this.C, this.N, t, e, n);
    }, 
    /**
     * Resets the document changes and sets `hasPendingChanges` to false.
     */
    t.prototype.L = function() {
        this.F = !1, this.D = dn();
    }, t.prototype.B = function(t, e) {
        this.F = !0, this.D = this.D.insert(t, e);
    }, t.prototype.q = function(t) {
        this.F = !0, this.D = this.D.remove(t);
    }, t.prototype.U = function() {
        this.S += 1;
    }, t.prototype.K = function() {
        this.S -= 1;
    }, t.prototype.j = function() {
        this.F = !0, this.N = !0;
    }, t;
}(), fn = /** @class */ function() {
    function t(t) {
        this.W = t, 
        /** The internal state of all tracked targets. */
        this.G = new Map, 
        /** Keeps track of the documents to update since the last raised snapshot. */
        this.H = Ye(), 
        /** A mapping of document keys to their set of target IDs. */
        this.J = ln(), 
        /**
             * A list of targets with existence filter mismatches. These targets are
             * known to be inconsistent and their listens needs to be re-established by
             * RemoteStore.
             */
        this.Y = new Qe(M)
        /**
     * Processes and adds the DocumentWatchChange to the current set of changes.
     */;
    }
    return t.prototype.X = function(t) {
        for (var e = 0, n = t.v; e < n.length; e++) {
            var r = n[e];
            t.P && t.P.isFoundDocument() ? this.Z(r, t.P) : this.tt(r, t.key, t.P);
        }
        for (var i = 0, o = t.removedTargetIds; i < o.length; i++) {
            r = o[i];
            this.tt(r, t.key, t.P);
        }
    }, 
    /** Processes and adds the WatchTargetChange to the current set of changes. */ t.prototype.et = function(t) {
        var e = this;
        this.forEachTarget(t, (function(n) {
            var r = e.nt(n);
            switch (t.state) {
              case 0 /* NoChange */ :
                e.st(n) && r.$(t.resumeToken);
                break;

              case 1 /* Added */ :
                // We need to decrement the number of pending acks needed from watch
                // for this targetId.
                r.K(), r.k || 
                // We have a freshly added target, so we need to reset any state
                // that we had previously. This can happen e.g. when remove and add
                // back a target for existence filter mismatches.
                r.L(), r.$(t.resumeToken);
                break;

              case 2 /* Removed */ :
                // We need to keep track of removed targets to we can post-filter and
                // remove any target changes.
                // We need to decrement the number of pending acks needed from watch
                // for this targetId.
                r.K(), r.k || e.removeTarget(n);
                break;

              case 3 /* Current */ :
                e.st(n) && (r.j(), r.$(t.resumeToken));
                break;

              case 4 /* Reset */ :
                e.st(n) && (
                // Reset the target and synthesizes removes for all existing
                // documents. The backend will re-add any documents that still
                // match the target before it sends the next global snapshot.
                e.it(n), r.$(t.resumeToken));
                break;

              default:
                C();
            }
        }));
    }, 
    /**
     * Iterates over all targetIds that the watch change applies to: either the
     * targetIds explicitly listed in the change or the targetIds of all currently
     * active targets.
     */
    t.prototype.forEachTarget = function(t, e) {
        var n = this;
        t.targetIds.length > 0 ? t.targetIds.forEach(e) : this.G.forEach((function(t, r) {
            n.st(r) && e(r);
        }));
    }, 
    /**
     * Handles existence filters and synthesizes deletes for filter mismatches.
     * Targets that are invalidated by filter mismatches are added to
     * `pendingTargetResets`.
     */
    t.prototype.rt = function(t) {
        var e = t.targetId, n = t.V.count, r = this.ot(e);
        if (r) {
            var i = r.target;
            if (Dt(i)) if (0 === n) {
                // The existence filter told us the document does not exist. We deduce
                // that this document does not exist and apply a deleted document to
                // our updates. Without applying this deleted document there might be
                // another query that will raise this document as part of a snapshot
                // until it is resolved, essentially exposing inconsistency between
                // queries.
                var o = new st(i.path);
                this.tt(e, o, _t.newNoDocument(o, U.min()));
            } else R(1 === n); else this.ct(e) !== n && (
            // Existence filter mismatch: We reset the mapping and raise a new
            // snapshot with `isFromCache:true`.
            this.it(e), this.Y = this.Y.add(e));
        }
    }, 
    /**
     * Converts the currently accumulated state into a remote event at the
     * provided snapshot version. Resets the accumulated changes before returning.
     */
    t.prototype.ut = function(t) {
        var e = this, n = new Map;
        this.G.forEach((function(r, i) {
            var o = e.ot(i);
            if (o) {
                if (r.current && Dt(o.target)) {
                    // Document queries for document that don't exist can produce an empty
                    // result set. To update our local cache, we synthesize a document
                    // delete if we have not previously received the document. This
                    // resolves the limbo state of the document, removing it from
                    // limboDocumentRefs.
                    // TODO(dimond): Ideally we would have an explicit lookup target
                    // instead resulting in an explicit delete message and we could
                    // remove this special logic.
                    var s = new st(o.target.path);
                    null !== e.H.get(s) || e.at(i, s) || e.tt(i, s, _t.newNoDocument(s, t));
                }
                r.O && (n.set(i, r.M()), r.L());
            }
        }));
        var r = en();
        // We extract the set of limbo-only document updates as the GC logic
        // special-cases documents that do not appear in the target cache.
        // TODO(gsoltis): Expand on this comment once GC is available in the JS
        // client.
                this.J.forEach((function(t, n) {
            var i = !0;
            n.forEachWhile((function(t) {
                var n = e.ot(t);
                return !n || 2 /* LimboResolution */ === n.purpose || (i = !1, !1);
            })), i && (r = r.add(t));
        }));
        var i = new on(t, n, this.Y, this.H, r);
        return this.H = Ye(), this.J = ln(), this.Y = new Qe(M), i;
    }, 
    /**
     * Adds the provided document to the internal list of document updates and
     * its document key to the given target's mapping.
     */
    // Visible for testing.
    t.prototype.Z = function(t, e) {
        if (this.st(t)) {
            var n = this.at(t, e.key) ? 2 /* Modified */ : 0 /* Added */;
            this.nt(t).B(e.key, n), this.H = this.H.insert(e.key, e), this.J = this.J.insert(e.key, this.ht(e.key).add(t));
        }
    }, 
    /**
     * Removes the provided document from the target mapping. If the
     * document no longer matches the target, but the document's state is still
     * known (e.g. we know that the document was deleted or we received the change
     * that caused the filter mismatch), the new document can be provided
     * to update the remote document cache.
     */
    // Visible for testing.
    t.prototype.tt = function(t, e, n) {
        if (this.st(t)) {
            var r = this.nt(t);
            this.at(t, e) ? r.B(e, 1 /* Removed */) : 
            // The document may have entered and left the target before we raised a
            // snapshot, so we can just ignore the change.
            r.q(e), this.J = this.J.insert(e, this.ht(e).delete(t)), n && (this.H = this.H.insert(e, n));
        }
    }, t.prototype.removeTarget = function(t) {
        this.G.delete(t);
    }, 
    /**
     * Returns the current count of documents in the target. This includes both
     * the number of documents that the LocalStore considers to be part of the
     * target as well as any accumulated changes.
     */
    t.prototype.ct = function(t) {
        var e = this.nt(t).M();
        return this.W.getRemoteKeysForTarget(t).size + e.addedDocuments.size - e.removedDocuments.size;
    }, 
    /**
     * Increment the number of acks needed from watch before we can consider the
     * server to be 'in-sync' with the client's active targets.
     */
    t.prototype.U = function(t) {
        this.nt(t).U();
    }, t.prototype.nt = function(t) {
        var e = this.G.get(t);
        return e || (e = new hn, this.G.set(t, e)), e;
    }, t.prototype.ht = function(t) {
        var e = this.J.get(t);
        return e || (e = new Qe(M), this.J = this.J.insert(t, e)), e;
    }, 
    /**
     * Verifies that the user is still interested in this target (by calling
     * `getTargetDataForTarget()`) and that we are not waiting for pending ADDs
     * from watch.
     */
    t.prototype.st = function(t) {
        var e = null !== this.ot(t);
        return e || D("WatchChangeAggregator", "Detected inactive target", t), e;
    }, 
    /**
     * Returns the TargetData for an active target (i.e. a target that the user
     * is still interested in that has no outstanding target change requests).
     */
    t.prototype.ot = function(t) {
        var e = this.G.get(t);
        return e && e.k ? null : this.W.lt(t);
    }, 
    /**
     * Resets the state of a Watch target to its initial state (e.g. sets
     * 'current' to false, clears the resume token and removes its target mapping
     * from all documents).
     */
    t.prototype.it = function(t) {
        var e = this;
        this.G.set(t, new hn), this.W.getRemoteKeysForTarget(t).forEach((function(n) {
            e.tt(t, n, /*updatedDocument=*/ null);
        }));
    }, 
    /**
     * Returns whether the LocalStore considers the document to be part of the
     * specified target.
     */
    t.prototype.at = function(t, e) {
        return this.W.getRemoteKeysForTarget(t).has(e);
    }, t;
}();

/**
 * A TargetChange specifies the set of changes for a specific target as part of
 * a RemoteEvent. These changes track which documents are added, modified or
 * removed, as well as the target's resume token and whether the target is
 * marked CURRENT.
 * The actual changes *to* documents are not part of the TargetChange since
 * documents may be part of multiple targets.
 */ function ln() {
    return new Ke(st.comparator);
}

function dn() {
    return new Ke(st.comparator);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var pn = {
    asc: "ASCENDING",
    desc: "DESCENDING"
}, yn = {
    "<": "LESS_THAN",
    "<=": "LESS_THAN_OR_EQUAL",
    ">": "GREATER_THAN",
    ">=": "GREATER_THAN_OR_EQUAL",
    "==": "EQUAL",
    "!=": "NOT_EQUAL",
    "array-contains": "ARRAY_CONTAINS",
    in: "IN",
    "not-in": "NOT_IN",
    "array-contains-any": "ARRAY_CONTAINS_ANY"
}, vn = function(t, e) {
    this.databaseId = t, this.I = e;
};

/**
 * This class generates JsonObject values for the Datastore API suitable for
 * sending to either GRPC stub methods or via the JSON/HTTP REST API.
 *
 * The serializer supports both Protobuf.js and Proto3 JSON formats. By
 * setting `useProto3Json` to true, the serializer will use the Proto3 JSON
 * format.
 *
 * For a description of the Proto3 JSON format check
 * https://developers.google.com/protocol-buffers/docs/proto3#json
 *
 * TODO(klimt): We can remove the databaseId argument if we keep the full
 * resource name in documents.
 */
/**
 * Returns a value for a Date that's appropriate to put into a proto.
 */
function mn(t, e) {
    return t.I ? new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "") + "." + ("000000000" + e.nanoseconds).slice(-9) + "Z" : {
        seconds: "" + e.seconds,
        nanos: e.nanoseconds
    };
}

/**
 * Returns a value for bytes that's appropriate to put in a proto.
 *
 * Visible for testing.
 */ function gn(t, e) {
    return t.I ? e.toBase64() : e.toUint8Array();
}

/**
 * Returns a ByteString based on the proto string value.
 */ function wn(t, e) {
    return mn(t, e.toTimestamp());
}

function bn(t) {
    return R(!!t), U.fromTimestamp(function(t) {
        var e = J(t);
        return new q(e.seconds, e.nanos);
    }(t));
}

function In(t, e) {
    return function(t) {
        return new z([ "projects", t.projectId, "databases", t.database ]);
    }(t).child("documents").child(e).canonicalString();
}

function _n(t) {
    var e = z.fromString(t);
    return R(Qn(e)), e;
}

function En(t, e) {
    return In(t.databaseId, e.path);
}

function Tn(t, e) {
    var n = _n(e);
    if (n.get(1) !== t.databaseId.projectId) throw new T(E.INVALID_ARGUMENT, "Tried to deserialize key from different project: " + n.get(1) + " vs " + t.databaseId.projectId);
    if (n.get(3) !== t.databaseId.database) throw new T(E.INVALID_ARGUMENT, "Tried to deserialize key from different database: " + n.get(3) + " vs " + t.databaseId.database);
    return new st(An(n));
}

function Sn(t, e) {
    return In(t.databaseId, e);
}

function Nn(t) {
    var e = _n(t);
    // In v1beta1 queries for collections at the root did not have a trailing
    // "/documents". In v1 all resource paths contain "/documents". Preserve the
    // ability to read the v1beta1 form for compatibility with queries persisted
    // in the local target cache.
        return 4 === e.length ? z.emptyPath() : An(e);
}

function Dn(t) {
    return new z([ "projects", t.databaseId.projectId, "databases", t.databaseId.database ]).canonicalString();
}

function An(t) {
    return R(t.length > 4 && "documents" === t.get(4)), t.popFirst(5)
    /** Creates a Document proto from key and fields (but no create/update time) */;
}

function kn(t, e, n) {
    return {
        name: En(t, e),
        fields: n.toProto().mapValue.fields
    };
}

function xn(t, e, n) {
    var r = Tn(t, e.name), i = bn(e.updateTime), o = new bt({
        mapValue: {
            fields: e.fields
        }
    }), s = _t.newFoundDocument(r, i, o);
    return n && s.setHasCommittedMutations(), n ? s.setHasCommittedMutations() : s;
}

function Cn(t, e) {
    var n;
    if (e instanceof Ce) n = {
        update: kn(t, e.key, e.value)
    }; else if (e instanceof Ve) n = {
        delete: En(t, e.key)
    }; else if (e instanceof Re) n = {
        update: kn(t, e.key, e.data),
        updateMask: zn(e.fieldMask)
    }; else {
        if (!(e instanceof qe)) return C();
        n = {
            verify: En(t, e.key)
        };
    }
    return e.fieldTransforms.length > 0 && (n.updateTransforms = e.fieldTransforms.map((function(t) {
        return function(t, e) {
            var n = e.transform;
            if (n instanceof de) return {
                fieldPath: e.field.canonicalString(),
                setToServerValue: "REQUEST_TIME"
            };
            if (n instanceof pe) return {
                fieldPath: e.field.canonicalString(),
                appendMissingElements: {
                    values: n.elements
                }
            };
            if (n instanceof ve) return {
                fieldPath: e.field.canonicalString(),
                removeAllFromArray: {
                    values: n.elements
                }
            };
            if (n instanceof ge) return {
                fieldPath: e.field.canonicalString(),
                increment: n.A
            };
            throw C();
        }(0, t);
    }))), e.precondition.isNone || (n.currentDocument = function(t, e) {
        return void 0 !== e.updateTime ? {
            updateTime: wn(t, e.updateTime)
        } : void 0 !== e.exists ? {
            exists: e.exists
        } : C();
    }(t, e.precondition)), n;
}

function Rn(t, e) {
    var n = e.currentDocument ? function(t) {
        return void 0 !== t.updateTime ? Ee.updateTime(bn(t.updateTime)) : void 0 !== t.exists ? Ee.exists(t.exists) : Ee.none();
    }(e.currentDocument) : Ee.none(), r = e.updateTransforms ? e.updateTransforms.map((function(e) {
        return function(t, e) {
            var n = null;
            if ("setToServerValue" in e) R("REQUEST_TIME" === e.setToServerValue), n = new de; else if ("appendMissingElements" in e) {
                var r = e.appendMissingElements.values || [];
                n = new pe(r);
            } else if ("removeAllFromArray" in e) {
                var i = e.removeAllFromArray.values || [];
                n = new ve(i);
            } else "increment" in e ? n = new ge(t, e.increment) : C();
            var o = W.fromServerFormat(e.fieldPath);
            return new Ie(o, n);
        }(t, e);
    })) : [];
    if (e.update) {
        e.update.name;
        var i = Tn(t, e.update.name), o = new bt({
            mapValue: {
                fields: e.update.fields
            }
        });
        if (e.updateMask) {
            var s = function(t) {
                var e = t.fieldPaths || [];
                return new H(e.map((function(t) {
                    return W.fromServerFormat(t);
                })));
            }(e.updateMask);
            return new Re(i, o, s, n, r);
        }
        return new Ce(i, o, n, r);
    }
    if (e.delete) {
        var u = Tn(t, e.delete);
        return new Ve(u, n);
    }
    if (e.verify) {
        var a = Tn(t, e.verify);
        return new qe(a, n);
    }
    return C();
}

function On(t, e) {
    return {
        documents: [ Sn(t, e.path) ]
    };
}

function Ln(t, e) {
    // Dissect the path into parent, collectionId, and optional key filter.
    var n = {
        structuredQuery: {}
    }, r = e.path;
    null !== e.collectionGroup ? (n.parent = Sn(t, r), n.structuredQuery.from = [ {
        collectionId: e.collectionGroup,
        allDescendants: !0
    } ]) : (n.parent = Sn(t, r.popLast()), n.structuredQuery.from = [ {
        collectionId: r.lastSegment()
    } ]);
    var i = function(t) {
        if (0 !== t.length) {
            var e = t.map((function(t) {
                // visible for testing
                return function(t) {
                    if ("==" /* EQUAL */ === t.op) {
                        if (gt(t.value)) return {
                            unaryFilter: {
                                field: Bn(t.field),
                                op: "IS_NAN"
                            }
                        };
                        if (mt(t.value)) return {
                            unaryFilter: {
                                field: Bn(t.field),
                                op: "IS_NULL"
                            }
                        };
                    } else if ("!=" /* NOT_EQUAL */ === t.op) {
                        if (gt(t.value)) return {
                            unaryFilter: {
                                field: Bn(t.field),
                                op: "IS_NOT_NAN"
                            }
                        };
                        if (mt(t.value)) return {
                            unaryFilter: {
                                field: Bn(t.field),
                                op: "IS_NOT_NULL"
                            }
                        };
                    }
                    return {
                        fieldFilter: {
                            field: Bn(t.field),
                            op: Un(t.op),
                            value: t.value
                        }
                    };
                }(t);
            }));
            return 1 === e.length ? e[0] : {
                compositeFilter: {
                    op: "AND",
                    filters: e
                }
            };
        }
    }(e.filters);
    i && (n.structuredQuery.where = i);
    var o = function(t) {
        if (0 !== t.length) return t.map((function(t) {
            // visible for testing
            return function(t) {
                return {
                    field: Bn(t.field),
                    direction: qn(t.dir)
                };
            }(t);
        }));
    }(e.orderBy);
    o && (n.structuredQuery.orderBy = o);
    var s = function(t, e) {
        return t.I || rt(e) ? e : {
            value: e
        };
    }(t, e.limit);
    return null !== s && (n.structuredQuery.limit = s), e.startAt && (n.structuredQuery.startAt = Fn(e.startAt)), 
    e.endAt && (n.structuredQuery.endAt = Fn(e.endAt)), n;
}

function Pn(t) {
    var e = Nn(t.parent), n = t.structuredQuery, r = n.from ? n.from.length : 0, i = null;
    if (r > 0) {
        R(1 === r);
        var o = n.from[0];
        o.allDescendants ? i = o.collectionId : e = e.child(o.collectionId);
    }
    var s = [];
    n.where && (s = Mn(n.where));
    var u = [];
    n.orderBy && (u = n.orderBy.map((function(t) {
        return function(t) {
            return new qt(jn(t.field), 
            // visible for testing
            function(t) {
                switch (t) {
                  case "ASCENDING":
                    return "asc" /* ASCENDING */;

                  case "DESCENDING":
                    return "desc" /* DESCENDING */;

                  default:
                    return;
                }
            }(t.direction));
        }(t);
    })));
    var a = null;
    n.limit && (a = function(t) {
        var e;
        return rt(e = "object" == typeof t ? t.value : t) ? null : e;
    }(n.limit));
    var c = null;
    n.startAt && (c = Vn(n.startAt));
    var h = null;
    return n.endAt && (h = Vn(n.endAt)), Gt(e, i, u, s, a, "F" /* First */ , c, h);
}

function Mn(t) {
    return t ? void 0 !== t.unaryFilter ? [ Gn(t) ] : void 0 !== t.fieldFilter ? [ Kn(t) ] : void 0 !== t.compositeFilter ? t.compositeFilter.filters.map((function(t) {
        return Mn(t);
    })).reduce((function(t, e) {
        return t.concat(e);
    })) : C() : [];
}

function Fn(t) {
    return {
        before: t.before,
        values: t.position
    };
}

function Vn(t) {
    var e = !!t.before, n = t.values || [];
    return new Ft(n, e);
}

// visible for testing
function qn(t) {
    return pn[t];
}

function Un(t) {
    return yn[t];
}

function Bn(t) {
    return {
        fieldPath: t.canonicalString()
    };
}

function jn(t) {
    return W.fromServerFormat(t.fieldPath);
}

function Kn(t) {
    return At.create(jn(t.fieldFilter.field), function(t) {
        switch (t) {
          case "EQUAL":
            return "==" /* EQUAL */;

          case "NOT_EQUAL":
            return "!=" /* NOT_EQUAL */;

          case "GREATER_THAN":
            return ">" /* GREATER_THAN */;

          case "GREATER_THAN_OR_EQUAL":
            return ">=" /* GREATER_THAN_OR_EQUAL */;

          case "LESS_THAN":
            return "<" /* LESS_THAN */;

          case "LESS_THAN_OR_EQUAL":
            return "<=" /* LESS_THAN_OR_EQUAL */;

          case "ARRAY_CONTAINS":
            return "array-contains" /* ARRAY_CONTAINS */;

          case "IN":
            return "in" /* IN */;

          case "NOT_IN":
            return "not-in" /* NOT_IN */;

          case "ARRAY_CONTAINS_ANY":
            return "array-contains-any" /* ARRAY_CONTAINS_ANY */;

          case "OPERATOR_UNSPECIFIED":
          default:
            return C();
        }
    }(t.fieldFilter.op), t.fieldFilter.value);
}

function Gn(t) {
    switch (t.unaryFilter.op) {
      case "IS_NAN":
        var e = jn(t.unaryFilter.field);
        return At.create(e, "==" /* EQUAL */ , {
            doubleValue: NaN
        });

      case "IS_NULL":
        var n = jn(t.unaryFilter.field);
        return At.create(n, "==" /* EQUAL */ , {
            nullValue: "NULL_VALUE"
        });

      case "IS_NOT_NAN":
        var r = jn(t.unaryFilter.field);
        return At.create(r, "!=" /* NOT_EQUAL */ , {
            doubleValue: NaN
        });

      case "IS_NOT_NULL":
        var i = jn(t.unaryFilter.field);
        return At.create(i, "!=" /* NOT_EQUAL */ , {
            nullValue: "NULL_VALUE"
        });

      case "OPERATOR_UNSPECIFIED":
      default:
        return C();
    }
}

function zn(t) {
    var e = [];
    return t.fields.forEach((function(t) {
        return e.push(t.canonicalString());
    })), {
        fieldPaths: e
    };
}

function Qn(t) {
    // Resource names have at least 4 components (project ID, database ID)
    return t.length >= 4 && "projects" === t.get(0) && "databases" === t.get(2);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Encodes a resource path into a IndexedDb-compatible string form.
 */ function Wn(t) {
    for (var e = "", n = 0; n < t.length; n++) e.length > 0 && (e = Yn(e)), e = Hn(t.get(n), e);
    return Yn(e);
}

/** Encodes a single segment of a resource path into the given result */ function Hn(t, e) {
    for (var n = e, r = t.length, i = 0; i < r; i++) {
        var o = t.charAt(i);
        switch (o) {
          case "\0":
            n += "";
            break;

          case "":
            n += "";
            break;

          default:
            n += o;
        }
    }
    return n;
}

/** Encodes a path separator into the given result */ function Yn(t) {
    return t + "";
}

/**
 * Decodes the given IndexedDb-compatible string form of a resource path into
 * a ResourcePath instance. Note that this method is not suitable for use with
 * decoding resource names from the server; those are One Platform format
 * strings.
 */ function Xn(t) {
    // Event the empty path must encode as a path of at least length 2. A path
    // with exactly 2 must be the empty path.
    var e = t.length;
    if (R(e >= 2), 2 === e) return R("" === t.charAt(0) && "" === t.charAt(1)), z.emptyPath();
    // Escape characters cannot exist past the second-to-last position in the
    // source value.
        for (var n = e - 2, r = [], i = "", o = 0; o < e; ) {
        // The last two characters of a valid encoded path must be a separator, so
        // there must be an end to this segment.
        var s = t.indexOf("", o);
        switch ((s < 0 || s > n) && C(), t.charAt(s + 1)) {
          case "":
            var u = t.substring(o, s), a = void 0;
            0 === i.length ? 
            // Avoid copying for the common case of a segment that excludes \0
            // and \001
            a = u : (a = i += u, i = ""), r.push(a);
            break;

          case "":
            i += t.substring(o, s), i += "\0";
            break;

          case "":
            // The escape character can be used in the output to encode itself.
            i += t.substring(o, s + 1);
            break;

          default:
            C();
        }
        o = s + 2;
    }
    return new z(r);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Schema Version for the Web client:
 * 1.  Initial version including Mutation Queue, Query Cache, and Remote
 *     Document Cache
 * 2.  Used to ensure a targetGlobal object exists and add targetCount to it. No
 *     longer required because migration 3 unconditionally clears it.
 * 3.  Dropped and re-created Query Cache to deal with cache corruption related
 *     to limbo resolution. Addresses
 *     https://github.com/firebase/firebase-ios-sdk/issues/1548
 * 4.  Multi-Tab Support.
 * 5.  Removal of held write acks.
 * 6.  Create document global for tracking document cache size.
 * 7.  Ensure every cached document has a sentinel row with a sequence number.
 * 8.  Add collection-parent index for Collection Group queries.
 * 9.  Change RemoteDocumentChanges store to be keyed by readTime rather than
 *     an auto-incrementing ID. This is required for Index-Free queries.
 * 10. Rewrite the canonical IDs to the explicit Protobuf-based format.
 * 11. Add bundles and named_queries for bundle support.
 */
/**
 * Wrapper class to store timestamps (seconds and nanos) in IndexedDb objects.
 */ var Jn = function(t, e) {
    this.seconds = t, this.nanoseconds = e;
}, $n = function(t, 
/** Whether to allow shared access from multiple tabs. */
e, n) {
    this.ownerId = t, this.allowTabSynchronization = e, this.leaseTimestampMs = n;
};

/**
 * A singleton object to be stored in the 'owner' store in IndexedDb.
 *
 * A given database can have a single primary tab assigned at a given time. That
 * tab must validate that it is still holding the primary lease before every
 * operation that requires locked access. The primary tab should regularly
 * write an updated timestamp to this lease to prevent other tabs from
 * "stealing" the primary lease
 */
/**
 * Name of the IndexedDb object store.
 *
 * Note that the name 'owner' is chosen to ensure backwards compatibility with
 * older clients that only supported single locked access to the persistence
 * layer.
 */
$n.store = "owner", 
/**
     * The key string used for the single object that exists in the
     * DbPrimaryClient store.
     */
$n.key = "owner";

/**
 * An object to be stored in the 'mutationQueues' store in IndexedDb.
 *
 * Each user gets a single queue of MutationBatches to apply to the server.
 * DbMutationQueue tracks the metadata about the queue.
 */
var Zn = function(
/**
     * The normalized user ID to which this queue belongs.
     */
t, 
/**
     * An identifier for the highest numbered batch that has been acknowledged
     * by the server. All MutationBatches in this queue with batchIds less
     * than or equal to this value are considered to have been acknowledged by
     * the server.
     *
     * NOTE: this is deprecated and no longer used by the code.
     */
e, 
/**
     * A stream token that was previously sent by the server.
     *
     * See StreamingWriteRequest in datastore.proto for more details about
     * usage.
     *
     * After sending this token, earlier tokens may not be used anymore so
     * only a single stream token is retained.
     *
     * NOTE: this is deprecated and no longer used by the code.
     */
n) {
    this.userId = t, this.lastAcknowledgedBatchId = e, this.lastStreamToken = n;
};

/** Name of the IndexedDb object store.  */ Zn.store = "mutationQueues", 
/** Keys are automatically assigned via the userId property. */
Zn.keyPath = "userId";

/**
 * An object to be stored in the 'mutations' store in IndexedDb.
 *
 * Represents a batch of user-level mutations intended to be sent to the server
 * in a single write. Each user-level batch gets a separate DbMutationBatch
 * with a new batchId.
 */
var tr = function(
/**
     * The normalized user ID to which this batch belongs.
     */
t, 
/**
     * An identifier for this batch, allocated using an auto-generated key.
     */
e, 
/**
     * The local write time of the batch, stored as milliseconds since the
     * epoch.
     */
n, 
/**
     * A list of "mutations" that represent a partial base state from when this
     * write batch was initially created. During local application of the write
     * batch, these baseMutations are applied prior to the real writes in order
     * to override certain document fields from the remote document cache. This
     * is necessary in the case of non-idempotent writes (e.g. `increment()`
     * transforms) to make sure that the local view of the modified documents
     * doesn't flicker if the remote document cache receives the result of the
     * non-idempotent write before the write is removed from the queue.
     *
     * These mutations are never sent to the backend.
     */
r, 
/**
     * A list of mutations to apply. All mutations will be applied atomically.
     *
     * Mutations are serialized via toMutation().
     */
i) {
    this.userId = t, this.batchId = e, this.localWriteTimeMs = n, this.baseMutations = r, 
    this.mutations = i;
};

/** Name of the IndexedDb object store.  */ tr.store = "mutations", 
/** Keys are automatically assigned via the userId, batchId properties. */
tr.keyPath = "batchId", 
/** The index name for lookup of mutations by user. */
tr.userMutationsIndex = "userMutationsIndex", 
/** The user mutations index is keyed by [userId, batchId] pairs. */
tr.userMutationsKeyPath = [ "userId", "batchId" ];

/**
 * An object to be stored in the 'documentMutations' store in IndexedDb.
 *
 * A manually maintained index of all the mutation batches that affect a given
 * document key. The rows in this table are references based on the contents of
 * DbMutationBatch.mutations.
 */
var er = /** @class */ function() {
    function t() {}
    /**
     * Creates a [userId] key for use in the DbDocumentMutations index to iterate
     * over all of a user's document mutations.
     */    return t.prefixForUser = function(t) {
        return [ t ];
    }, 
    /**
     * Creates a [userId, encodedPath] key for use in the DbDocumentMutations
     * index to iterate over all at document mutations for a given path or lower.
     */
    t.prefixForPath = function(t, e) {
        return [ t, Wn(e) ];
    }, 
    /**
     * Creates a full index key of [userId, encodedPath, batchId] for inserting
     * and deleting into the DbDocumentMutations index.
     */
    t.key = function(t, e, n) {
        return [ t, Wn(e), n ];
    }, t;
}();

er.store = "documentMutations", 
/**
     * Because we store all the useful information for this store in the key,
     * there is no useful information to store as the value. The raw (unencoded)
     * path cannot be stored because IndexedDb doesn't store prototype
     * information.
     */
er.PLACEHOLDER = new er;

/**
 * Represents the known absence of a document at a particular version.
 * Stored in IndexedDb as part of a DbRemoteDocument object.
 */
var nr = function(t, e) {
    this.path = t, this.readTime = e;
}, rr = function(t, e) {
    this.path = t, this.version = e;
}, ir = 
// TODO: We are currently storing full document keys almost three times
// (once as part of the primary key, once - partly - as `parentPath` and once
// inside the encoded documents). During our next migration, we should
// rewrite the primary key as parentPath + document ID which would allow us
// to drop one value.
function(
/**
     * Set to an instance of DbUnknownDocument if the data for a document is
     * not known, but it is known that a document exists at the specified
     * version (e.g. it had a successful update applied to it)
     */
t, 
/**
     * Set to an instance of a DbNoDocument if it is known that no document
     * exists.
     */
e, 
/**
     * Set to an instance of a Document if there's a cached version of the
     * document.
     */
n, 
/**
     * Documents that were written to the remote document store based on
     * a write acknowledgment are marked with `hasCommittedMutations`. These
     * documents are potentially inconsistent with the backend's copy and use
     * the write's commit version as their document version.
     */
r, 
/**
     * When the document was read from the backend. Undefined for data written
     * prior to schema version 9.
     */
i, 
/**
     * The path of the collection this document is part of. Undefined for data
     * written prior to schema version 9.
     */
o) {
    this.unknownDocument = t, this.noDocument = e, this.document = n, this.hasCommittedMutations = r, 
    this.readTime = i, this.parentPath = o;
};

/**
 * Represents a document that is known to exist but whose data is unknown.
 * Stored in IndexedDb as part of a DbRemoteDocument object.
 */ ir.store = "remoteDocuments", 
/**
     * An index that provides access to all entries sorted by read time (which
     * corresponds to the last modification time of each row).
     *
     * This index is used to provide a changelog for Multi-Tab.
     */
ir.readTimeIndex = "readTimeIndex", ir.readTimeIndexPath = "readTime", 
/**
     * An index that provides access to documents in a collection sorted by read
     * time.
     *
     * This index is used to allow the RemoteDocumentCache to fetch newly changed
     * documents in a collection.
     */
ir.collectionReadTimeIndex = "collectionReadTimeIndex", ir.collectionReadTimeIndexPath = [ "parentPath", "readTime" ];

/**
 * Contains a single entry that has metadata about the remote document cache.
 */
var or = 
/**
     * @param byteSize - Approximately the total size in bytes of all the
     * documents in the document cache.
     */
function(t) {
    this.byteSize = t;
};

or.store = "remoteDocumentGlobal", or.key = "remoteDocumentGlobalKey";

/**
 * An object to be stored in the 'targets' store in IndexedDb.
 *
 * This is based on and should be kept in sync with the proto used in the iOS
 * client.
 *
 * Each query the client listens to against the server is tracked on disk so
 * that the query can be efficiently resumed on restart.
 */
var sr = function(
/**
     * An auto-generated sequential numeric identifier for the query.
     *
     * Queries are stored using their canonicalId as the key, but these
     * canonicalIds can be quite long so we additionally assign a unique
     * queryId which can be used by referenced data structures (e.g.
     * indexes) to minimize the on-disk cost.
     */
t, 
/**
     * The canonical string representing this query. This is not unique.
     */
e, 
/**
     * The last readTime received from the Watch Service for this query.
     *
     * This is the same value as TargetChange.read_time in the protos.
     */
n, 
/**
     * An opaque, server-assigned token that allows watching a query to be
     * resumed after disconnecting without retransmitting all the data
     * that matches the query. The resume token essentially identifies a
     * point in time from which the server should resume sending results.
     *
     * This is related to the snapshotVersion in that the resumeToken
     * effectively also encodes that value, but the resumeToken is opaque
     * and sometimes encodes additional information.
     *
     * A consequence of this is that the resumeToken should be used when
     * asking the server to reason about where this client is in the watch
     * stream, but the client should use the snapshotVersion for its own
     * purposes.
     *
     * This is the same value as TargetChange.resume_token in the protos.
     */
r, 
/**
     * A sequence number representing the last time this query was
     * listened to, used for garbage collection purposes.
     *
     * Conventionally this would be a timestamp value, but device-local
     * clocks are unreliable and they must be able to create new listens
     * even while disconnected. Instead this should be a monotonically
     * increasing number that's incremented on each listen call.
     *
     * This is different from the queryId since the queryId is an
     * immutable identifier assigned to the Query on first use while
     * lastListenSequenceNumber is updated every time the query is
     * listened to.
     */
i, 
/**
     * Denotes the maximum snapshot version at which the associated query view
     * contained no limbo documents.  Undefined for data written prior to
     * schema version 9.
     */
o, 
/**
     * The query for this target.
     *
     * Because canonical ids are not unique we must store the actual query. We
     * use the proto to have an object we can persist without having to
     * duplicate translation logic to and from a `Query` object.
     */
s) {
    this.targetId = t, this.canonicalId = e, this.readTime = n, this.resumeToken = r, 
    this.lastListenSequenceNumber = i, this.lastLimboFreeSnapshotVersion = o, this.query = s;
};

sr.store = "targets", 
/** Keys are automatically assigned via the targetId property. */
sr.keyPath = "targetId", 
/** The name of the queryTargets index. */
sr.queryTargetsIndexName = "queryTargetsIndex", 
/**
     * The index of all canonicalIds to the targets that they match. This is not
     * a unique mapping because canonicalId does not promise a unique name for all
     * possible queries, so we append the targetId to make the mapping unique.
     */
sr.queryTargetsKeyPath = [ "canonicalId", "targetId" ];

/**
 * An object representing an association between a target and a document, or a
 * sentinel row marking the last sequence number at which a document was used.
 * Each document cached must have a corresponding sentinel row before lru
 * garbage collection is enabled.
 *
 * The target associations and sentinel rows are co-located so that orphaned
 * documents and their sequence numbers can be identified efficiently via a scan
 * of this store.
 */
var ur = function(
/**
     * The targetId identifying a target or 0 for a sentinel row.
     */
t, 
/**
     * The path to the document, as encoded in the key.
     */
e, 
/**
     * If this is a sentinel row, this should be the sequence number of the last
     * time the document specified by `path` was used. Otherwise, it should be
     * `undefined`.
     */
n) {
    this.targetId = t, this.path = e, this.sequenceNumber = n;
};

/** Name of the IndexedDb object store.  */ ur.store = "targetDocuments", 
/** Keys are automatically assigned via the targetId, path properties. */
ur.keyPath = [ "targetId", "path" ], 
/** The index name for the reverse index. */
ur.documentTargetsIndex = "documentTargetsIndex", 
/** We also need to create the reverse index for these properties. */
ur.documentTargetsKeyPath = [ "path", "targetId" ];

/**
 * A record of global state tracked across all Targets, tracked separately
 * to avoid the need for extra indexes.
 *
 * This should be kept in-sync with the proto used in the iOS client.
 */
var ar = function(
/**
     * The highest numbered target id across all targets.
     *
     * See DbTarget.targetId.
     */
t, 
/**
     * The highest numbered lastListenSequenceNumber across all targets.
     *
     * See DbTarget.lastListenSequenceNumber.
     */
e, 
/**
     * A global snapshot version representing the last consistent snapshot we
     * received from the backend. This is monotonically increasing and any
     * snapshots received from the backend prior to this version (e.g. for
     * targets resumed with a resumeToken) should be suppressed (buffered)
     * until the backend has caught up to this snapshot version again. This
     * prevents our cache from ever going backwards in time.
     */
n, 
/**
     * The number of targets persisted.
     */
r) {
    this.highestTargetId = t, this.highestListenSequenceNumber = e, this.lastRemoteSnapshotVersion = n, 
    this.targetCount = r;
};

/**
 * The key string used for the single object that exists in the
 * DbTargetGlobal store.
 */ ar.key = "targetGlobalKey", ar.store = "targetGlobal";

/**
 * An object representing an association between a Collection id (e.g. 'messages')
 * to a parent path (e.g. '/chats/123') that contains it as a (sub)collection.
 * This is used to efficiently find all collections to query when performing
 * a Collection Group query.
 */
var cr = function(
/**
     * The collectionId (e.g. 'messages')
     */
t, 
/**
     * The path to the parent (either a document location or an empty path for
     * a root-level collection).
     */
e) {
    this.collectionId = t, this.parent = e;
};

/** Name of the IndexedDb object store. */ cr.store = "collectionParents", 
/** Keys are automatically assigned via the collectionId, parent properties. */
cr.keyPath = [ "collectionId", "parent" ];

/**
 * A record of the metadata state of each client.
 *
 * PORTING NOTE: This is used to synchronize multi-tab state and does not need
 * to be ported to iOS or Android.
 */
var hr = function(
// Note: Previous schema versions included a field
// "lastProcessedDocumentChangeId". Don't use anymore.
/** The auto-generated client id assigned at client startup. */
t, 
/** The last time this state was updated. */
e, 
/** Whether the client's network connection is enabled. */
n, 
/** Whether this client is running in a foreground tab. */
r) {
    this.clientId = t, this.updateTimeMs = e, this.networkEnabled = n, this.inForeground = r;
};

/** Name of the IndexedDb object store. */ hr.store = "clientMetadata", 
/** Keys are automatically assigned via the clientId properties. */
hr.keyPath = "clientId";

/**
 * A object representing a bundle loaded by the SDK.
 */
var fr = function(
/** The ID of the loaded bundle. */
t, 
/** The create time of the loaded bundle. */
e, 
/** The schema version of the loaded bundle. */
n) {
    this.bundleId = t, this.createTime = e, this.version = n;
};

/** Name of the IndexedDb object store. */ fr.store = "bundles", fr.keyPath = "bundleId";

/**
 * A object representing a named query loaded by the SDK via a bundle.
 */
var lr = function(
/** The name of the query. */
t, 
/** The read time of the results saved in the bundle from the named query. */
e, 
/** The query saved in the bundle. */
n) {
    this.name = t, this.readTime = e, this.bundledQuery = n;
};

/** Name of the IndexedDb object store. */ lr.store = "namedQueries", lr.keyPath = "name";

// Visible for testing
var dr = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__spreadArray"])(Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__spreadArray"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__spreadArray"])(Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__spreadArray"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__spreadArray"])(Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__spreadArray"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__spreadArray"])(Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__spreadArray"])([], [ Zn.store, tr.store, er.store, ir.store, sr.store, $n.store, ar.store, ur.store ]), [ hr.store ])), [ or.store ])), [ cr.store ])), [ fr.store, lr.store ]), pr = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.", yr = /** @class */ function() {
    function t() {
        this.onCommittedListeners = [];
    }
    return t.prototype.addOnCommittedListener = function(t) {
        this.onCommittedListeners.push(t);
    }, t.prototype.raiseOnCommittedEvent = function() {
        this.onCommittedListeners.forEach((function(t) {
            return t();
        }));
    }, t;
}(), vr = function() {
    var t = this;
    this.promise = new Promise((function(e, n) {
        t.resolve = e, t.reject = n;
    }));
}, mr = /** @class */ function() {
    function t(t) {
        var e = this;
        // NOTE: next/catchCallback will always point to our own wrapper functions,
        // not the user's raw next() or catch() callbacks.
                this.nextCallback = null, this.catchCallback = null, 
        // When the operation resolves, we'll set result or error and mark isDone.
        this.result = void 0, this.error = void 0, this.isDone = !1, 
        // Set to true when .then() or .catch() are called and prevents additional
        // chaining.
        this.callbackAttached = !1, t((function(t) {
            e.isDone = !0, e.result = t, e.nextCallback && 
            // value should be defined unless T is Void, but we can't express
            // that in the type system.
            e.nextCallback(t);
        }), (function(t) {
            e.isDone = !0, e.error = t, e.catchCallback && e.catchCallback(t);
        }));
    }
    return t.prototype.catch = function(t) {
        return this.next(void 0, t);
    }, t.prototype.next = function(e, n) {
        var r = this;
        return this.callbackAttached && C(), this.callbackAttached = !0, this.isDone ? this.error ? this.wrapFailure(n, this.error) : this.wrapSuccess(e, this.result) : new t((function(t, i) {
            r.nextCallback = function(n) {
                r.wrapSuccess(e, n).next(t, i);
            }, r.catchCallback = function(e) {
                r.wrapFailure(n, e).next(t, i);
            };
        }));
    }, t.prototype.toPromise = function() {
        var t = this;
        return new Promise((function(e, n) {
            t.next(e, n);
        }));
    }, t.prototype.wrapUserFunction = function(e) {
        try {
            var n = e();
            return n instanceof t ? n : t.resolve(n);
        } catch (e) {
            return t.reject(e);
        }
    }, t.prototype.wrapSuccess = function(e, n) {
        return e ? this.wrapUserFunction((function() {
            return e(n);
        })) : t.resolve(n);
    }, t.prototype.wrapFailure = function(e, n) {
        return e ? this.wrapUserFunction((function() {
            return e(n);
        })) : t.reject(n);
    }, t.resolve = function(e) {
        return new t((function(t, n) {
            t(e);
        }));
    }, t.reject = function(e) {
        return new t((function(t, n) {
            n(e);
        }));
    }, t.waitFor = function(
    // Accept all Promise types in waitFor().
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e) {
        return new t((function(t, n) {
            var r = 0, i = 0, o = !1;
            e.forEach((function(e) {
                ++r, e.next((function() {
                    ++i, o && i === r && t();
                }), (function(t) {
                    return n(t);
                }));
            })), o = !0, i === r && t();
        }));
    }, 
    /**
     * Given an array of predicate functions that asynchronously evaluate to a
     * boolean, implements a short-circuiting `or` between the results. Predicates
     * will be evaluated until one of them returns `true`, then stop. The final
     * result will be whether any of them returned `true`.
     */
    t.or = function(e) {
        for (var n = t.resolve(!1), r = function(e) {
            n = n.next((function(n) {
                return n ? t.resolve(n) : e();
            }));
        }, i = 0, o = e; i < o.length; i++) {
            r(o[i]);
        }
        return n;
    }, t.forEach = function(t, e) {
        var n = this, r = [];
        return t.forEach((function(t, i) {
            r.push(e.call(n, t, i));
        })), this.waitFor(r);
    }, t;
}(), gr = /** @class */ function() {
    function t(t, e) {
        var n = this;
        this.action = t, this.transaction = e, this.aborted = !1, 
        /**
             * A promise that resolves with the result of the IndexedDb transaction.
             */
        this.ft = new vr, this.transaction.oncomplete = function() {
            n.ft.resolve();
        }, this.transaction.onabort = function() {
            e.error ? n.ft.reject(new Ir(t, e.error)) : n.ft.resolve();
        }, this.transaction.onerror = function(e) {
            var r = Nr(e.target.error);
            n.ft.reject(new Ir(t, r));
        };
    }
    return t.open = function(e, n, r, i) {
        try {
            return new t(n, e.transaction(i, r));
        } catch (e) {
            throw new Ir(n, e);
        }
    }, Object.defineProperty(t.prototype, "dt", {
        get: function() {
            return this.ft.promise;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.abort = function(t) {
        t && this.ft.reject(t), this.aborted || (D("SimpleDb", "Aborting transaction:", t ? t.message : "Client-initiated abort"), 
        this.aborted = !0, this.transaction.abort());
    }, 
    /**
     * Returns a SimpleDbStore<KeyType, ValueType> for the specified store. All
     * operations performed on the SimpleDbStore happen within the context of this
     * transaction and it cannot be used anymore once the transaction is
     * completed.
     *
     * Note that we can't actually enforce that the KeyType and ValueType are
     * correct, but they allow type safety through the rest of the consuming code.
     */
    t.prototype.store = function(t) {
        var e = this.transaction.objectStore(t);
        return new Er(e);
    }, t;
}(), wr = /** @class */ function() {
    /*
     * Creates a new SimpleDb wrapper for IndexedDb database `name`.
     *
     * Note that `version` must not be a downgrade. IndexedDB does not support
     * downgrading the schema version. We currently do not support any way to do
     * versioning outside of IndexedDB's versioning mechanism, as only
     * version-upgrade transactions are allowed to do things like create
     * objectstores.
     */
    function e(n, r, i) {
        this.name = n, this.version = r, this.wt = i, 
        // NOTE: According to https://bugs.webkit.org/show_bug.cgi?id=197050, the
        // bug we're checking for should exist in iOS >= 12.2 and < 13, but for
        // whatever reason it's much harder to hit after 12.2 so we only proactively
        // log on 12.2.
        12.2 === e._t(Object(_firebase_util__WEBPACK_IMPORTED_MODULE_0__["getUA"])()) && A("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
    }
    /** Deletes the specified database. */    return e.delete = function(t) {
        return D("SimpleDb", "Removing database:", t), Tr(window.indexedDB.deleteDatabase(t)).toPromise();
    }, 
    /** Returns true if IndexedDB is available in the current environment. */ e.yt = function() {
        if ("undefined" == typeof indexedDB) return !1;
        if (e.gt()) return !0;
        // We extensively use indexed array values and compound keys,
        // which IE and Edge do not support. However, they still have indexedDB
        // defined on the window, so we need to check for them here and make sure
        // to return that persistence is not enabled for those browsers.
        // For tracking support of this feature, see here:
        // https://developer.microsoft.com/en-us/microsoft-edge/platform/status/indexeddbarraysandmultientrysupport/
        // Check the UA string to find out the browser.
                var n = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_0__["getUA"])(), r = e._t(n), i = 0 < r && r < 10, o = e.Et(n), s = 0 < o && o < 4.5;
        // IE 10
        // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
        // IE 11
        // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
        // Edge
        // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML,
        // like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
        // iOS Safari: Disable for users running iOS version < 10.
                return !(n.indexOf("MSIE ") > 0 || n.indexOf("Trident/") > 0 || n.indexOf("Edge/") > 0 || i || s);
    }, 
    /**
     * Returns true if the backing IndexedDB store is the Node IndexedDBShim
     * (see https://github.com/axemclion/IndexedDBShim).
     */
    e.gt = function() {
        var t;
        return "undefined" != typeof process && "YES" === (null === (t = process.env) || void 0 === t ? void 0 : t.Tt);
    }, 
    /** Helper to get a typed SimpleDbStore from a transaction. */ e.It = function(t, e) {
        return t.store(e);
    }, 
    // visible for testing
    /** Parse User Agent to determine iOS version. Returns -1 if not found. */
    e._t = function(t) {
        var e = t.match(/i(?:phone|pad|pod) os ([\d_]+)/i), n = e ? e[1].split("_").slice(0, 2).join(".") : "-1";
        return Number(n);
    }, 
    // visible for testing
    /** Parse User Agent to determine Android version. Returns -1 if not found. */
    e.Et = function(t) {
        var e = t.match(/Android ([\d.]+)/i), n = e ? e[1].split(".").slice(0, 2).join(".") : "-1";
        return Number(n);
    }, 
    /**
     * Opens the specified database, creating or upgrading it if necessary.
     */
    e.prototype.At = function(t) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
            var e, n = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(r) {
                switch (r.label) {
                  case 0:
                    return this.db ? [ 3 /*break*/ , 2 ] : (D("SimpleDb", "Opening database:", this.name), 
                    e = this, [ 4 /*yield*/ , new Promise((function(e, r) {
                        // TODO(mikelehen): Investigate browser compatibility.
                        // https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
                        // suggests IE9 and older WebKit browsers handle upgrade
                        // differently. They expect setVersion, as described here:
                        // https://developer.mozilla.org/en-US/docs/Web/API/IDBVersionChangeRequest/setVersion
                        var i = indexedDB.open(n.name, n.version);
                        i.onsuccess = function(t) {
                            var n = t.target.result;
                            e(n);
                        }, i.onblocked = function() {
                            r(new Ir(t, "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."));
                        }, i.onerror = function(e) {
                            var n = e.target.error;
                            "VersionError" === n.name ? r(new T(E.FAILED_PRECONDITION, "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")) : r(new Ir(t, n));
                        }, i.onupgradeneeded = function(t) {
                            D("SimpleDb", 'Database "' + n.name + '" requires upgrade from version:', t.oldVersion);
                            var e = t.target.result;
                            n.wt.Rt(e, i.transaction, t.oldVersion, n.version).next((function() {
                                D("SimpleDb", "Database upgrade to version " + n.version + " complete");
                            }));
                        };
                    })) ]);

                  case 1:
                    e.db = r.sent(), r.label = 2;

                  case 2:
                    return [ 2 /*return*/ , (this.bt && (this.db.onversionchange = function(t) {
                        return n.bt(t);
                    }), this.db) ];
                }
            }));
        }));
    }, e.prototype.vt = function(t) {
        this.bt = t, this.db && (this.db.onversionchange = function(e) {
            return t(e);
        });
    }, e.prototype.runTransaction = function(t, e, n, r) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
            var i, o, s, u, a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(c) {
                switch (c.label) {
                  case 0:
                    i = "readonly" === e, o = 0, s = function() {
                        var e, s, a, c, h;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(f) {
                            switch (f.label) {
                              case 0:
                                ++o, f.label = 1;

                              case 1:
                                return f.trys.push([ 1, 4, , 5 ]), [ 4 /*yield*/ , u.At(t) ];

                              case 2:
                                // Wait for the transaction to complete (i.e. IndexedDb's onsuccess event to
                                // fire), but still return the original transactionFnResult back to the
                                // caller.
                                return u.db = f.sent(), e = gr.open(u.db, t, i ? "readonly" : "readwrite", n), s = r(e).catch((function(t) {
                                    // Abort the transaction if there was an error.
                                    return e.abort(t), mr.reject(t);
                                })).toPromise(), a = {}, s.catch((function() {})), [ 4 /*yield*/ , e.dt ];

                              case 3:
                                return [ 2 /*return*/ , (a.value = (
                                // Wait for the transaction to complete (i.e. IndexedDb's onsuccess event to
                                // fire), but still return the original transactionFnResult back to the
                                // caller.
                                f.sent(), s), a) ];

                              case 4:
                                return c = f.sent(), h = "FirebaseError" !== c.name && o < 3, D("SimpleDb", "Transaction failed with error:", c.message, "Retrying:", h), 
                                u.close(), h ? [ 3 /*break*/ , 5 ] : [ 2 /*return*/ , {
                                    value: Promise.reject(c)
                                } ];

                              case 5:
                                return [ 2 /*return*/ ];
                            }
                        }));
                    }, u = this, c.label = 1;

                  case 1:
                    return [ 5 /*yield**/ , s() ];

                  case 2:
                    if ("object" == typeof (a = c.sent())) return [ 2 /*return*/ , a.value ];
                    c.label = 3;

                  case 3:
                    return [ 3 /*break*/ , 1 ];

                  case 4:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, e.prototype.close = function() {
        this.db && this.db.close(), this.db = void 0;
    }, e;
}(), br = /** @class */ function() {
    function t(t) {
        this.Pt = t, this.Vt = !1, this.St = null;
    }
    return Object.defineProperty(t.prototype, "isDone", {
        get: function() {
            return this.Vt;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "Dt", {
        get: function() {
            return this.St;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "cursor", {
        set: function(t) {
            this.Pt = t;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * This function can be called to stop iteration at any point.
     */
    t.prototype.done = function() {
        this.Vt = !0;
    }, 
    /**
     * This function can be called to skip to that next key, which could be
     * an index or a primary key.
     */
    t.prototype.Ct = function(t) {
        this.St = t;
    }, 
    /**
     * Delete the current cursor value from the object store.
     *
     * NOTE: You CANNOT do this with a keysOnly query.
     */
    t.prototype.delete = function() {
        return Tr(this.Pt.delete());
    }, t;
}(), Ir = /** @class */ function(t) {
    function e(e, n) {
        var r = this;
        return (r = t.call(this, E.UNAVAILABLE, "IndexedDB transaction '" + e + "' failed: " + n) || this).name = "IndexedDbTransactionError", 
        r;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e;
}(T);

// V2 is no longer usable (see comment at top of file)
// Visible for testing
/**
 * A base class representing a persistence transaction, encapsulating both the
 * transaction's sequence numbers as well as a list of onCommitted listeners.
 *
 * When you call Persistence.runTransaction(), it will create a transaction and
 * pass it to your callback. You then pass it to any method that operates
 * on persistence.
 */
/** Verifies whether `e` is an IndexedDbTransactionError. */ function _r(t) {
    // Use name equality, as instanceof checks on errors don't work with errors
    // that wrap other errors.
    return "IndexedDbTransactionError" === t.name;
}

/**
 * A wrapper around an IDBObjectStore providing an API that:
 *
 * 1) Has generic KeyType / ValueType parameters to provide strongly-typed
 * methods for acting against the object store.
 * 2) Deals with IndexedDB's onsuccess / onerror event callbacks, making every
 * method return a PersistencePromise instead.
 * 3) Provides a higher-level API to avoid needing to do excessive wrapping of
 * intermediate IndexedDB types (IDBCursorWithValue, etc.)
 */ var Er = /** @class */ function() {
    function t(t) {
        this.store = t;
    }
    return t.prototype.put = function(t, e) {
        var n;
        return void 0 !== e ? (D("SimpleDb", "PUT", this.store.name, t, e), n = this.store.put(e, t)) : (D("SimpleDb", "PUT", this.store.name, "<auto-key>", t), 
        n = this.store.put(t)), Tr(n);
    }, 
    /**
     * Adds a new value into an Object Store and returns the new key. Similar to
     * IndexedDb's `add()`, this method will fail on primary key collisions.
     *
     * @param value - The object to write.
     * @returns The key of the value to add.
     */
    t.prototype.add = function(t) {
        return D("SimpleDb", "ADD", this.store.name, t, t), Tr(this.store.add(t));
    }, 
    /**
     * Gets the object with the specified key from the specified store, or null
     * if no object exists with the specified key.
     *
     * @key The key of the object to get.
     * @returns The object with the specified key or null if no object exists.
     */
    t.prototype.get = function(t) {
        var e = this;
        // We're doing an unsafe cast to ValueType.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                return Tr(this.store.get(t)).next((function(n) {
            // Normalize nonexistence to null.
            return void 0 === n && (n = null), D("SimpleDb", "GET", e.store.name, t, n), n;
        }));
    }, t.prototype.delete = function(t) {
        return D("SimpleDb", "DELETE", this.store.name, t), Tr(this.store.delete(t));
    }, 
    /**
     * If we ever need more of the count variants, we can add overloads. For now,
     * all we need is to count everything in a store.
     *
     * Returns the number of rows in the store.
     */
    t.prototype.count = function() {
        return D("SimpleDb", "COUNT", this.store.name), Tr(this.store.count());
    }, t.prototype.Nt = function(t, e) {
        var n = this.cursor(this.options(t, e)), r = [];
        return this.xt(n, (function(t, e) {
            r.push(e);
        })).next((function() {
            return r;
        }));
    }, t.prototype.Ft = function(t, e) {
        D("SimpleDb", "DELETE ALL", this.store.name);
        var n = this.options(t, e);
        n.kt = !1;
        var r = this.cursor(n);
        return this.xt(r, (function(t, e, n) {
            return n.delete();
        }));
    }, t.prototype.Ot = function(t, e) {
        var n;
        e ? n = t : (n = {}, e = t);
        var r = this.cursor(n);
        return this.xt(r, e);
    }, 
    /**
     * Iterates over a store, but waits for the given callback to complete for
     * each entry before iterating the next entry. This allows the callback to do
     * asynchronous work to determine if this iteration should continue.
     *
     * The provided callback should return `true` to continue iteration, and
     * `false` otherwise.
     */
    t.prototype.$t = function(t) {
        var e = this.cursor({});
        return new mr((function(n, r) {
            e.onerror = function(t) {
                var e = Nr(t.target.error);
                r(e);
            }, e.onsuccess = function(e) {
                var r = e.target.result;
                r ? t(r.primaryKey, r.value).next((function(t) {
                    t ? r.continue() : n();
                })) : n();
            };
        }));
    }, t.prototype.xt = function(t, e) {
        var n = [];
        return new mr((function(r, i) {
            t.onerror = function(t) {
                i(t.target.error);
            }, t.onsuccess = function(t) {
                var i = t.target.result;
                if (i) {
                    var o = new br(i), s = e(i.primaryKey, i.value, o);
                    if (s instanceof mr) {
                        var u = s.catch((function(t) {
                            return o.done(), mr.reject(t);
                        }));
                        n.push(u);
                    }
                    o.isDone ? r() : null === o.Dt ? i.continue() : i.continue(o.Dt);
                } else r();
            };
        })).next((function() {
            return mr.waitFor(n);
        }));
    }, t.prototype.options = function(t, e) {
        var n;
        return void 0 !== t && ("string" == typeof t ? n = t : e = t), {
            index: n,
            range: e
        };
    }, t.prototype.cursor = function(t) {
        var e = "next";
        if (t.reverse && (e = "prev"), t.index) {
            var n = this.store.index(t.index);
            return t.kt ? n.openKeyCursor(t.range, e) : n.openCursor(t.range, e);
        }
        return this.store.openCursor(t.range, e);
    }, t;
}();

/**
 * Wraps an IDBRequest in a PersistencePromise, using the onsuccess / onerror
 * handlers to resolve / reject the PersistencePromise as appropriate.
 */ function Tr(t) {
    return new mr((function(e, n) {
        t.onsuccess = function(t) {
            var n = t.target.result;
            e(n);
        }, t.onerror = function(t) {
            var e = Nr(t.target.error);
            n(e);
        };
    }));
}

// Guard so we only report the error once.
var Sr = !1;

function Nr(e) {
    var n = wr._t(Object(_firebase_util__WEBPACK_IMPORTED_MODULE_0__["getUA"])());
    if (n >= 12.2 && n < 13) {
        var r = "An internal error was encountered in the Indexed Database server";
        if (e.message.indexOf(r) >= 0) {
            // Wrap error in a more descriptive one.
            var i = new T("internal", "IOS_INDEXEDDB_BUG1: IndexedDb has thrown '" + r + "'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
            return Sr || (Sr = !0, 
            // Throw a global exception outside of this promise chain, for the user to
            // potentially catch.
            setTimeout((function() {
                throw i;
            }), 0)), i;
        }
    }
    return e;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Dr = /** @class */ function(t) {
    function e(e, n) {
        var r = this;
        return (r = t.call(this) || this).Mt = e, r.currentSequenceNumber = n, r;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e;
}(yr);

function Ar(t, e) {
    var n = O(t);
    return wr.It(n.Mt, e);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A batch of mutations that will be sent as one unit to the backend.
 */ var kr = /** @class */ function() {
    /**
     * @param batchId - The unique ID of this mutation batch.
     * @param localWriteTime - The original write time of this mutation.
     * @param baseMutations - Mutations that are used to populate the base
     * values when this mutation is applied locally. This can be used to locally
     * overwrite values that are persisted in the remote document cache. Base
     * mutations are never sent to the backend.
     * @param mutations - The user-provided mutations in this mutation batch.
     * User-provided mutations are applied both locally and remotely on the
     * backend.
     */
    function t(t, e, n, r) {
        this.batchId = t, this.localWriteTime = e, this.baseMutations = n, this.mutations = r
        /**
     * Applies all the mutations in this MutationBatch to the specified document
     * to compute the state of the remote document
     *
     * @param document - The document to apply mutations to.
     * @param batchResult - The result of applying the MutationBatch to the
     * backend.
     */;
    }
    return t.prototype.applyToRemoteDocument = function(t, e) {
        for (var n = e.mutationResults, r = 0; r < this.mutations.length; r++) {
            var i = this.mutations[r];
            i.key.isEqual(t.key) && Ne(i, t, n[r]);
        }
    }, 
    /**
     * Computes the local view of a document given all the mutations in this
     * batch.
     *
     * @param document - The document to apply mutations to.
     */
    t.prototype.applyToLocalView = function(t) {
        // First, apply the base state. This allows us to apply non-idempotent
        // transform against a consistent set of values.
        for (var e = 0, n = this.baseMutations; e < n.length; e++) {
            (o = n[e]).key.isEqual(t.key) && De(o, t, this.localWriteTime);
        }
        // Second, apply all user-provided mutations.
                for (var r = 0, i = this.mutations; r < i.length; r++) {
            var o;
            (o = i[r]).key.isEqual(t.key) && De(o, t, this.localWriteTime);
        }
    }, 
    /**
     * Computes the local view for all provided documents given the mutations in
     * this batch.
     */
    t.prototype.applyToLocalDocumentSet = function(t) {
        var e = this;
        // TODO(mrschmidt): This implementation is O(n^2). If we apply the mutations
        // directly (as done in `applyToLocalView()`), we can reduce the complexity
        // to O(n).
                this.mutations.forEach((function(n) {
            var r = t.get(n.key), i = r;
            // TODO(mutabledocuments): This method should take a MutableDocumentMap
            // and we should remove this cast.
                        e.applyToLocalView(i), r.isValidDocument() || i.convertToNoDocument(U.min());
        }));
    }, t.prototype.keys = function() {
        return this.mutations.reduce((function(t, e) {
            return t.add(e.key);
        }), en());
    }, t.prototype.isEqual = function(t) {
        return this.batchId === t.batchId && F(this.mutations, t.mutations, (function(t, e) {
            return ke(t, e);
        })) && F(this.baseMutations, t.baseMutations, (function(t, e) {
            return ke(t, e);
        }));
    }, t;
}(), xr = /** @class */ function() {
    function t(t, e, n, 
    /**
     * A pre-computed mapping from each mutated document to the resulting
     * version.
     */
    r) {
        this.batch = t, this.commitVersion = e, this.mutationResults = n, this.docVersions = r
        /**
     * Creates a new MutationBatchResult for the given batch and results. There
     * must be one result for each mutation in the batch. This static factory
     * caches a document=&gt;version mapping (docVersions).
     */;
    }
    return t.from = function(e, n, r) {
        R(e.mutations.length === r.length);
        for (var i = Ze(), o = e.mutations, s = 0; s < o.length; s++) i = i.insert(o[s].key, r[s].version);
        return new t(e, n, r, i);
    }, t;
}(), Cr = /** @class */ function() {
    function t(
    /** The target being listened to. */
    t, 
    /**
     * The target ID to which the target corresponds; Assigned by the
     * LocalStore for user listens and by the SyncEngine for limbo watches.
     */
    e, 
    /** The purpose of the target. */
    n, 
    /**
     * The sequence number of the last transaction during which this target data
     * was modified.
     */
    r, 
    /** The latest snapshot version seen for this target. */
    i
    /**
     * The maximum snapshot version at which the associated view
     * contained no limbo documents.
     */ , o
    /**
     * An opaque, server-assigned token that allows watching a target to be
     * resumed after disconnecting without retransmitting all the data that
     * matches the target. The resume token essentially identifies a point in
     * time from which the server should resume sending results.
     */ , s) {
        void 0 === i && (i = U.min()), void 0 === o && (o = U.min()), void 0 === s && (s = Y.EMPTY_BYTE_STRING), 
        this.target = t, this.targetId = e, this.purpose = n, this.sequenceNumber = r, this.snapshotVersion = i, 
        this.lastLimboFreeSnapshotVersion = o, this.resumeToken = s;
    }
    /** Creates a new target data instance with an updated sequence number. */    return t.prototype.withSequenceNumber = function(e) {
        return new t(this.target, this.targetId, this.purpose, e, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken);
    }, 
    /**
     * Creates a new target data instance with an updated resume token and
     * snapshot version.
     */
    t.prototype.withResumeToken = function(e, n) {
        return new t(this.target, this.targetId, this.purpose, this.sequenceNumber, n, this.lastLimboFreeSnapshotVersion, e);
    }, 
    /**
     * Creates a new target data instance with an updated last limbo free
     * snapshot version number.
     */
    t.prototype.withLastLimboFreeSnapshotVersion = function(e) {
        return new t(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, e, this.resumeToken);
    }, t;
}(), Rr = function(t) {
    this.Lt = t;
};

/** The result of applying a mutation batch to the backend. */
/** Decodes a remote document from storage locally to a Document. */ function Or(t, e) {
    if (e.document) return xn(t.Lt, e.document, !!e.hasCommittedMutations);
    if (e.noDocument) {
        var n = st.fromSegments(e.noDocument.path), r = Vr(e.noDocument.readTime), i = _t.newNoDocument(n, r);
        return e.hasCommittedMutations ? i.setHasCommittedMutations() : i;
    }
    if (e.unknownDocument) {
        var o = st.fromSegments(e.unknownDocument.path);
        r = Vr(e.unknownDocument.version);
        return _t.newUnknownDocument(o, r);
    }
    return C();
}

/** Encodes a document for storage locally. */ function Lr(t, e, n) {
    var r = Pr(n), i = e.key.path.popLast().toArray();
    if (e.isFoundDocument()) {
        var o = function(t, e) {
            return {
                name: En(t, e.key),
                fields: e.data.toProto().mapValue.fields,
                updateTime: mn(t, e.version.toTimestamp())
            };
        }(t.Lt, e), s = e.hasCommittedMutations;
        return new ir(
        /* unknownDocument= */ null, 
        /* noDocument= */ null, o, s, r, i);
    }
    if (e.isNoDocument()) {
        var u = e.key.path.toArray(), a = Fr(e.version);
        s = e.hasCommittedMutations;
        return new ir(
        /* unknownDocument= */ null, new nr(u, a), 
        /* document= */ null, s, r, i);
    }
    if (e.isUnknownDocument()) {
        var c = e.key.path.toArray(), h = Fr(e.version);
        return new ir(new rr(c, h), 
        /* noDocument= */ null, 
        /* document= */ null, 
        /* hasCommittedMutations= */ !0, r, i);
    }
    return C();
}

function Pr(t) {
    var e = t.toTimestamp();
    return [ e.seconds, e.nanoseconds ];
}

function Mr(t) {
    var e = new q(t[0], t[1]);
    return U.fromTimestamp(e);
}

function Fr(t) {
    var e = t.toTimestamp();
    return new Jn(e.seconds, e.nanoseconds);
}

function Vr(t) {
    var e = new q(t.seconds, t.nanoseconds);
    return U.fromTimestamp(e);
}

/** Encodes a batch of mutations into a DbMutationBatch for local storage. */
/** Decodes a DbMutationBatch into a MutationBatch */ function qr(t, e) {
    // Squash old transform mutations into existing patch or set mutations.
    // The replacement of representing `transforms` with `update_transforms`
    // on the SDK means that old `transform` mutations stored in IndexedDB need
    // to be updated to `update_transforms`.
    // TODO(b/174608374): Remove this code once we perform a schema migration.
    for (var n = (e.baseMutations || []).map((function(e) {
        return Rn(t.Lt, e);
    })), r = 0; r < e.mutations.length - 1; ++r) {
        var i = e.mutations[r];
        if (r + 1 < e.mutations.length && void 0 !== e.mutations[r + 1].transform) {
            var o = e.mutations[r + 1];
            i.updateTransforms = o.transform.fieldTransforms, e.mutations.splice(r + 1, 1), 
            ++r;
        }
    }
    var s = e.mutations.map((function(e) {
        return Rn(t.Lt, e);
    })), u = q.fromMillis(e.localWriteTimeMs);
    return new kr(e.batchId, u, n, s);
}

/** Decodes a DbTarget into TargetData */ function Ur(t) {
    var e, n, r = Vr(t.readTime), i = void 0 !== t.lastLimboFreeSnapshotVersion ? Vr(t.lastLimboFreeSnapshotVersion) : U.min();
    return void 0 !== t.query.documents ? (R(1 === (n = t.query).documents.length), 
    e = $t(zt(Nn(n.documents[0])))) : e = function(t) {
        return $t(Pn(t));
    }(t.query), new Cr(e, t.targetId, 0 /* Listen */ , t.lastListenSequenceNumber, r, i, Y.fromBase64String(t.resumeToken))
    /** Encodes TargetData into a DbTarget for storage locally. */;
}

function Br(t, e) {
    var n, r = Fr(e.snapshotVersion), i = Fr(e.lastLimboFreeSnapshotVersion);
    n = Dt(e.target) ? On(t.Lt, e.target) : Ln(t.Lt, e.target);
    // We can't store the resumeToken as a ByteString in IndexedDb, so we
    // convert it to a base64 string for storage.
    var o = e.resumeToken.toBase64();
    // lastListenSequenceNumber is always 0 until we do real GC.
        return new sr(e.targetId, St(e.target), r, o, e.sequenceNumber, i, n);
}

/**
 * A helper function for figuring out what kind of query has been stored.
 */
/**
 * Encodes a `BundledQuery` from bundle proto to a Query object.
 *
 * This reconstructs the original query used to build the bundle being loaded,
 * including features exists only in SDKs (for example: limit-to-last).
 */ function jr(t) {
    var e = Pn({
        parent: t.parent,
        structuredQuery: t.structuredQuery
    });
    return "LAST" === t.limitType ? Zt(e, e.limit, "L" /* Last */) : e;
}

/** Encodes a NamedQuery proto object to a NamedQuery model object. */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Kr = /** @class */ function() {
    function t() {}
    return t.prototype.getBundleMetadata = function(t, e) {
        return Gr(t).get(e).next((function(t) {
            if (t) return {
                id: (e = t).bundleId,
                createTime: Vr(e.createTime),
                version: e.version
            };
            /** Encodes a DbBundle to a BundleMetadata object. */            var e;
            /** Encodes a BundleMetadata to a DbBundle. */        }));
    }, t.prototype.saveBundleMetadata = function(t, e) {
        return Gr(t).put({
            bundleId: (n = e).id,
            createTime: Fr(bn(n.createTime)),
            version: n.version
        });
        var n;
        /** Encodes a DbNamedQuery to a NamedQuery. */    }, t.prototype.getNamedQuery = function(t, e) {
        return zr(t).get(e).next((function(t) {
            if (t) return {
                name: (e = t).name,
                query: jr(e.bundledQuery),
                readTime: Vr(e.readTime)
            };
            var e;
            /** Encodes a NamedQuery from a bundle proto to a DbNamedQuery. */        }));
    }, t.prototype.saveNamedQuery = function(t, e) {
        return zr(t).put(function(t) {
            return {
                name: t.name,
                readTime: Fr(bn(t.readTime)),
                bundledQuery: t.bundledQuery
            };
        }(e));
    }, t;
}();

/**
 * Helper to get a typed SimpleDbStore for the bundles object store.
 */ function Gr(t) {
    return Ar(t, fr.store);
}

/**
 * Helper to get a typed SimpleDbStore for the namedQueries object store.
 */ function zr(t) {
    return Ar(t, lr.store);
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An in-memory implementation of IndexManager.
 */ var Qr = /** @class */ function() {
    function t() {
        this.Bt = new Wr;
    }
    return t.prototype.addToCollectionParentIndex = function(t, e) {
        return this.Bt.add(e), mr.resolve();
    }, t.prototype.getCollectionParents = function(t, e) {
        return mr.resolve(this.Bt.getEntries(e));
    }, t;
}(), Wr = /** @class */ function() {
    function t() {
        this.index = {};
    }
    // Returns false if the entry already existed.
        return t.prototype.add = function(t) {
        var e = t.lastSegment(), n = t.popLast(), r = this.index[e] || new Qe(z.comparator), i = !r.has(n);
        return this.index[e] = r.add(n), i;
    }, t.prototype.has = function(t) {
        var e = t.lastSegment(), n = t.popLast(), r = this.index[e];
        return r && r.has(n);
    }, t.prototype.getEntries = function(t) {
        return (this.index[t] || new Qe(z.comparator)).toArray();
    }, t;
}(), Hr = /** @class */ function() {
    function t() {
        /**
         * An in-memory copy of the index entries we've already written since the SDK
         * launched. Used to avoid re-writing the same entry repeatedly.
         *
         * This is *NOT* a complete cache of what's in persistence and so can never be used to
         * satisfy reads.
         */
        this.qt = new Wr;
    }
    /**
     * Adds a new entry to the collection parent index.
     *
     * Repeated calls for the same collectionPath should be avoided within a
     * transaction as IndexedDbIndexManager only caches writes once a transaction
     * has been committed.
     */    return t.prototype.addToCollectionParentIndex = function(t, e) {
        var n = this;
        if (!this.qt.has(e)) {
            var r = e.lastSegment(), i = e.popLast();
            t.addOnCommittedListener((function() {
                // Add the collection to the in memory cache only if the transaction was
                // successfully committed.
                n.qt.add(e);
            }));
            var o = {
                collectionId: r,
                parent: Wn(i)
            };
            return Yr(t).put(o);
        }
        return mr.resolve();
    }, t.prototype.getCollectionParents = function(t, e) {
        var n = [], r = IDBKeyRange.bound([ e, "" ], [ V(e), "" ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0);
        return Yr(t).Nt(r).next((function(t) {
            for (var r = 0, i = t; r < i.length; r++) {
                var o = i[r];
                // This collectionId guard shouldn't be necessary (and isn't as long
                // as we're running in a real browser), but there's a bug in
                // indexeddbshim that breaks our range in our tests running in node:
                // https://github.com/axemclion/IndexedDBShim/issues/334
                                if (o.collectionId !== e) break;
                n.push(Xn(o.parent));
            }
            return n;
        }));
    }, t;
}();

/**
 * Internal implementation of the collection-parent index exposed by MemoryIndexManager.
 * Also used for in-memory caching by IndexedDbIndexManager and initial index population
 * in indexeddb_schema.ts
 */
/**
 * Helper to get a typed SimpleDbStore for the collectionParents
 * document store.
 */
function Yr(t) {
    return Ar(t, cr.store);
}

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Xr = {
    didRun: !1,
    sequenceNumbersCollected: 0,
    targetsRemoved: 0,
    documentsRemoved: 0
}, Jr = /** @class */ function() {
    function t(
    // When we attempt to collect, we will only do so if the cache size is greater than this
    // threshold. Passing `COLLECTION_DISABLED` here will cause collection to always be skipped.
    t, 
    // The percentage of sequence numbers that we will attempt to collect
    e, 
    // A cap on the total number of sequence numbers that will be collected. This prevents
    // us from collecting a huge number of sequence numbers if the cache has grown very large.
    n) {
        this.cacheSizeCollectionThreshold = t, this.percentileToCollect = e, this.maximumSequenceNumbersToCollect = n;
    }
    return t.withCacheSize = function(e) {
        return new t(e, t.DEFAULT_COLLECTION_PERCENTILE, t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT);
    }, t;
}();

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Delete a mutation batch and the associated document mutations.
 * @returns A PersistencePromise of the document mutations that were removed.
 */
function $r(t, e, n) {
    var r = t.store(tr.store), i = t.store(er.store), o = [], s = IDBKeyRange.only(n.batchId), u = 0, a = r.Ot({
        range: s
    }, (function(t, e, n) {
        return u++, n.delete();
    }));
    o.push(a.next((function() {
        R(1 === u);
    })));
    for (var c = [], h = 0, f = n.mutations; h < f.length; h++) {
        var l = f[h], d = er.key(e, l.key.path, n.batchId);
        o.push(i.delete(d)), c.push(l.key);
    }
    return mr.waitFor(o).next((function() {
        return c;
    }));
}

/**
 * Returns an approximate size for the given document.
 */ function Zr(t) {
    if (!t) return 0;
    var e;
    if (t.document) e = t.document; else if (t.unknownDocument) e = t.unknownDocument; else {
        if (!t.noDocument) throw C();
        e = t.noDocument;
    }
    return JSON.stringify(e).length;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** A mutation queue for a specific user, backed by IndexedDB. */ Jr.DEFAULT_COLLECTION_PERCENTILE = 10, 
Jr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3, Jr.DEFAULT = new Jr(41943040, Jr.DEFAULT_COLLECTION_PERCENTILE, Jr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT), 
Jr.DISABLED = new Jr(-1, 0, 0);

var ti = /** @class */ function() {
    function t(
    /**
     * The normalized userId (e.g. null UID => "" userId) used to store /
     * retrieve mutations.
     */
    t, e, n, r) {
        this.userId = t, this.R = e, this.Ut = n, this.referenceDelegate = r, 
        /**
             * Caches the document keys for pending mutation batches. If the mutation
             * has been removed from IndexedDb, the cached value may continue to
             * be used to retrieve the batch's document keys. To remove a cached value
             * locally, `removeCachedMutationKeys()` should be invoked either directly
             * or through `removeMutationBatches()`.
             *
             * With multi-tab, when the primary client acknowledges or rejects a mutation,
             * this cache is used by secondary clients to invalidate the local
             * view of the documents that were previously affected by the mutation.
             */
        // PORTING NOTE: Multi-tab only.
        this.Qt = {}
        /**
     * Creates a new mutation queue for the given user.
     * @param user - The user for which to create a mutation queue.
     * @param serializer - The serializer to use when persisting to IndexedDb.
     */;
    }
    return t.Kt = function(e, n, r, i) {
        // TODO(mcg): Figure out what constraints there are on userIDs
        // In particular, are there any reserved characters? are empty ids allowed?
        // For the moment store these together in the same mutations table assuming
        // that empty userIDs aren't allowed.
        return R("" !== e.uid), new t(e.isAuthenticated() ? e.uid : "", n, r, i);
    }, t.prototype.checkEmpty = function(t) {
        var e = !0, n = IDBKeyRange.bound([ this.userId, Number.NEGATIVE_INFINITY ], [ this.userId, Number.POSITIVE_INFINITY ]);
        return ni(t).Ot({
            index: tr.userMutationsIndex,
            range: n
        }, (function(t, n, r) {
            e = !1, r.done();
        })).next((function() {
            return e;
        }));
    }, t.prototype.addMutationBatch = function(t, e, n, r) {
        var i = this, o = ri(t), s = ni(t);
        // The IndexedDb implementation in Chrome (and Firefox) does not handle
        // compound indices that include auto-generated keys correctly. To ensure
        // that the index entry is added correctly in all browsers, we perform two
        // writes: The first write is used to retrieve the next auto-generated Batch
        // ID, and the second write populates the index and stores the actual
        // mutation batch.
        // See: https://bugs.chromium.org/p/chromium/issues/detail?id=701972
        // We write an empty object to obtain key
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return s.add({}).next((function(u) {
            R("number" == typeof u);
            for (var a = new kr(u, e, n, r), c = function(t, e, n) {
                var r = n.baseMutations.map((function(e) {
                    return Cn(t.Lt, e);
                })), i = n.mutations.map((function(e) {
                    return Cn(t.Lt, e);
                }));
                return new tr(e, n.batchId, n.localWriteTime.toMillis(), r, i);
            }(i.R, i.userId, a), h = [], f = new Qe((function(t, e) {
                return M(t.canonicalString(), e.canonicalString());
            })), l = 0, d = r; l < d.length; l++) {
                var p = d[l], y = er.key(i.userId, p.key.path, u);
                f = f.add(p.key.path.popLast()), h.push(s.put(c)), h.push(o.put(y, er.PLACEHOLDER));
            }
            return f.forEach((function(e) {
                h.push(i.Ut.addToCollectionParentIndex(t, e));
            })), t.addOnCommittedListener((function() {
                i.Qt[u] = a.keys();
            })), mr.waitFor(h).next((function() {
                return a;
            }));
        }));
    }, t.prototype.lookupMutationBatch = function(t, e) {
        var n = this;
        return ni(t).get(e).next((function(t) {
            return t ? (R(t.userId === n.userId), qr(n.R, t)) : null;
        }));
    }, 
    /**
     * Returns the document keys for the mutation batch with the given batchId.
     * For primary clients, this method returns `null` after
     * `removeMutationBatches()` has been called. Secondary clients return a
     * cached result until `removeCachedMutationKeys()` is invoked.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.jt = function(t, e) {
        var n = this;
        return this.Qt[e] ? mr.resolve(this.Qt[e]) : this.lookupMutationBatch(t, e).next((function(t) {
            if (t) {
                var r = t.keys();
                return n.Qt[e] = r, r;
            }
            return null;
        }));
    }, t.prototype.getNextMutationBatchAfterBatchId = function(t, e) {
        var n = this, r = e + 1, i = IDBKeyRange.lowerBound([ this.userId, r ]), o = null;
        return ni(t).Ot({
            index: tr.userMutationsIndex,
            range: i
        }, (function(t, e, i) {
            e.userId === n.userId && (R(e.batchId >= r), o = qr(n.R, e)), i.done();
        })).next((function() {
            return o;
        }));
    }, t.prototype.getHighestUnacknowledgedBatchId = function(t) {
        var e = IDBKeyRange.upperBound([ this.userId, Number.POSITIVE_INFINITY ]), n = -1;
        return ni(t).Ot({
            index: tr.userMutationsIndex,
            range: e,
            reverse: !0
        }, (function(t, e, r) {
            n = e.batchId, r.done();
        })).next((function() {
            return n;
        }));
    }, t.prototype.getAllMutationBatches = function(t) {
        var e = this, n = IDBKeyRange.bound([ this.userId, -1 ], [ this.userId, Number.POSITIVE_INFINITY ]);
        return ni(t).Nt(tr.userMutationsIndex, n).next((function(t) {
            return t.map((function(t) {
                return qr(e.R, t);
            }));
        }));
    }, t.prototype.getAllMutationBatchesAffectingDocumentKey = function(t, e) {
        var n = this, r = er.prefixForPath(this.userId, e.path), i = IDBKeyRange.lowerBound(r), o = [];
        // Scan the document-mutation index starting with a prefix starting with
        // the given documentKey.
                return ri(t).Ot({
            range: i
        }, (function(r, i, s) {
            var u = r[0], a = r[1], c = r[2], h = Xn(a);
            // Only consider rows matching exactly the specific key of
            // interest. Note that because we order by path first, and we
            // order terminators before path separators, we'll encounter all
            // the index rows for documentKey contiguously. In particular, all
            // the rows for documentKey will occur before any rows for
            // documents nested in a subcollection beneath documentKey so we
            // can stop as soon as we hit any such row.
                        if (u === n.userId && e.path.isEqual(h)) 
            // Look up the mutation batch in the store.
            return ni(t).get(c).next((function(t) {
                if (!t) throw C();
                R(t.userId === n.userId), o.push(qr(n.R, t));
            }));
            s.done();
        })).next((function() {
            return o;
        }));
    }, t.prototype.getAllMutationBatchesAffectingDocumentKeys = function(t, e) {
        var n = this, r = new Qe(M), i = [];
        return e.forEach((function(e) {
            var o = er.prefixForPath(n.userId, e.path), s = IDBKeyRange.lowerBound(o), u = ri(t).Ot({
                range: s
            }, (function(t, i, o) {
                var s = t[0], u = t[1], a = t[2], c = Xn(u);
                // Only consider rows matching exactly the specific key of
                // interest. Note that because we order by path first, and we
                // order terminators before path separators, we'll encounter all
                // the index rows for documentKey contiguously. In particular, all
                // the rows for documentKey will occur before any rows for
                // documents nested in a subcollection beneath documentKey so we
                // can stop as soon as we hit any such row.
                                s === n.userId && e.path.isEqual(c) ? r = r.add(a) : o.done();
            }));
            i.push(u);
        })), mr.waitFor(i).next((function() {
            return n.Wt(t, r);
        }));
    }, t.prototype.getAllMutationBatchesAffectingQuery = function(t, e) {
        var n = this, r = e.path, i = r.length + 1, o = er.prefixForPath(this.userId, r), s = IDBKeyRange.lowerBound(o), u = new Qe(M);
        return ri(t).Ot({
            range: s
        }, (function(t, e, o) {
            var s = t[0], a = t[1], c = t[2], h = Xn(a);
            s === n.userId && r.isPrefixOf(h) ? 
            // Rows with document keys more than one segment longer than the
            // query path can't be matches. For example, a query on 'rooms'
            // can't match the document /rooms/abc/messages/xyx.
            // TODO(mcg): we'll need a different scanner when we implement
            // ancestor queries.
            h.length === i && (u = u.add(c)) : o.done();
        })).next((function() {
            return n.Wt(t, u);
        }));
    }, t.prototype.Wt = function(t, e) {
        var n = this, r = [], i = [];
        // TODO(rockwood): Implement this using iterate.
        return e.forEach((function(e) {
            i.push(ni(t).get(e).next((function(t) {
                if (null === t) throw C();
                R(t.userId === n.userId), r.push(qr(n.R, t));
            })));
        })), mr.waitFor(i).next((function() {
            return r;
        }));
    }, t.prototype.removeMutationBatch = function(t, e) {
        var n = this;
        return $r(t.Mt, this.userId, e).next((function(r) {
            return t.addOnCommittedListener((function() {
                n.Gt(e.batchId);
            })), mr.forEach(r, (function(e) {
                return n.referenceDelegate.markPotentiallyOrphaned(t, e);
            }));
        }));
    }, 
    /**
     * Clears the cached keys for a mutation batch. This method should be
     * called by secondary clients after they process mutation updates.
     *
     * Note that this method does not have to be called from primary clients as
     * the corresponding cache entries are cleared when an acknowledged or
     * rejected batch is removed from the mutation queue.
     */
    // PORTING NOTE: Multi-tab only
    t.prototype.Gt = function(t) {
        delete this.Qt[t];
    }, t.prototype.performConsistencyCheck = function(t) {
        var e = this;
        return this.checkEmpty(t).next((function(n) {
            if (!n) return mr.resolve();
            // Verify that there are no entries in the documentMutations index if
            // the queue is empty.
                        var r = IDBKeyRange.lowerBound(er.prefixForUser(e.userId)), i = [];
            return ri(t).Ot({
                range: r
            }, (function(t, n, r) {
                if (t[0] === e.userId) {
                    var o = Xn(t[1]);
                    i.push(o);
                } else r.done();
            })).next((function() {
                R(0 === i.length);
            }));
        }));
    }, t.prototype.containsKey = function(t, e) {
        return ei(t, this.userId, e);
    }, 
    // PORTING NOTE: Multi-tab only (state is held in memory in other clients).
    /** Returns the mutation queue's metadata from IndexedDb. */
    t.prototype.zt = function(t) {
        var e = this;
        return ii(t).get(this.userId).next((function(t) {
            return t || new Zn(e.userId, -1, 
            /*lastStreamToken=*/ "");
        }));
    }, t;
}();

/**
 * @returns true if the mutation queue for the given user contains a pending
 *         mutation for the given key.
 */ function ei(t, e, n) {
    var r = er.prefixForPath(e, n.path), i = r[1], o = IDBKeyRange.lowerBound(r), s = !1;
    return ri(t).Ot({
        range: o,
        kt: !0
    }, (function(t, n, r) {
        var o = t[0], u = t[1];
        t[2];
        o === e && u === i && (s = !0), r.done();
    })).next((function() {
        return s;
    }));
}

/** Returns true if any mutation queue contains the given document. */
/**
 * Helper to get a typed SimpleDbStore for the mutations object store.
 */ function ni(t) {
    return Ar(t, tr.store);
}

/**
 * Helper to get a typed SimpleDbStore for the mutationQueues object store.
 */ function ri(t) {
    return Ar(t, er.store);
}

/**
 * Helper to get a typed SimpleDbStore for the mutationQueues object store.
 */ function ii(t) {
    return Ar(t, Zn.store);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Offset to ensure non-overlapping target ids. */
/**
 * Generates monotonically increasing target IDs for sending targets to the
 * watch stream.
 *
 * The client constructs two generators, one for the target cache, and one for
 * for the sync engine (to generate limbo documents targets). These
 * generators produce non-overlapping IDs (by using even and odd IDs
 * respectively).
 *
 * By separating the target ID space, the query cache can generate target IDs
 * that persist across client restarts, while sync engine can independently
 * generate in-memory target IDs that are transient and can be reused after a
 * restart.
 */ var oi = /** @class */ function() {
    function t(t) {
        this.Ht = t;
    }
    return t.prototype.next = function() {
        return this.Ht += 2, this.Ht;
    }, t.Jt = function() {
        // The target cache generator must return '2' in its first call to `next()`
        // as there is no differentiation in the protocol layer between an unset
        // number and the number '0'. If we were to sent a target with target ID
        // '0', the backend would consider it unset and replace it with its own ID.
        return new t(0);
    }, t.Yt = function() {
        // Sync engine assigns target IDs for limbo document detection.
        return new t(-1);
    }, t;
}(), si = /** @class */ function() {
    function t(t, e) {
        this.referenceDelegate = t, this.R = e;
    }
    // PORTING NOTE: We don't cache global metadata for the target cache, since
    // some of it (in particular `highestTargetId`) can be modified by secondary
    // tabs. We could perhaps be more granular (and e.g. still cache
    // `lastRemoteSnapshotVersion` in memory) but for simplicity we currently go
    // to IndexedDb whenever we need to read metadata. We can revisit if it turns
    // out to have a meaningful performance impact.
        return t.prototype.allocateTargetId = function(t) {
        var e = this;
        return this.Xt(t).next((function(n) {
            var r = new oi(n.highestTargetId);
            return n.highestTargetId = r.next(), e.Zt(t, n).next((function() {
                return n.highestTargetId;
            }));
        }));
    }, t.prototype.getLastRemoteSnapshotVersion = function(t) {
        return this.Xt(t).next((function(t) {
            return U.fromTimestamp(new q(t.lastRemoteSnapshotVersion.seconds, t.lastRemoteSnapshotVersion.nanoseconds));
        }));
    }, t.prototype.getHighestSequenceNumber = function(t) {
        return this.Xt(t).next((function(t) {
            return t.highestListenSequenceNumber;
        }));
    }, t.prototype.setTargetsMetadata = function(t, e, n) {
        var r = this;
        return this.Xt(t).next((function(i) {
            return i.highestListenSequenceNumber = e, n && (i.lastRemoteSnapshotVersion = n.toTimestamp()), 
            e > i.highestListenSequenceNumber && (i.highestListenSequenceNumber = e), r.Zt(t, i);
        }));
    }, t.prototype.addTargetData = function(t, e) {
        var n = this;
        return this.te(t, e).next((function() {
            return n.Xt(t).next((function(r) {
                return r.targetCount += 1, n.ee(e, r), n.Zt(t, r);
            }));
        }));
    }, t.prototype.updateTargetData = function(t, e) {
        return this.te(t, e);
    }, t.prototype.removeTargetData = function(t, e) {
        var n = this;
        return this.removeMatchingKeysForTargetId(t, e.targetId).next((function() {
            return ui(t).delete(e.targetId);
        })).next((function() {
            return n.Xt(t);
        })).next((function(e) {
            return R(e.targetCount > 0), e.targetCount -= 1, n.Zt(t, e);
        }));
    }, 
    /**
     * Drops any targets with sequence number less than or equal to the upper bound, excepting those
     * present in `activeTargetIds`. Document associations for the removed targets are also removed.
     * Returns the number of targets removed.
     */
    t.prototype.removeTargets = function(t, e, n) {
        var r = this, i = 0, o = [];
        return ui(t).Ot((function(s, u) {
            var a = Ur(u);
            a.sequenceNumber <= e && null === n.get(a.targetId) && (i++, o.push(r.removeTargetData(t, a)));
        })).next((function() {
            return mr.waitFor(o);
        })).next((function() {
            return i;
        }));
    }, 
    /**
     * Call provided function with each `TargetData` that we have cached.
     */
    t.prototype.forEachTarget = function(t, e) {
        return ui(t).Ot((function(t, n) {
            var r = Ur(n);
            e(r);
        }));
    }, t.prototype.Xt = function(t) {
        return ai(t).get(ar.key).next((function(t) {
            return R(null !== t), t;
        }));
    }, t.prototype.Zt = function(t, e) {
        return ai(t).put(ar.key, e);
    }, t.prototype.te = function(t, e) {
        return ui(t).put(Br(this.R, e));
    }, 
    /**
     * In-place updates the provided metadata to account for values in the given
     * TargetData. Saving is done separately. Returns true if there were any
     * changes to the metadata.
     */
    t.prototype.ee = function(t, e) {
        var n = !1;
        return t.targetId > e.highestTargetId && (e.highestTargetId = t.targetId, n = !0), 
        t.sequenceNumber > e.highestListenSequenceNumber && (e.highestListenSequenceNumber = t.sequenceNumber, 
        n = !0), n;
    }, t.prototype.getTargetCount = function(t) {
        return this.Xt(t).next((function(t) {
            return t.targetCount;
        }));
    }, t.prototype.getTargetData = function(t, e) {
        // Iterating by the canonicalId may yield more than one result because
        // canonicalId values are not required to be unique per target. This query
        // depends on the queryTargets index to be efficient.
        var n = St(e), r = IDBKeyRange.bound([ n, Number.NEGATIVE_INFINITY ], [ n, Number.POSITIVE_INFINITY ]), i = null;
        return ui(t).Ot({
            range: r,
            index: sr.queryTargetsIndexName
        }, (function(t, n, r) {
            var o = Ur(n);
            // After finding a potential match, check that the target is
            // actually equal to the requested target.
                        Nt(e, o.target) && (i = o, r.done());
        })).next((function() {
            return i;
        }));
    }, t.prototype.addMatchingKeys = function(t, e, n) {
        var r = this, i = [], o = ci(t);
        // PORTING NOTE: The reverse index (documentsTargets) is maintained by
        // IndexedDb.
                return e.forEach((function(e) {
            var s = Wn(e.path);
            i.push(o.put(new ur(n, s))), i.push(r.referenceDelegate.addReference(t, n, e));
        })), mr.waitFor(i);
    }, t.prototype.removeMatchingKeys = function(t, e, n) {
        var r = this, i = ci(t);
        // PORTING NOTE: The reverse index (documentsTargets) is maintained by
        // IndexedDb.
                return mr.forEach(e, (function(e) {
            var o = Wn(e.path);
            return mr.waitFor([ i.delete([ n, o ]), r.referenceDelegate.removeReference(t, n, e) ]);
        }));
    }, t.prototype.removeMatchingKeysForTargetId = function(t, e) {
        var n = ci(t), r = IDBKeyRange.bound([ e ], [ e + 1 ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0);
        return n.delete(r);
    }, t.prototype.getMatchingKeysForTargetId = function(t, e) {
        var n = IDBKeyRange.bound([ e ], [ e + 1 ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0), r = ci(t), i = en();
        return r.Ot({
            range: n,
            kt: !0
        }, (function(t, e, n) {
            var r = Xn(t[1]), o = new st(r);
            i = i.add(o);
        })).next((function() {
            return i;
        }));
    }, t.prototype.containsKey = function(t, e) {
        var n = Wn(e.path), r = IDBKeyRange.bound([ n ], [ V(n) ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0), i = 0;
        return ci(t).Ot({
            index: ur.documentTargetsIndex,
            kt: !0,
            range: r
        }, (function(t, e, n) {
            var r = t[0];
            // Having a sentinel row for a document does not count as containing that document;
            // For the target cache, containing the document means the document is part of some
            // target.
                        t[1];
            0 !== r && (i++, n.done());
        })).next((function() {
            return i > 0;
        }));
    }, 
    /**
     * Looks up a TargetData entry by target ID.
     *
     * @param targetId - The target ID of the TargetData entry to look up.
     * @returns The cached TargetData entry, or null if the cache has no entry for
     * the target.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.lt = function(t, e) {
        return ui(t).get(e).next((function(t) {
            return t ? Ur(t) : null;
        }));
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Helper to get a typed SimpleDbStore for the queries object store.
 */
function ui(t) {
    return Ar(t, sr.store);
}

/**
 * Helper to get a typed SimpleDbStore for the target globals object store.
 */ function ai(t) {
    return Ar(t, ar.store);
}

/**
 * Helper to get a typed SimpleDbStore for the document target object store.
 */ function ci(t) {
    return Ar(t, ur.store);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Verifies the error thrown by a LocalStore operation. If a LocalStore
 * operation fails because the primary lease has been taken by another client,
 * we ignore the error (the persistence layer will immediately call
 * `applyPrimaryLease` to propagate the primary state change). All other errors
 * are re-thrown.
 *
 * @param err - An error returned by a LocalStore operation.
 * @returns A Promise that resolves after we recovered, or the original error.
 */ function hi(t) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(e) {
            if (t.code !== E.FAILED_PRECONDITION || t.message !== pr) throw t;
            return D("LocalStore", "Unexpectedly lost primary lease"), [ 2 /*return*/ ];
        }));
    }));
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function fi(t, e) {
    var n = t[0], r = t[1], i = e[0], o = e[1], s = M(n, i);
    return 0 === s ? M(r, o) : s;
}

/**
 * Used to calculate the nth sequence number. Keeps a rolling buffer of the
 * lowest n values passed to `addElement`, and finally reports the largest of
 * them in `maxValue`.
 */ var li = /** @class */ function() {
    function t(t) {
        this.ne = t, this.buffer = new Qe(fi), this.se = 0;
    }
    return t.prototype.ie = function() {
        return ++this.se;
    }, t.prototype.re = function(t) {
        var e = [ t, this.ie() ];
        if (this.buffer.size < this.ne) this.buffer = this.buffer.add(e); else {
            var n = this.buffer.last();
            fi(e, n) < 0 && (this.buffer = this.buffer.delete(n).add(e));
        }
    }, Object.defineProperty(t.prototype, "maxValue", {
        get: function() {
            // Guaranteed to be non-empty. If we decide we are not collecting any
            // sequence numbers, nthSequenceNumber below short-circuits. If we have
            // decided that we are collecting n sequence numbers, it's because n is some
            // percentage of the existing sequence numbers. That means we should never
            // be in a situation where we are collecting sequence numbers but don't
            // actually have any.
            return this.buffer.last()[0];
        },
        enumerable: !1,
        configurable: !0
    }), t;
}(), di = /** @class */ function() {
    function t(t, e) {
        this.garbageCollector = t, this.asyncQueue = e, this.oe = !1, this.ce = null;
    }
    return t.prototype.start = function(t) {
        -1 !== this.garbageCollector.params.cacheSizeCollectionThreshold && this.ue(t);
    }, t.prototype.stop = function() {
        this.ce && (this.ce.cancel(), this.ce = null);
    }, Object.defineProperty(t.prototype, "started", {
        get: function() {
            return null !== this.ce;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.ue = function(t) {
        var e = this, n = this.oe ? 3e5 : 6e4;
        D("LruGarbageCollector", "Garbage collection scheduled in " + n + "ms"), this.ce = this.asyncQueue.enqueueAfterDelay("lru_garbage_collection" /* LruGarbageCollection */ , n, (function() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(e, void 0, void 0, (function() {
                var e;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(n) {
                    switch (n.label) {
                      case 0:
                        this.ce = null, this.oe = !0, n.label = 1;

                      case 1:
                        return n.trys.push([ 1, 3, , 7 ]), [ 4 /*yield*/ , t.collectGarbage(this.garbageCollector) ];

                      case 2:
                        return n.sent(), [ 3 /*break*/ , 7 ];

                      case 3:
                        return _r(e = n.sent()) ? (D("LruGarbageCollector", "Ignoring IndexedDB error during garbage collection: ", e), 
                        [ 3 /*break*/ , 6 ]) : [ 3 /*break*/ , 4 ];

                      case 4:
                        return [ 4 /*yield*/ , hi(e) ];

                      case 5:
                        n.sent(), n.label = 6;

                      case 6:
                        return [ 3 /*break*/ , 7 ];

                      case 7:
                        return [ 4 /*yield*/ , this.ue(t) ];

                      case 8:
                        return n.sent(), [ 2 /*return*/ ];
                    }
                }));
            }));
        }));
    }, t;
}(), pi = /** @class */ function() {
    function t(t, e) {
        this.ae = t, this.params = e;
    }
    return t.prototype.calculateTargetCount = function(t, e) {
        return this.ae.he(t).next((function(t) {
            return Math.floor(e / 100 * t);
        }));
    }, t.prototype.nthSequenceNumber = function(t, e) {
        var n = this;
        if (0 === e) return mr.resolve(_.o);
        var r = new li(e);
        return this.ae.forEachTarget(t, (function(t) {
            return r.re(t.sequenceNumber);
        })).next((function() {
            return n.ae.le(t, (function(t) {
                return r.re(t);
            }));
        })).next((function() {
            return r.maxValue;
        }));
    }, t.prototype.removeTargets = function(t, e, n) {
        return this.ae.removeTargets(t, e, n);
    }, t.prototype.removeOrphanedDocuments = function(t, e) {
        return this.ae.removeOrphanedDocuments(t, e);
    }, t.prototype.collect = function(t, e) {
        var n = this;
        return -1 === this.params.cacheSizeCollectionThreshold ? (D("LruGarbageCollector", "Garbage collection skipped; disabled"), 
        mr.resolve(Xr)) : this.getCacheSize(t).next((function(r) {
            return r < n.params.cacheSizeCollectionThreshold ? (D("LruGarbageCollector", "Garbage collection skipped; Cache size " + r + " is lower than threshold " + n.params.cacheSizeCollectionThreshold), 
            Xr) : n.fe(t, e);
        }));
    }, t.prototype.getCacheSize = function(t) {
        return this.ae.getCacheSize(t);
    }, t.prototype.fe = function(t, e) {
        var n, r, i, o, s, u, a, h = this, f = Date.now();
        return this.calculateTargetCount(t, this.params.percentileToCollect).next((function(e) {
            // Cap at the configured max
            return e > h.params.maximumSequenceNumbersToCollect ? (D("LruGarbageCollector", "Capping sequence numbers to collect down to the maximum of " + h.params.maximumSequenceNumbersToCollect + " from " + e), 
            r = h.params.maximumSequenceNumbersToCollect) : r = e, o = Date.now(), h.nthSequenceNumber(t, r);
        })).next((function(r) {
            return n = r, s = Date.now(), h.removeTargets(t, n, e);
        })).next((function(e) {
            return i = e, u = Date.now(), h.removeOrphanedDocuments(t, n);
        })).next((function(t) {
            return a = Date.now(), N() <= _firebase_logger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].DEBUG && D("LruGarbageCollector", "LRU Garbage Collection\n\tCounted targets in " + (o - f) + "ms\n\tDetermined least recently used " + r + " in " + (s - o) + "ms\n\tRemoved " + i + " targets in " + (u - s) + "ms\n\tRemoved " + t + " documents in " + (a - u) + "ms\nTotal Duration: " + (a - f) + "ms"), 
            mr.resolve({
                didRun: !0,
                sequenceNumbersCollected: r,
                targetsRemoved: i,
                documentsRemoved: t
            });
        }));
    }, t;
}(), yi = /** @class */ function() {
    function t(t, e) {
        this.db = t, this.garbageCollector = function(t, e) {
            return new pi(t, e);
        }(this, e);
    }
    return t.prototype.he = function(t) {
        var e = this.de(t);
        return this.db.getTargetCache().getTargetCount(t).next((function(t) {
            return e.next((function(e) {
                return t + e;
            }));
        }));
    }, t.prototype.de = function(t) {
        var e = 0;
        return this.le(t, (function(t) {
            e++;
        })).next((function() {
            return e;
        }));
    }, t.prototype.forEachTarget = function(t, e) {
        return this.db.getTargetCache().forEachTarget(t, e);
    }, t.prototype.le = function(t, e) {
        return this.we(t, (function(t, n) {
            return e(n);
        }));
    }, t.prototype.addReference = function(t, e, n) {
        return vi(t, n);
    }, t.prototype.removeReference = function(t, e, n) {
        return vi(t, n);
    }, t.prototype.removeTargets = function(t, e, n) {
        return this.db.getTargetCache().removeTargets(t, e, n);
    }, t.prototype.markPotentiallyOrphaned = function(t, e) {
        return vi(t, e);
    }, 
    /**
     * Returns true if anything would prevent this document from being garbage
     * collected, given that the document in question is not present in any
     * targets and has a sequence number less than or equal to the upper bound for
     * the collection run.
     */
    t.prototype._e = function(t, e) {
        return function(t, e) {
            var n = !1;
            return ii(t).$t((function(r) {
                return ei(t, r, e).next((function(t) {
                    return t && (n = !0), mr.resolve(!t);
                }));
            })).next((function() {
                return n;
            }));
        }(t, e);
    }, t.prototype.removeOrphanedDocuments = function(t, e) {
        var n = this, r = this.db.getRemoteDocumentCache().newChangeBuffer(), i = [], o = 0;
        return this.we(t, (function(s, u) {
            if (u <= e) {
                var a = n._e(t, s).next((function(e) {
                    if (!e) 
                    // Our size accounting requires us to read all documents before
                    // removing them.
                    return o++, r.getEntry(t, s).next((function() {
                        return r.removeEntry(s), ci(t).delete([ 0, Wn(s.path) ]);
                    }));
                }));
                i.push(a);
            }
        })).next((function() {
            return mr.waitFor(i);
        })).next((function() {
            return r.apply(t);
        })).next((function() {
            return o;
        }));
    }, t.prototype.removeTarget = function(t, e) {
        var n = e.withSequenceNumber(t.currentSequenceNumber);
        return this.db.getTargetCache().updateTargetData(t, n);
    }, t.prototype.updateLimboDocument = function(t, e) {
        return vi(t, e);
    }, 
    /**
     * Call provided function for each document in the cache that is 'orphaned'. Orphaned
     * means not a part of any target, so the only entry in the target-document index for
     * that document will be the sentinel row (targetId 0), which will also have the sequence
     * number for the last time the document was accessed.
     */
    t.prototype.we = function(t, e) {
        var n, r = ci(t), i = _.o;
        return r.Ot({
            index: ur.documentTargetsIndex
        }, (function(t, r) {
            var o = t[0], s = (t[1], r.path), u = r.sequenceNumber;
            0 === o ? (
            // if nextToReport is valid, report it, this is a new key so the
            // last one must not be a member of any targets.
            i !== _.o && e(new st(Xn(n)), i), 
            // set nextToReport to be this sequence number. It's the next one we
            // might report, if we don't find any targets for this document.
            // Note that the sequence number must be defined when the targetId
            // is 0.
            i = u, n = s) : 
            // set nextToReport to be invalid, we know we don't need to report
            // this one since we found a target for it.
            i = _.o;
        })).next((function() {
            // Since we report sequence numbers after getting to the next key, we
            // need to check if the last key we iterated over was an orphaned
            // document and report it.
            i !== _.o && e(new st(Xn(n)), i);
        }));
    }, t.prototype.getCacheSize = function(t) {
        return this.db.getRemoteDocumentCache().getSize(t);
    }, t;
}();

/**
 * This class is responsible for the scheduling of LRU garbage collection. It handles checking
 * whether or not GC is enabled, as well as which delay to use before the next run.
 */ function vi(t, e) {
    return ci(t).put(
    /**
 * @returns A value suitable for writing a sentinel row in the target-document
 * store.
 */
    function(t, e) {
        return new ur(0, Wn(t.path), e);
    }(e, t.currentSequenceNumber));
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A map implementation that uses objects as keys. Objects must have an
 * associated equals function and must be immutable. Entries in the map are
 * stored together with the key being produced from the mapKeyFn. This map
 * automatically handles collisions of keys.
 */ var mi = /** @class */ function() {
    function t(t, e) {
        this.mapKeyFn = t, this.equalsFn = e, 
        /**
             * The inner map for a key/value pair. Due to the possibility of collisions we
             * keep a list of entries that we do a linear search through to find an actual
             * match. Note that collisions should be rare, so we still expect near
             * constant time lookups in practice.
             */
        this.inner = {}
        /** Get a value for this key, or undefined if it does not exist. */;
    }
    return t.prototype.get = function(t) {
        var e = this.mapKeyFn(t), n = this.inner[e];
        if (void 0 !== n) for (var r = 0, i = n; r < i.length; r++) {
            var o = i[r], s = o[0], u = o[1];
            if (this.equalsFn(s, t)) return u;
        }
    }, t.prototype.has = function(t) {
        return void 0 !== this.get(t);
    }, 
    /** Put this key and value in the map. */ t.prototype.set = function(t, e) {
        var n = this.mapKeyFn(t), r = this.inner[n];
        if (void 0 !== r) {
            for (var i = 0; i < r.length; i++) if (this.equalsFn(r[i][0], t)) return void (r[i] = [ t, e ]);
            r.push([ t, e ]);
        } else this.inner[n] = [ [ t, e ] ];
    }, 
    /**
     * Remove this key from the map. Returns a boolean if anything was deleted.
     */
    t.prototype.delete = function(t) {
        var e = this.mapKeyFn(t), n = this.inner[e];
        if (void 0 === n) return !1;
        for (var r = 0; r < n.length; r++) if (this.equalsFn(n[r][0], t)) return 1 === n.length ? delete this.inner[e] : n.splice(r, 1), 
        !0;
        return !1;
    }, t.prototype.forEach = function(t) {
        j(this.inner, (function(e, n) {
            for (var r = 0, i = n; r < i.length; r++) {
                var o = i[r], s = o[0], u = o[1];
                t(s, u);
            }
        }));
    }, t.prototype.isEmpty = function() {
        return K(this.inner);
    }, t;
}(), gi = /** @class */ function() {
    function t() {
        // A mapping of document key to the new cache entry that should be written (or null if any
        // existing cache entry should be removed).
        this.changes = new mi((function(t) {
            return t.toString();
        }), (function(t, e) {
            return t.isEqual(e);
        })), this.changesApplied = !1;
    }
    return t.prototype.getReadTime = function(t) {
        var e = this.changes.get(t);
        return e ? e.readTime : U.min();
    }, 
    /**
     * Buffers a `RemoteDocumentCache.addEntry()` call.
     *
     * You can only modify documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */
    t.prototype.addEntry = function(t, e) {
        this.assertNotApplied(), this.changes.set(t.key, {
            document: t,
            readTime: e
        });
    }, 
    /**
     * Buffers a `RemoteDocumentCache.removeEntry()` call.
     *
     * You can only remove documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */
    t.prototype.removeEntry = function(t, e) {
        void 0 === e && (e = null), this.assertNotApplied(), this.changes.set(t, {
            document: _t.newInvalidDocument(t),
            readTime: e
        });
    }, 
    /**
     * Looks up an entry in the cache. The buffered changes will first be checked,
     * and if no buffered change applies, this will forward to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction - The transaction in which to perform any persistence
     *     operations.
     * @param documentKey - The key of the entry to look up.
     * @returns The cached document or an invalid document if we have nothing
     * cached.
     */
    t.prototype.getEntry = function(t, e) {
        this.assertNotApplied();
        var n = this.changes.get(e);
        return void 0 !== n ? mr.resolve(n.document) : this.getFromCache(t, e);
    }, 
    /**
     * Looks up several entries in the cache, forwarding to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction - The transaction in which to perform any persistence
     *     operations.
     * @param documentKeys - The keys of the entries to look up.
     * @returns A map of cached documents, indexed by key. If an entry cannot be
     *     found, the corresponding key will be mapped to an invalid document.
     */
    t.prototype.getEntries = function(t, e) {
        return this.getAllFromCache(t, e);
    }, 
    /**
     * Applies buffered changes to the underlying RemoteDocumentCache, using
     * the provided transaction.
     */
    t.prototype.apply = function(t) {
        return this.assertNotApplied(), this.changesApplied = !0, this.applyChanges(t);
    }, 
    /** Helper to assert this.changes is not null  */ t.prototype.assertNotApplied = function() {}, 
    t;
}(), wi = /** @class */ function() {
    /**
     * @param serializer - The document serializer.
     * @param indexManager - The query indexes that need to be maintained.
     */
    function t(t, e) {
        this.R = t, this.Ut = e
        /**
     * Adds the supplied entries to the cache.
     *
     * All calls of `addEntry` are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()` to ensure proper accounting of metadata.
     */;
    }
    return t.prototype.addEntry = function(t, e, n) {
        return _i(t).put(Ei(e), n);
    }, 
    /**
     * Removes a document from the cache.
     *
     * All calls of `removeEntry`  are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()` to ensure proper accounting of metadata.
     */
    t.prototype.removeEntry = function(t, e) {
        var n = _i(t), r = Ei(e);
        return n.delete(r);
    }, 
    /**
     * Updates the current cache size.
     *
     * Callers to `addEntry()` and `removeEntry()` *must* call this afterwards to update the
     * cache's metadata.
     */
    t.prototype.updateMetadata = function(t, e) {
        var n = this;
        return this.getMetadata(t).next((function(r) {
            return r.byteSize += e, n.me(t, r);
        }));
    }, t.prototype.getEntry = function(t, e) {
        var n = this;
        return _i(t).get(Ei(e)).next((function(t) {
            return n.ye(e, t);
        }));
    }, 
    /**
     * Looks up an entry in the cache.
     *
     * @param documentKey - The key of the entry to look up.
     * @returns The cached document entry and its size.
     */
    t.prototype.ge = function(t, e) {
        var n = this;
        return _i(t).get(Ei(e)).next((function(t) {
            return {
                document: n.ye(e, t),
                size: Zr(t)
            };
        }));
    }, t.prototype.getEntries = function(t, e) {
        var n = this, r = Ye();
        return this.pe(t, e, (function(t, e) {
            var i = n.ye(t, e);
            r = r.insert(t, i);
        })).next((function() {
            return r;
        }));
    }, 
    /**
     * Looks up several entries in the cache.
     *
     * @param documentKeys - The set of keys entries to look up.
     * @returns A map of documents indexed by key and a map of sizes indexed by
     *     key (zero if the document does not exist).
     */
    t.prototype.Ee = function(t, e) {
        var n = this, r = Ye(), i = new Ke(st.comparator);
        return this.pe(t, e, (function(t, e) {
            var o = n.ye(t, e);
            r = r.insert(t, o), i = i.insert(t, Zr(e));
        })).next((function() {
            return {
                documents: r,
                Te: i
            };
        }));
    }, t.prototype.pe = function(t, e, n) {
        if (e.isEmpty()) return mr.resolve();
        var r = IDBKeyRange.bound(e.first().path.toArray(), e.last().path.toArray()), i = e.getIterator(), o = i.getNext();
        return _i(t).Ot({
            range: r
        }, (function(t, e, r) {
            // Go through keys not found in cache.
            for (var s = st.fromSegments(t); o && st.comparator(o, s) < 0; ) n(o, null), o = i.getNext();
            o && o.isEqual(s) && (
            // Key found in cache.
            n(o, e), o = i.hasNext() ? i.getNext() : null), 
            // Skip to the next key (if there is one).
            o ? r.Ct(o.path.toArray()) : r.done();
        })).next((function() {
            // The rest of the keys are not in the cache. One case where `iterate`
            // above won't go through them is when the cache is empty.
            for (;o; ) n(o, null), o = i.hasNext() ? i.getNext() : null;
        }));
    }, t.prototype.getDocumentsMatchingQuery = function(t, e, n) {
        var r = this, i = Ye(), o = e.path.length + 1, s = {};
        if (n.isEqual(U.min())) {
            // Documents are ordered by key, so we can use a prefix scan to narrow
            // down the documents we need to match the query against.
            var u = e.path.toArray();
            s.range = IDBKeyRange.lowerBound(u);
        } else {
            // Execute an index-free query and filter by read time. This is safe
            // since all document changes to queries that have a
            // lastLimboFreeSnapshotVersion (`sinceReadTime`) have a read time set.
            var a = e.path.toArray(), c = Pr(n);
            s.range = IDBKeyRange.lowerBound([ a, c ], 
            /* open= */ !0), s.index = ir.collectionReadTimeIndex;
        }
        return _i(t).Ot(s, (function(t, n, s) {
            // The query is actually returning any path that starts with the query
            // path prefix which may include documents in subcollections. For
            // example, a query on 'rooms' will return rooms/abc/messages/xyx but we
            // shouldn't match it. Fix this by discarding rows with document keys
            // more than one segment longer than the query path.
            if (t.length === o) {
                var u = Or(r.R, n);
                e.path.isPrefixOf(u.key.path) ? re(e, u) && (i = i.insert(u.key, u)) : s.done();
            }
        })).next((function() {
            return i;
        }));
    }, t.prototype.newChangeBuffer = function(t) {
        return new bi(this, !!t && t.trackRemovals);
    }, t.prototype.getSize = function(t) {
        return this.getMetadata(t).next((function(t) {
            return t.byteSize;
        }));
    }, t.prototype.getMetadata = function(t) {
        return Ii(t).get(or.key).next((function(t) {
            return R(!!t), t;
        }));
    }, t.prototype.me = function(t, e) {
        return Ii(t).put(or.key, e);
    }, 
    /**
     * Decodes `remoteDoc` and returns the document (or null, if the document
     * corresponds to the format used for sentinel deletes).
     */
    t.prototype.ye = function(t, e) {
        if (e) {
            var n = Or(this.R, e);
            // Whether the document is a sentinel removal and should only be used in the
            // `getNewDocumentChanges()`
                        if (!n.isNoDocument() || !n.version.isEqual(U.min())) return n;
        }
        return _t.newInvalidDocument(t);
    }, t;
}(), bi = /** @class */ function(t) {
    /**
     * @param documentCache - The IndexedDbRemoteDocumentCache to apply the changes to.
     * @param trackRemovals - Whether to create sentinel deletes that can be tracked by
     * `getNewDocumentChanges()`.
     */
    function e(e, n) {
        var r = this;
        return (r = t.call(this) || this).Ie = e, r.trackRemovals = n, 
        // A map of document sizes prior to applying the changes in this buffer.
        r.Ae = new mi((function(t) {
            return t.toString();
        }), (function(t, e) {
            return t.isEqual(e);
        })), r;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.applyChanges = function(t) {
        var e = this, n = [], r = 0, i = new Qe((function(t, e) {
            return M(t.canonicalString(), e.canonicalString());
        }));
        return this.changes.forEach((function(o, s) {
            var u = e.Ae.get(o);
            if (s.document.isValidDocument()) {
                var a = Lr(e.Ie.R, s.document, e.getReadTime(o));
                i = i.add(o.path.popLast());
                var c = Zr(a);
                r += c - u, n.push(e.Ie.addEntry(t, o, a));
            } else if (r -= u, e.trackRemovals) {
                // In order to track removals, we store a "sentinel delete" in the
                // RemoteDocumentCache. This entry is represented by a NoDocument
                // with a version of 0 and ignored by `maybeDecodeDocument()` but
                // preserved in `getNewDocumentChanges()`.
                var h = Lr(e.Ie.R, _t.newNoDocument(o, U.min()), e.getReadTime(o));
                n.push(e.Ie.addEntry(t, o, h));
            } else n.push(e.Ie.removeEntry(t, o));
        })), i.forEach((function(r) {
            n.push(e.Ie.Ut.addToCollectionParentIndex(t, r));
        })), n.push(this.Ie.updateMetadata(t, r)), mr.waitFor(n);
    }, e.prototype.getFromCache = function(t, e) {
        var n = this;
        // Record the size of everything we load from the cache so we can compute a delta later.
                return this.Ie.ge(t, e).next((function(t) {
            return n.Ae.set(e, t.size), t.document;
        }));
    }, e.prototype.getAllFromCache = function(t, e) {
        var n = this;
        // Record the size of everything we load from the cache so we can compute
        // a delta later.
                return this.Ie.Ee(t, e).next((function(t) {
            var e = t.documents;
            // Note: `getAllFromCache` returns two maps instead of a single map from
            // keys to `DocumentSizeEntry`s. This is to allow returning the
            // `MutableDocumentMap` directly, without a conversion.
            return t.Te.forEach((function(t, e) {
                n.Ae.set(t, e);
            })), e;
        }));
    }, e;
}(gi);

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An in-memory buffer of entries to be written to a RemoteDocumentCache.
 * It can be used to batch up a set of changes to be written to the cache, but
 * additionally supports reading entries back with the `getEntry()` method,
 * falling back to the underlying RemoteDocumentCache if no entry is
 * buffered.
 *
 * Entries added to the cache *must* be read first. This is to facilitate
 * calculating the size delta of the pending changes.
 *
 * PORTING NOTE: This class was implemented then removed from other platforms.
 * If byte-counting ends up being needed on the other platforms, consider
 * porting this class as part of that implementation work.
 */ function Ii(t) {
    return Ar(t, or.store);
}

/**
 * Helper to get a typed SimpleDbStore for the remoteDocuments object store.
 */ function _i(t) {
    return Ar(t, ir.store);
}

function Ei(t) {
    return t.path.toArray();
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Performs database creation and schema upgrades. */ var Ti = /** @class */ function() {
    function t(t) {
        this.R = t;
    }
    /**
     * Performs database creation and schema upgrades.
     *
     * Note that in production, this method is only ever used to upgrade the schema
     * to SCHEMA_VERSION. Different values of toVersion are only used for testing
     * and local feature development.
     */    return t.prototype.Rt = function(t, e, n, r) {
        var i = this;
        R(n < r && n >= 0 && r <= 11);
        var o = new gr("createOrUpgrade", e);
        n < 1 && r >= 1 && (function(t) {
            t.createObjectStore($n.store);
        }(t), function(t) {
            t.createObjectStore(Zn.store, {
                keyPath: Zn.keyPath
            }), t.createObjectStore(tr.store, {
                keyPath: tr.keyPath,
                autoIncrement: !0
            }).createIndex(tr.userMutationsIndex, tr.userMutationsKeyPath, {
                unique: !0
            }), t.createObjectStore(er.store);
        }(t), Si(t), function(t) {
            t.createObjectStore(ir.store);
        }(t));
        // Migration 2 to populate the targetGlobal object no longer needed since
        // migration 3 unconditionally clears it.
        var s = mr.resolve();
        return n < 3 && r >= 3 && (
        // Brand new clients don't need to drop and recreate--only clients that
        // potentially have corrupt data.
        0 !== n && (function(t) {
            t.deleteObjectStore(ur.store), t.deleteObjectStore(sr.store), t.deleteObjectStore(ar.store);
        }(t), Si(t)), s = s.next((function() {
            /**
     * Creates the target global singleton row.
     *
     * @param txn - The version upgrade transaction for indexeddb
     */
            return function(t) {
                var e = t.store(ar.store), n = new ar(
                /*highestTargetId=*/ 0, 
                /*lastListenSequenceNumber=*/ 0, U.min().toTimestamp(), 
                /*targetCount=*/ 0);
                return e.put(ar.key, n);
            }(o);
        }))), n < 4 && r >= 4 && (0 !== n && (
        // Schema version 3 uses auto-generated keys to generate globally unique
        // mutation batch IDs (this was previously ensured internally by the
        // client). To migrate to the new schema, we have to read all mutations
        // and write them back out. We preserve the existing batch IDs to guarantee
        // consistency with other object stores. Any further mutation batch IDs will
        // be auto-generated.
        s = s.next((function() {
            return function(t, e) {
                return e.store(tr.store).Nt().next((function(n) {
                    t.deleteObjectStore(tr.store), t.createObjectStore(tr.store, {
                        keyPath: tr.keyPath,
                        autoIncrement: !0
                    }).createIndex(tr.userMutationsIndex, tr.userMutationsKeyPath, {
                        unique: !0
                    });
                    var r = e.store(tr.store), i = n.map((function(t) {
                        return r.put(t);
                    }));
                    return mr.waitFor(i);
                }));
            }(t, o);
        }))), s = s.next((function() {
            !function(t) {
                t.createObjectStore(hr.store, {
                    keyPath: hr.keyPath
                });
            }(t);
        }))), n < 5 && r >= 5 && (s = s.next((function() {
            return i.Re(o);
        }))), n < 6 && r >= 6 && (s = s.next((function() {
            return function(t) {
                t.createObjectStore(or.store);
            }(t), i.be(o);
        }))), n < 7 && r >= 7 && (s = s.next((function() {
            return i.ve(o);
        }))), n < 8 && r >= 8 && (s = s.next((function() {
            return i.Pe(t, o);
        }))), n < 9 && r >= 9 && (s = s.next((function() {
            // Multi-Tab used to manage its own changelog, but this has been moved
            // to the DbRemoteDocument object store itself. Since the previous change
            // log only contained transient data, we can drop its object store.
            !function(t) {
                t.objectStoreNames.contains("remoteDocumentChanges") && t.deleteObjectStore("remoteDocumentChanges");
            }(t), function(t) {
                var e = t.objectStore(ir.store);
                e.createIndex(ir.readTimeIndex, ir.readTimeIndexPath, {
                    unique: !1
                }), e.createIndex(ir.collectionReadTimeIndex, ir.collectionReadTimeIndexPath, {
                    unique: !1
                });
            }(e);
        }))), n < 10 && r >= 10 && (s = s.next((function() {
            return i.Ve(o);
        }))), n < 11 && r >= 11 && (s = s.next((function() {
            !function(t) {
                t.createObjectStore(fr.store, {
                    keyPath: fr.keyPath
                });
            }(t), function(t) {
                t.createObjectStore(lr.store, {
                    keyPath: lr.keyPath
                });
            }(t);
        }))), s;
    }, t.prototype.be = function(t) {
        var e = 0;
        return t.store(ir.store).Ot((function(t, n) {
            e += Zr(n);
        })).next((function() {
            var n = new or(e);
            return t.store(or.store).put(or.key, n);
        }));
    }, t.prototype.Re = function(t) {
        var e = this, n = t.store(Zn.store), r = t.store(tr.store);
        return n.Nt().next((function(n) {
            return mr.forEach(n, (function(n) {
                var i = IDBKeyRange.bound([ n.userId, -1 ], [ n.userId, n.lastAcknowledgedBatchId ]);
                return r.Nt(tr.userMutationsIndex, i).next((function(r) {
                    return mr.forEach(r, (function(r) {
                        R(r.userId === n.userId);
                        var i = qr(e.R, r);
                        return $r(t, n.userId, i).next((function() {}));
                    }));
                }));
            }));
        }));
    }, 
    /**
     * Ensures that every document in the remote document cache has a corresponding sentinel row
     * with a sequence number. Missing rows are given the most recently used sequence number.
     */
    t.prototype.ve = function(t) {
        var e = t.store(ur.store), n = t.store(ir.store);
        return t.store(ar.store).get(ar.key).next((function(t) {
            var r = [];
            return n.Ot((function(n, i) {
                var o = new z(n), s = function(t) {
                    return [ 0, Wn(t) ];
                }(o);
                r.push(e.get(s).next((function(n) {
                    return n ? mr.resolve() : function(n) {
                        return e.put(new ur(0, Wn(n), t.highestListenSequenceNumber));
                    }(o);
                })));
            })).next((function() {
                return mr.waitFor(r);
            }));
        }));
    }, t.prototype.Pe = function(t, e) {
        // Create the index.
        t.createObjectStore(cr.store, {
            keyPath: cr.keyPath
        });
        var n = e.store(cr.store), r = new Wr, i = function(t) {
            if (r.add(t)) {
                var e = t.lastSegment(), i = t.popLast();
                return n.put({
                    collectionId: e,
                    parent: Wn(i)
                });
            }
        };
        // Helper to add an index entry iff we haven't already written it.
        // Index existing remote documents.
                return e.store(ir.store).Ot({
            kt: !0
        }, (function(t, e) {
            var n = new z(t);
            return i(n.popLast());
        })).next((function() {
            return e.store(er.store).Ot({
                kt: !0
            }, (function(t, e) {
                t[0];
                var n = t[1], r = (t[2], Xn(n));
                return i(r.popLast());
            }));
        }));
    }, t.prototype.Ve = function(t) {
        var e = this, n = t.store(sr.store);
        return n.Ot((function(t, r) {
            var i = Ur(r), o = Br(e.R, i);
            return n.put(o);
        }));
    }, t;
}();

function Si(t) {
    t.createObjectStore(ur.store, {
        keyPath: ur.keyPath
    }).createIndex(ur.documentTargetsIndex, ur.documentTargetsKeyPath, {
        unique: !0
    }), 
    // NOTE: This is unique only because the TargetId is the suffix.
    t.createObjectStore(sr.store, {
        keyPath: sr.keyPath
    }).createIndex(sr.queryTargetsIndexName, sr.queryTargetsKeyPath, {
        unique: !0
    }), t.createObjectStore(ar.store);
}

var Ni = "Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.", Di = /** @class */ function() {
    function t(
    /**
     * Whether to synchronize the in-memory state of multiple tabs and share
     * access to local persistence.
     */
    e, n, r, i, o, s, u, a, c, 
    /**
     * If set to true, forcefully obtains database access. Existing tabs will
     * no longer be able to access IndexedDB.
     */
    h) {
        if (this.allowTabSynchronization = e, this.persistenceKey = n, this.clientId = r, 
        this.Se = o, this.window = s, this.document = u, this.De = c, this.Ce = h, this.Ne = null, 
        this.xe = !1, this.isPrimary = !1, this.networkEnabled = !0, 
        /** Our window.unload handler, if registered. */
        this.Fe = null, this.inForeground = !1, 
        /** Our 'visibilitychange' listener if registered. */
        this.ke = null, 
        /** The client metadata refresh task. */
        this.Oe = null, 
        /** The last time we garbage collected the client metadata object store. */
        this.$e = Number.NEGATIVE_INFINITY, 
        /** A listener to notify on primary state changes. */
        this.Me = function(t) {
            return Promise.resolve();
        }, !t.yt()) throw new T(E.UNIMPLEMENTED, "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");
        this.referenceDelegate = new yi(this, i), this.Le = n + "main", this.R = new Rr(a), 
        this.Be = new wr(this.Le, 11, new Ti(this.R)), this.qe = new si(this.referenceDelegate, this.R), 
        this.Ut = new Hr, this.Ue = function(t, e) {
            return new wi(t, e);
        }(this.R, this.Ut), this.Qe = new Kr, this.window && this.window.localStorage ? this.Ke = this.window.localStorage : (this.Ke = null, 
        !1 === h && A("IndexedDbPersistence", "LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."));
    }
    /**
     * Attempt to start IndexedDb persistence.
     *
     * @returns Whether persistence was enabled.
     */    return t.prototype.start = function() {
        var t = this;
        // NOTE: This is expected to fail sometimes (in the case of another tab
        // already having the persistence lock), so it's the first thing we should
        // do.
                return this.je().then((function() {
            if (!t.isPrimary && !t.allowTabSynchronization) 
            // Fail `start()` if `synchronizeTabs` is disabled and we cannot
            // obtain the primary lease.
            throw new T(E.FAILED_PRECONDITION, Ni);
            return t.We(), t.Ge(), t.ze(), t.runTransaction("getHighestListenSequenceNumber", "readonly", (function(e) {
                return t.qe.getHighestSequenceNumber(e);
            }));
        })).then((function(e) {
            t.Ne = new _(e, t.De);
        })).then((function() {
            t.xe = !0;
        })).catch((function(e) {
            return t.Be && t.Be.close(), Promise.reject(e);
        }));
    }, 
    /**
     * Registers a listener that gets called when the primary state of the
     * instance changes. Upon registering, this listener is invoked immediately
     * with the current primary state.
     *
     * PORTING NOTE: This is only used for Web multi-tab.
     */
    t.prototype.He = function(t) {
        var e = this;
        return this.Me = function(n) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(e, void 0, void 0, (function() {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(e) {
                    return this.started ? [ 2 /*return*/ , t(n) ] : [ 2 /*return*/ ];
                }));
            }));
        }, t(this.isPrimary);
    }, 
    /**
     * Registers a listener that gets called when the database receives a
     * version change event indicating that it has deleted.
     *
     * PORTING NOTE: This is only used for Web multi-tab.
     */
    t.prototype.setDatabaseDeletedListener = function(t) {
        var e = this;
        this.Be.vt((function(n) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(e, void 0, void 0, (function() {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(e) {
                    switch (e.label) {
                      case 0:
                        return null === n.newVersion ? [ 4 /*yield*/ , t() ] : [ 3 /*break*/ , 2 ];

                      case 1:
                        e.sent(), e.label = 2;

                      case 2:
                        return [ 2 /*return*/ ];
                    }
                }));
            }));
        }));
    }, 
    /**
     * Adjusts the current network state in the client's metadata, potentially
     * affecting the primary lease.
     *
     * PORTING NOTE: This is only used for Web multi-tab.
     */
    t.prototype.setNetworkEnabled = function(t) {
        var e = this;
        this.networkEnabled !== t && (this.networkEnabled = t, 
        // Schedule a primary lease refresh for immediate execution. The eventual
        // lease update will be propagated via `primaryStateListener`.
        this.Se.enqueueAndForget((function() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(e, void 0, void 0, (function() {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(t) {
                    switch (t.label) {
                      case 0:
                        return this.started ? [ 4 /*yield*/ , this.je() ] : [ 3 /*break*/ , 2 ];

                      case 1:
                        t.sent(), t.label = 2;

                      case 2:
                        return [ 2 /*return*/ ];
                    }
                }));
            }));
        })));
    }, 
    /**
     * Updates the client metadata in IndexedDb and attempts to either obtain or
     * extend the primary lease for the local client. Asynchronously notifies the
     * primary state listener if the client either newly obtained or released its
     * primary lease.
     */
    t.prototype.je = function() {
        var t = this;
        return this.runTransaction("updateClientMetadataAndTryBecomePrimary", "readwrite", (function(e) {
            return ki(e).put(new hr(t.clientId, Date.now(), t.networkEnabled, t.inForeground)).next((function() {
                if (t.isPrimary) return t.Je(e).next((function(e) {
                    e || (t.isPrimary = !1, t.Se.enqueueRetryable((function() {
                        return t.Me(!1);
                    })));
                }));
            })).next((function() {
                return t.Ye(e);
            })).next((function(n) {
                return t.isPrimary && !n ? t.Xe(e).next((function() {
                    return !1;
                })) : !!n && t.Ze(e).next((function() {
                    return !0;
                }));
            }));
        })).catch((function(e) {
            if (_r(e)) 
            // Proceed with the existing state. Any subsequent access to
            // IndexedDB will verify the lease.
            return D("IndexedDbPersistence", "Failed to extend owner lease: ", e), t.isPrimary;
            if (!t.allowTabSynchronization) throw e;
            return D("IndexedDbPersistence", "Releasing owner lease after error during lease refresh", e), 
            /* isPrimary= */ !1;
        })).then((function(e) {
            t.isPrimary !== e && t.Se.enqueueRetryable((function() {
                return t.Me(e);
            })), t.isPrimary = e;
        }));
    }, t.prototype.Je = function(t) {
        var e = this;
        return Ai(t).get($n.key).next((function(t) {
            return mr.resolve(e.tn(t));
        }));
    }, t.prototype.en = function(t) {
        return ki(t).delete(this.clientId);
    }, 
    /**
     * If the garbage collection threshold has passed, prunes the
     * RemoteDocumentChanges and the ClientMetadata store based on the last update
     * time of all clients.
     */
    t.prototype.nn = function() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
            var t, e, n, r, i = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(o) {
                switch (o.label) {
                  case 0:
                    return !this.isPrimary || this.sn(this.$e, 18e5) ? [ 3 /*break*/ , 2 ] : (this.$e = Date.now(), 
                    [ 4 /*yield*/ , this.runTransaction("maybeGarbageCollectMultiClientState", "readwrite-primary", (function(t) {
                        var e = Ar(t, hr.store);
                        return e.Nt().next((function(t) {
                            var n = i.rn(t, 18e5), r = t.filter((function(t) {
                                return -1 === n.indexOf(t);
                            }));
                            // Delete metadata for clients that are no longer considered active.
                                                        return mr.forEach(r, (function(t) {
                                return e.delete(t.clientId);
                            })).next((function() {
                                return r;
                            }));
                        }));
                    })).catch((function() {
                        return [];
                    })) ]);

                  case 1:
                    // Delete potential leftover entries that may continue to mark the
                    // inactive clients as zombied in LocalStorage.
                    // Ideally we'd delete the IndexedDb and LocalStorage zombie entries for
                    // the client atomically, but we can't. So we opt to delete the IndexedDb
                    // entries first to avoid potentially reviving a zombied client.
                    if (t = o.sent(), this.Ke) for (e = 0, n = t; e < n.length; e++) r = n[e], this.Ke.removeItem(this.on(r.clientId));
                    o.label = 2;

                  case 2:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Schedules a recurring timer to update the client metadata and to either
     * extend or acquire the primary lease if the client is eligible.
     */
    t.prototype.ze = function() {
        var t = this;
        this.Oe = this.Se.enqueueAfterDelay("client_metadata_refresh" /* ClientMetadataRefresh */ , 4e3, (function() {
            return t.je().then((function() {
                return t.nn();
            })).then((function() {
                return t.ze();
            }));
        }));
    }, 
    /** Checks whether `client` is the local client. */ t.prototype.tn = function(t) {
        return !!t && t.ownerId === this.clientId;
    }, 
    /**
     * Evaluate the state of all active clients and determine whether the local
     * client is or can act as the holder of the primary lease. Returns whether
     * the client is eligible for the lease, but does not actually acquire it.
     * May return 'false' even if there is no active leaseholder and another
     * (foreground) client should become leaseholder instead.
     */
    t.prototype.Ye = function(t) {
        var e = this;
        return this.Ce ? mr.resolve(!0) : Ai(t).get($n.key).next((function(n) {
            // A client is eligible for the primary lease if:
            // - its network is enabled and the client's tab is in the foreground.
            // - its network is enabled and no other client's tab is in the
            //   foreground.
            // - every clients network is disabled and the client's tab is in the
            //   foreground.
            // - every clients network is disabled and no other client's tab is in
            //   the foreground.
            // - the `forceOwningTab` setting was passed in.
            if (null !== n && e.sn(n.leaseTimestampMs, 5e3) && !e.cn(n.ownerId)) {
                if (e.tn(n) && e.networkEnabled) return !0;
                if (!e.tn(n)) {
                    if (!n.allowTabSynchronization) 
                    // Fail the `canActAsPrimary` check if the current leaseholder has
                    // not opted into multi-tab synchronization. If this happens at
                    // client startup, we reject the Promise returned by
                    // `enablePersistence()` and the user can continue to use Firestore
                    // with in-memory persistence.
                    // If this fails during a lease refresh, we will instead block the
                    // AsyncQueue from executing further operations. Note that this is
                    // acceptable since mixing & matching different `synchronizeTabs`
                    // settings is not supported.
                    // TODO(b/114226234): Remove this check when `synchronizeTabs` can
                    // no longer be turned off.
                    throw new T(E.FAILED_PRECONDITION, Ni);
                    return !1;
                }
            }
            return !(!e.networkEnabled || !e.inForeground) || ki(t).Nt().next((function(t) {
                return void 0 === e.rn(t, 5e3).find((function(t) {
                    if (e.clientId !== t.clientId) {
                        var n = !e.networkEnabled && t.networkEnabled, r = !e.inForeground && t.inForeground, i = e.networkEnabled === t.networkEnabled;
                        if (n || r && i) return !0;
                    }
                    return !1;
                }));
            }));
        })).next((function(t) {
            return e.isPrimary !== t && D("IndexedDbPersistence", "Client " + (t ? "is" : "is not") + " eligible for a primary lease."), 
            t;
        }));
    }, t.prototype.shutdown = function() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
            var t = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(e) {
                switch (e.label) {
                  case 0:
                    // Use `SimpleDb.runTransaction` directly to avoid failing if another tab
                    // has obtained the primary lease.
                    // The shutdown() operations are idempotent and can be called even when
                    // start() aborted (e.g. because it couldn't acquire the persistence lease).
                    return this.xe = !1, this.un(), this.Oe && (this.Oe.cancel(), this.Oe = null), this.an(), 
                    this.hn(), [ 4 /*yield*/ , this.Be.runTransaction("shutdown", "readwrite", [ $n.store, hr.store ], (function(e) {
                        var n = new Dr(e, _.o);
                        return t.Xe(n).next((function() {
                            return t.en(n);
                        }));
                    })) ];

                  case 1:
                    // The shutdown() operations are idempotent and can be called even when
                    // start() aborted (e.g. because it couldn't acquire the persistence lease).
                    // Use `SimpleDb.runTransaction` directly to avoid failing if another tab
                    // has obtained the primary lease.
                    return e.sent(), this.Be.close(), 
                    // Remove the entry marking the client as zombied from LocalStorage since
                    // we successfully deleted its metadata from IndexedDb.
                    this.ln(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Returns clients that are not zombied and have an updateTime within the
     * provided threshold.
     */
    t.prototype.rn = function(t, e) {
        var n = this;
        return t.filter((function(t) {
            return n.sn(t.updateTimeMs, e) && !n.cn(t.clientId);
        }));
    }, 
    /**
     * Returns the IDs of the clients that are currently active. If multi-tab
     * is not supported, returns an array that only contains the local client's
     * ID.
     *
     * PORTING NOTE: This is only used for Web multi-tab.
     */
    t.prototype.fn = function() {
        var t = this;
        return this.runTransaction("getActiveClients", "readonly", (function(e) {
            return ki(e).Nt().next((function(e) {
                return t.rn(e, 18e5).map((function(t) {
                    return t.clientId;
                }));
            }));
        }));
    }, Object.defineProperty(t.prototype, "started", {
        get: function() {
            return this.xe;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.getMutationQueue = function(t) {
        return ti.Kt(t, this.R, this.Ut, this.referenceDelegate);
    }, t.prototype.getTargetCache = function() {
        return this.qe;
    }, t.prototype.getRemoteDocumentCache = function() {
        return this.Ue;
    }, t.prototype.getIndexManager = function() {
        return this.Ut;
    }, t.prototype.getBundleCache = function() {
        return this.Qe;
    }, t.prototype.runTransaction = function(t, e, n) {
        var r = this;
        D("IndexedDbPersistence", "Starting transaction:", t);
        var i, o = "readonly" === e ? "readonly" : "readwrite";
        // Do all transactions as readwrite against all object stores, since we
        // are the only reader/writer.
        return this.Be.runTransaction(t, o, dr, (function(o) {
            return i = new Dr(o, r.Ne ? r.Ne.next() : _.o), "readwrite-primary" === e ? r.Je(i).next((function(t) {
                return !!t || r.Ye(i);
            })).next((function(e) {
                if (!e) throw A("Failed to obtain primary lease for action '" + t + "'."), r.isPrimary = !1, 
                r.Se.enqueueRetryable((function() {
                    return r.Me(!1);
                })), new T(E.FAILED_PRECONDITION, pr);
                return n(i);
            })).next((function(t) {
                return r.Ze(i).next((function() {
                    return t;
                }));
            })) : r.dn(i).next((function() {
                return n(i);
            }));
        })).then((function(t) {
            return i.raiseOnCommittedEvent(), t;
        }));
    }, 
    /**
     * Verifies that the current tab is the primary leaseholder or alternatively
     * that the leaseholder has opted into multi-tab synchronization.
     */
    // TODO(b/114226234): Remove this check when `synchronizeTabs` can no longer
    // be turned off.
    t.prototype.dn = function(t) {
        var e = this;
        return Ai(t).get($n.key).next((function(t) {
            if (null !== t && e.sn(t.leaseTimestampMs, 5e3) && !e.cn(t.ownerId) && !e.tn(t) && !(e.Ce || e.allowTabSynchronization && t.allowTabSynchronization)) throw new T(E.FAILED_PRECONDITION, Ni);
        }));
    }, 
    /**
     * Obtains or extends the new primary lease for the local client. This
     * method does not verify that the client is eligible for this lease.
     */
    t.prototype.Ze = function(t) {
        var e = new $n(this.clientId, this.allowTabSynchronization, Date.now());
        return Ai(t).put($n.key, e);
    }, t.yt = function() {
        return wr.yt();
    }, 
    /** Checks the primary lease and removes it if we are the current primary. */ t.prototype.Xe = function(t) {
        var e = this, n = Ai(t);
        return n.get($n.key).next((function(t) {
            return e.tn(t) ? (D("IndexedDbPersistence", "Releasing primary lease."), n.delete($n.key)) : mr.resolve();
        }));
    }, 
    /** Verifies that `updateTimeMs` is within `maxAgeMs`. */ t.prototype.sn = function(t, e) {
        var n = Date.now();
        return !(t < n - e || t > n && (A("Detected an update time that is in the future: " + t + " > " + n), 
        1));
    }, t.prototype.We = function() {
        var t = this;
        null !== this.document && "function" == typeof this.document.addEventListener && (this.ke = function() {
            t.Se.enqueueAndForget((function() {
                return t.inForeground = "visible" === t.document.visibilityState, t.je();
            }));
        }, this.document.addEventListener("visibilitychange", this.ke), this.inForeground = "visible" === this.document.visibilityState);
    }, t.prototype.an = function() {
        this.ke && (this.document.removeEventListener("visibilitychange", this.ke), this.ke = null);
    }, 
    /**
     * Attaches a window.unload handler that will synchronously write our
     * clientId to a "zombie client id" location in LocalStorage. This can be used
     * by tabs trying to acquire the primary lease to determine that the lease
     * is no longer valid even if the timestamp is recent. This is particularly
     * important for the refresh case (so the tab correctly re-acquires the
     * primary lease). LocalStorage is used for this rather than IndexedDb because
     * it is a synchronous API and so can be used reliably from  an unload
     * handler.
     */
    t.prototype.Ge = function() {
        var t, e = this;
        "function" == typeof (null === (t = this.window) || void 0 === t ? void 0 : t.addEventListener) && (this.Fe = function() {
            // Note: In theory, this should be scheduled on the AsyncQueue since it
            // accesses internal state. We execute this code directly during shutdown
            // to make sure it gets a chance to run.
            e.un(), e.Se.enqueueAndForget((function() {
                return e.shutdown();
            }));
        }, this.window.addEventListener("unload", this.Fe));
    }, t.prototype.hn = function() {
        this.Fe && (this.window.removeEventListener("unload", this.Fe), this.Fe = null);
    }, 
    /**
     * Returns whether a client is "zombied" based on its LocalStorage entry.
     * Clients become zombied when their tab closes without running all of the
     * cleanup logic in `shutdown()`.
     */
    t.prototype.cn = function(t) {
        var e;
        try {
            var n = null !== (null === (e = this.Ke) || void 0 === e ? void 0 : e.getItem(this.on(t)));
            return D("IndexedDbPersistence", "Client '" + t + "' " + (n ? "is" : "is not") + " zombied in LocalStorage"), 
            n;
        } catch (t) {
            // Gracefully handle if LocalStorage isn't working.
            return A("IndexedDbPersistence", "Failed to get zombied client id.", t), !1;
        }
    }, 
    /**
     * Record client as zombied (a client that had its tab closed). Zombied
     * clients are ignored during primary tab selection.
     */
    t.prototype.un = function() {
        if (this.Ke) try {
            this.Ke.setItem(this.on(this.clientId), String(Date.now()));
        } catch (t) {
            // Gracefully handle if LocalStorage isn't available / working.
            A("Failed to set zombie client id.", t);
        }
    }, 
    /** Removes the zombied client entry if it exists. */ t.prototype.ln = function() {
        if (this.Ke) try {
            this.Ke.removeItem(this.on(this.clientId));
        } catch (t) {
            // Ignore
        }
    }, t.prototype.on = function(t) {
        return "firestore_zombie_" + this.persistenceKey + "_" + t;
    }, t;
}();

/**
 * Oldest acceptable age in milliseconds for client metadata before the client
 * is considered inactive and its associated data is garbage collected.
 */
/**
 * An IndexedDB-backed instance of Persistence. Data is stored persistently
 * across sessions.
 *
 * On Web only, the Firestore SDKs support shared access to its persistence
 * layer. This allows multiple browser tabs to read and write to IndexedDb and
 * to synchronize state even without network connectivity. Shared access is
 * currently optional and not enabled unless all clients invoke
 * `enablePersistence()` with `{synchronizeTabs:true}`.
 *
 * In multi-tab mode, if multiple clients are active at the same time, the SDK
 * will designate one client as the ???primary client???. An effort is made to pick
 * a visible, network-connected and active client, and this client is
 * responsible for letting other clients know about its presence. The primary
 * client writes a unique client-generated identifier (the client ID) to
 * IndexedDb???s ???owner??? store every 4 seconds. If the primary client fails to
 * update this entry, another client can acquire the lease and take over as
 * primary.
 *
 * Some persistence operations in the SDK are designated as primary-client only
 * operations. This includes the acknowledgment of mutations and all updates of
 * remote documents. The effects of these operations are written to persistence
 * and then broadcast to other tabs via LocalStorage (see
 * `WebStorageSharedClientState`), which then refresh their state from
 * persistence.
 *
 * Similarly, the primary client listens to notifications sent by secondary
 * clients to discover persistence changes written by secondary clients, such as
 * the addition of new mutations and query targets.
 *
 * If multi-tab is not enabled and another tab already obtained the primary
 * lease, IndexedDbPersistence enters a failed state and all subsequent
 * operations will automatically fail.
 *
 * Additionally, there is an optimization so that when a tab is closed, the
 * primary lease is released immediately (this is especially important to make
 * sure that a refreshed tab is able to immediately re-acquire the primary
 * lease). Unfortunately, IndexedDB cannot be reliably used in window.unload
 * since it is an asynchronous API. So in addition to attempting to give up the
 * lease, the leaseholder writes its client ID to a "zombiedClient" entry in
 * LocalStorage which acts as an indicator that another tab should go ahead and
 * take the primary lease immediately regardless of the current lease timestamp.
 *
 * TODO(b/114226234): Remove `synchronizeTabs` section when multi-tab is no
 * longer optional.
 */
/**
 * Helper to get a typed SimpleDbStore for the primary client object store.
 */
function Ai(t) {
    return Ar(t, $n.store);
}

/**
 * Helper to get a typed SimpleDbStore for the client metadata object store.
 */ function ki(t) {
    return Ar(t, hr.store);
}

/**
 * Generates a string used as a prefix when storing data in IndexedDB and
 * LocalStorage.
 */ function xi(t, e) {
    // Use two different prefix formats:
    //   * firestore / persistenceKey / projectID . databaseID / ...
    //   * firestore / persistenceKey / projectID / ...
    // projectIDs are DNS-compatible names and cannot contain dots
    // so there's no danger of collisions.
    var n = t.projectId;
    return t.isDefaultDatabase || (n += "." + t.database), "firestore/" + e + "/" + n + "/"
    /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */;
}

var Ci = function(t, e) {
    this.progress = t, this.wn = e;
}, Ri = /** @class */ function() {
    function t(t, e, n) {
        this.Ue = t, this._n = e, this.Ut = n
        /**
     * Get the local view of the document identified by `key`.
     *
     * @returns Local view of the document or null if we don't have any cached
     * state for it.
     */;
    }
    return t.prototype.mn = function(t, e) {
        var n = this;
        return this._n.getAllMutationBatchesAffectingDocumentKey(t, e).next((function(r) {
            return n.yn(t, e, r);
        }));
    }, 
    /** Internal version of `getDocument` that allows reusing batches. */ t.prototype.yn = function(t, e, n) {
        return this.Ue.getEntry(t, e).next((function(t) {
            for (var e = 0, r = n; e < r.length; e++) {
                r[e].applyToLocalView(t);
            }
            return t;
        }));
    }, 
    // Returns the view of the given `docs` as they would appear after applying
    // all mutations in the given `batches`.
    t.prototype.gn = function(t, e) {
        t.forEach((function(t, n) {
            for (var r = 0, i = e; r < i.length; r++) {
                i[r].applyToLocalView(n);
            }
        }));
    }, 
    /**
     * Gets the local view of the documents identified by `keys`.
     *
     * If we don't have cached state for a document in `keys`, a NoDocument will
     * be stored for that key in the resulting set.
     */
    t.prototype.pn = function(t, e) {
        var n = this;
        return this.Ue.getEntries(t, e).next((function(e) {
            return n.En(t, e).next((function() {
                return e;
            }));
        }));
    }, 
    /**
     * Applies the local view the given `baseDocs` without retrieving documents
     * from the local store.
     */
    t.prototype.En = function(t, e) {
        var n = this;
        return this._n.getAllMutationBatchesAffectingDocumentKeys(t, e).next((function(t) {
            return n.gn(e, t);
        }));
    }, 
    /**
     * Performs a query against the local view of all documents.
     *
     * @param transaction - The persistence transaction.
     * @param query - The query to match documents against.
     * @param sinceReadTime - If not set to SnapshotVersion.min(), return only
     *     documents that have been read since this snapshot version (exclusive).
     */
    t.prototype.getDocumentsMatchingQuery = function(t, e, n) {
        /**
 * Returns whether the query matches a single document by path (rather than a
 * collection).
 */
        return function(t) {
            return st.isDocumentKey(t.path) && null === t.collectionGroup && 0 === t.filters.length;
        }(e) ? this.Tn(t, e.path) : Xt(e) ? this.In(t, e, n) : this.An(t, e, n);
    }, t.prototype.Tn = function(t, e) {
        // Just do a simple document lookup.
        return this.mn(t, new st(e)).next((function(t) {
            var e = Je();
            return t.isFoundDocument() && (e = e.insert(t.key, t)), e;
        }));
    }, t.prototype.In = function(t, e, n) {
        var r = this, i = e.collectionGroup, o = Je();
        return this.Ut.getCollectionParents(t, i).next((function(s) {
            return mr.forEach(s, (function(s) {
                var u = function(t, e) {
                    return new Kt(e, 
                    /*collectionGroup=*/ null, t.explicitOrderBy.slice(), t.filters.slice(), t.limit, t.limitType, t.startAt, t.endAt);
                }(e, s.child(i));
                return r.An(t, u, n).next((function(t) {
                    t.forEach((function(t, e) {
                        o = o.insert(t, e);
                    }));
                }));
            })).next((function() {
                return o;
            }));
        }));
    }, t.prototype.An = function(t, e, n) {
        var r, i, o = this;
        // Query the remote documents and overlay mutations.
                return this.Ue.getDocumentsMatchingQuery(t, e, n).next((function(n) {
            return r = n, o._n.getAllMutationBatchesAffectingQuery(t, e);
        })).next((function(e) {
            return i = e, o.Rn(t, i, r).next((function(t) {
                r = t;
                for (var e = 0, n = i; e < n.length; e++) for (var o = n[e], s = 0, u = o.mutations; s < u.length; s++) {
                    var a = u[s], c = a.key, h = r.get(c);
                    null == h && (
                    // Create invalid document to apply mutations on top of
                    h = _t.newInvalidDocument(c), r = r.insert(c, h)), De(a, h, o.localWriteTime), h.isFoundDocument() || (r = r.remove(c));
                }
            }));
        })).next((function() {
            // Finally, filter out any documents that don't actually match
            // the query.
            return r.forEach((function(t, n) {
                re(e, n) || (r = r.remove(t));
            })), r;
        }));
    }, t.prototype.Rn = function(t, e, n) {
        for (var r = en(), i = 0, o = e; i < o.length; i++) for (var s = 0, u = o[i].mutations; s < u.length; s++) {
            var a = u[s];
            a instanceof Re && null === n.get(a.key) && (r = r.add(a.key));
        }
        var c = n;
        return this.Ue.getEntries(t, r).next((function(t) {
            return t.forEach((function(t, e) {
                e.isFoundDocument() && (c = c.insert(t, e));
            })), c;
        }));
    }, t;
}(), Oi = /** @class */ function() {
    function t(t, e, n, r) {
        this.targetId = t, this.fromCache = e, this.bn = n, this.vn = r;
    }
    return t.Pn = function(e, n) {
        for (var r = en(), i = en(), o = 0, s = n.docChanges; o < s.length; o++) {
            var u = s[o];
            switch (u.type) {
              case 0 /* Added */ :
                r = r.add(u.doc.key);
                break;

              case 1 /* Removed */ :
                i = i.add(u.doc.key);
                // do nothing
                        }
        }
        return new t(e, n.fromCache, r, i);
    }, t;
}(), Li = /** @class */ function() {
    function t() {}
    /** Sets the document view to query against. */    return t.prototype.Vn = function(t) {
        this.Sn = t;
    }, 
    /** Returns all local documents matching the specified query. */ t.prototype.getDocumentsMatchingQuery = function(t, e, n, r) {
        var i = this;
        // Queries that match all documents don't benefit from using
        // key-based lookups. It is more efficient to scan all documents in a
        // collection, rather than to perform individual lookups.
                return function(t) {
            return 0 === t.filters.length && null === t.limit && null == t.startAt && null == t.endAt && (0 === t.explicitOrderBy.length || 1 === t.explicitOrderBy.length && t.explicitOrderBy[0].field.isKeyField());
        }(e) || n.isEqual(U.min()) ? this.Dn(t, e) : this.Sn.pn(t, r).next((function(o) {
            var s = i.Cn(e, o);
            return (Qt(e) || Wt(e)) && i.Nn(e.limitType, s, r, n) ? i.Dn(t, e) : (N() <= _firebase_logger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].DEBUG && D("QueryEngine", "Re-using previous result from %s to execute query: %s", n.toString(), ne(e)), 
            i.Sn.getDocumentsMatchingQuery(t, e, n).next((function(t) {
                // We merge `previousResults` into `updateResults`, since
                // `updateResults` is already a DocumentMap. If a document is
                // contained in both lists, then its contents are the same.
                return s.forEach((function(e) {
                    t = t.insert(e.key, e);
                })), t;
            })));
        }));
        // Queries that have never seen a snapshot without limbo free documents
        // should also be run as a full collection scan.
        }, 
    /** Applies the query filter and sorting to the provided documents.  */ t.prototype.Cn = function(t, e) {
        // Sort the documents and re-apply the query filter since previously
        // matching documents do not necessarily still match the query.
        var n = new Qe(ie(t));
        return e.forEach((function(e, r) {
            re(t, r) && (n = n.add(r));
        })), n;
    }, 
    /**
     * Determines if a limit query needs to be refilled from cache, making it
     * ineligible for index-free execution.
     *
     * @param sortedPreviousResults - The documents that matched the query when it
     * was last synchronized, sorted by the query's comparator.
     * @param remoteKeys - The document keys that matched the query at the last
     * snapshot.
     * @param limboFreeSnapshotVersion - The version of the snapshot when the
     * query was last synchronized.
     */
    t.prototype.Nn = function(t, e, n, r) {
        // The query needs to be refilled if a previously matching document no
        // longer matches.
        if (n.size !== e.size) return !0;
        // Limit queries are not eligible for index-free query execution if there is
        // a potential that an older document from cache now sorts before a document
        // that was previously part of the limit. This, however, can only happen if
        // the document at the edge of the limit goes out of limit.
        // If a document that is not the limit boundary sorts differently,
        // the boundary of the limit itself did not change and documents from cache
        // will continue to be "rejected" by this boundary. Therefore, we can ignore
        // any modifications that don't affect the last document.
                var i = "F" /* First */ === t ? e.last() : e.first();
        return !!i && (i.hasPendingWrites || i.version.compareTo(r) > 0);
    }, t.prototype.Dn = function(t, e) {
        return N() <= _firebase_logger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].DEBUG && D("QueryEngine", "Using full collection scan to execute query:", ne(e)), 
        this.Sn.getDocumentsMatchingQuery(t, e, U.min());
    }, t;
}(), Pi = /** @class */ function() {
    function t(
    /** Manages our in-memory or durable persistence. */
    t, e, n, r) {
        this.persistence = t, this.xn = e, this.R = r, 
        /**
             * Maps a targetID to data about its target.
             *
             * PORTING NOTE: We are using an immutable data structure on Web to make re-runs
             * of `applyRemoteEvent()` idempotent.
             */
        this.Fn = new Ke(M), 
        /** Maps a target to its targetID. */
        // TODO(wuandy): Evaluate if TargetId can be part of Target.
        this.kn = new mi((function(t) {
            return St(t);
        }), Nt), 
        /**
             * The read time of the last entry processed by `getNewDocumentChanges()`.
             *
             * PORTING NOTE: This is only used for multi-tab synchronization.
             */
        this.On = U.min(), this._n = t.getMutationQueue(n), this.$n = t.getRemoteDocumentCache(), 
        this.qe = t.getTargetCache(), this.Mn = new Ri(this.$n, this._n, this.persistence.getIndexManager()), 
        this.Qe = t.getBundleCache(), this.xn.Vn(this.Mn);
    }
    return t.prototype.collectGarbage = function(t) {
        var e = this;
        return this.persistence.runTransaction("Collect garbage", "readwrite-primary", (function(n) {
            return t.collect(n, e.Fn);
        }));
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A readonly view of the local state of all documents we're tracking (i.e. we
 * have a cached version in remoteDocumentCache or local mutations for the
 * document). The view is computed by applying the mutations in the
 * MutationQueue to the RemoteDocumentCache.
 */ function Mi(
/** Manages our in-memory or durable persistence. */
t, e, n, r) {
    return new Pi(t, e, n, r);
}

/**
 * Tells the LocalStore that the currently authenticated user has changed.
 *
 * In response the local store switches the mutation queue to the new user and
 * returns any resulting document changes.
 */
// PORTING NOTE: Android and iOS only return the documents affected by the
// change.
function Fi(t, e) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var n, r, i, o;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(s) {
            switch (s.label) {
              case 0:
                return n = O(t), r = n._n, i = n.Mn, [ 4 /*yield*/ , n.persistence.runTransaction("Handle user change", "readonly", (function(t) {
                    // Swap out the mutation queue, grabbing the pending mutation batches
                    // before and after.
                    var o;
                    return n._n.getAllMutationBatches(t).next((function(s) {
                        return o = s, r = n.persistence.getMutationQueue(e), 
                        // Recreate our LocalDocumentsView using the new
                        // MutationQueue.
                        i = new Ri(n.$n, r, n.persistence.getIndexManager()), r.getAllMutationBatches(t);
                    })).next((function(e) {
                        for (var n = [], r = [], s = en(), u = 0, a = o
                        // Union the old/new changed keys.
                        ; u < a.length; u++) {
                            var c = a[u];
                            n.push(c.batchId);
                            for (var h = 0, f = c.mutations; h < f.length; h++) {
                                var l = f[h];
                                s = s.add(l.key);
                            }
                        }
                        for (var d = 0, p = e; d < p.length; d++) {
                            var y = p[d];
                            r.push(y.batchId);
                            for (var v = 0, m = y.mutations; v < m.length; v++) {
                                var g = m[v];
                                s = s.add(g.key);
                            }
                        }
                        // Return the set of all (potentially) changed documents and the list
                        // of mutation batch IDs that were affected by change.
                                                return i.pn(t, s).next((function(t) {
                            return {
                                Ln: t,
                                removedBatchIds: n,
                                addedBatchIds: r
                            };
                        }));
                    }));
                })) ];

              case 1:
                return o = s.sent(), [ 2 /*return*/ , (n._n = r, n.Mn = i, n.xn.Vn(n.Mn), o) ];
            }
        }));
    }));
}

/* Accepts locally generated Mutations and commit them to storage. */
/**
 * Acknowledges the given batch.
 *
 * On the happy path when a batch is acknowledged, the local store will
 *
 *  + remove the batch from the mutation queue;
 *  + apply the changes to the remote document cache;
 *  + recalculate the latency compensated view implied by those changes (there
 *    may be mutations in the queue that affect the documents but haven't been
 *    acknowledged yet); and
 *  + give the changed documents back the sync engine
 *
 * @returns The resulting (modified) documents.
 */ function Vi(t, e) {
    var n = O(t);
    return n.persistence.runTransaction("Acknowledge batch", "readwrite-primary", (function(t) {
        var r = e.batch.keys(), i = n.$n.newChangeBuffer({
            trackRemovals: !0
        });
        return function(t, e, n, r) {
            var i = n.batch, o = i.keys(), s = mr.resolve();
            return o.forEach((function(t) {
                s = s.next((function() {
                    return r.getEntry(e, t);
                })).next((function(e) {
                    var o = n.docVersions.get(t);
                    R(null !== o), e.version.compareTo(o) < 0 && (i.applyToRemoteDocument(e, n), e.isValidDocument() && 
                    // We use the commitVersion as the readTime rather than the
                    // document's updateTime since the updateTime is not advanced
                    // for updates that do not modify the underlying document.
                    r.addEntry(e, n.commitVersion));
                }));
            })), s.next((function() {
                return t._n.removeMutationBatch(e, i);
            }));
        }(n, t, e, i).next((function() {
            return i.apply(t);
        })).next((function() {
            return n._n.performConsistencyCheck(t);
        })).next((function() {
            return n.Mn.pn(t, r);
        }));
    }));
}

/**
 * Removes mutations from the MutationQueue for the specified batch;
 * LocalDocuments will be recalculated.
 *
 * @returns The resulting modified documents.
 */
/**
 * Returns the last consistent snapshot processed (used by the RemoteStore to
 * determine whether to buffer incoming snapshots from the backend).
 */ function qi(t) {
    var e = O(t);
    return e.persistence.runTransaction("Get last remote snapshot version", "readonly", (function(t) {
        return e.qe.getLastRemoteSnapshotVersion(t);
    }));
}

/**
 * Updates the "ground-state" (remote) documents. We assume that the remote
 * event reflects any write batches that have been acknowledged or rejected
 * (i.e. we do not re-apply local mutations to updates from this event).
 *
 * LocalDocuments are re-calculated if there are remaining mutations in the
 * queue.
 */ function Ui(t, e) {
    var n = O(t), r = e.snapshotVersion, i = n.Fn;
    return n.persistence.runTransaction("Apply remote event", "readwrite-primary", (function(t) {
        var o = n.$n.newChangeBuffer({
            trackRemovals: !0
        });
        // Reset newTargetDataByTargetMap in case this transaction gets re-run.
                i = n.Fn;
        var s = [];
        e.targetChanges.forEach((function(e, o) {
            var u = i.get(o);
            if (u) {
                // Only update the remote keys if the target is still active. This
                // ensures that we can persist the updated target data along with
                // the updated assignment.
                s.push(n.qe.removeMatchingKeys(t, e.removedDocuments, o).next((function() {
                    return n.qe.addMatchingKeys(t, e.addedDocuments, o);
                })));
                var a = e.resumeToken;
                // Update the resume token if the change includes one.
                                if (a.approximateByteSize() > 0) {
                    var c = u.withResumeToken(a, r).withSequenceNumber(t.currentSequenceNumber);
                    i = i.insert(o, c), 
                    // Update the target data if there are target changes (or if
                    // sufficient time has passed since the last update).
                    /**
     * Returns true if the newTargetData should be persisted during an update of
     * an active target. TargetData should always be persisted when a target is
     * being released and should not call this function.
     *
     * While the target is active, TargetData updates can be omitted when nothing
     * about the target has changed except metadata like the resume token or
     * snapshot version. Occasionally it's worth the extra write to prevent these
     * values from getting too stale after a crash, but this doesn't have to be
     * too frequent.
     */
                    function(t, e, n) {
                        // Always persist target data if we don't already have a resume token.
                        return R(e.resumeToken.approximateByteSize() > 0), 0 === t.resumeToken.approximateByteSize() || (
                        // Don't allow resume token changes to be buffered indefinitely. This
                        // allows us to be reasonably up-to-date after a crash and avoids needing
                        // to loop over all active queries on shutdown. Especially in the browser
                        // we may not get time to do anything interesting while the current tab is
                        // closing.
                        e.snapshotVersion.toMicroseconds() - t.snapshotVersion.toMicroseconds() >= 3e8 || n.addedDocuments.size + n.modifiedDocuments.size + n.removedDocuments.size > 0);
                    }(u, c, e) && s.push(n.qe.updateTargetData(t, c));
                }
            }
        }));
        var u = Ye();
        // HACK: The only reason we allow a null snapshot version is so that we
        // can synthesize remote events when we get permission denied errors while
        // trying to resolve the state of a locally cached document that is in
        // limbo.
                if (e.documentUpdates.forEach((function(r, i) {
            e.resolvedLimboDocuments.has(r) && s.push(n.persistence.referenceDelegate.updateLimboDocument(t, r));
        })), 
        // Each loop iteration only affects its "own" doc, so it's safe to get all the remote
        // documents in advance in a single call.
        s.push(Bi(t, o, e.documentUpdates, r, void 0).next((function(t) {
            u = t;
        }))), !r.isEqual(U.min())) {
            var a = n.qe.getLastRemoteSnapshotVersion(t).next((function(e) {
                return n.qe.setTargetsMetadata(t, t.currentSequenceNumber, r);
            }));
            s.push(a);
        }
        return mr.waitFor(s).next((function() {
            return o.apply(t);
        })).next((function() {
            return n.Mn.En(t, u);
        })).next((function() {
            return u;
        }));
    })).then((function(t) {
        return n.Fn = i, t;
    }));
}

/**
 * Populates document change buffer with documents from backend or a bundle.
 * Returns the document changes resulting from applying those documents.
 *
 * @param txn - Transaction to use to read existing documents from storage.
 * @param documentBuffer - Document buffer to collect the resulted changes to be
 *        applied to storage.
 * @param documents - Documents to be applied.
 * @param globalVersion - A `SnapshotVersion` representing the read time if all
 *        documents have the same read time.
 * @param documentVersions - A DocumentKey-to-SnapshotVersion map if documents
 *        have their own read time.
 *
 * Note: this function will use `documentVersions` if it is defined;
 * when it is not defined, resorts to `globalVersion`.
 */ function Bi(t, e, n, r, 
// TODO(wuandy): We could add `readTime` to MaybeDocument instead to remove
// this parameter.
i) {
    var o = en();
    return n.forEach((function(t) {
        return o = o.add(t);
    })), e.getEntries(t, o).next((function(t) {
        var o = Ye();
        return n.forEach((function(n, s) {
            var u = t.get(n), a = (null == i ? void 0 : i.get(n)) || r;
            // Note: The order of the steps below is important, since we want
            // to ensure that rejected limbo resolutions (which fabricate
            // NoDocuments with SnapshotVersion.min()) never add documents to
            // cache.
                        s.isNoDocument() && s.version.isEqual(U.min()) ? (
            // NoDocuments with SnapshotVersion.min() are used in manufactured
            // events. We remove these documents from cache since we lost
            // access.
            e.removeEntry(n, a), o = o.insert(n, s)) : !u.isValidDocument() || s.version.compareTo(u.version) > 0 || 0 === s.version.compareTo(u.version) && u.hasPendingWrites ? (e.addEntry(s, a), 
            o = o.insert(n, s)) : D("LocalStore", "Ignoring outdated watch update for ", n, ". Current version:", u.version, " Watch version:", s.version);
        })), o;
    }))
    /**
 * Gets the mutation batch after the passed in batchId in the mutation queue
 * or null if empty.
 * @param afterBatchId - If provided, the batch to search after.
 * @returns The next mutation or null if there wasn't one.
 */;
}

function ji(t, e) {
    var n = O(t);
    return n.persistence.runTransaction("Get next mutation batch", "readonly", (function(t) {
        return void 0 === e && (e = -1), n._n.getNextMutationBatchAfterBatchId(t, e);
    }));
}

/**
 * Reads the current value of a Document with a given key or null if not
 * found - used for testing.
 */
/**
 * Assigns the given target an internal ID so that its results can be pinned so
 * they don't get GC'd. A target must be allocated in the local store before
 * the store can be used to manage its view.
 *
 * Allocating an already allocated `Target` will return the existing `TargetData`
 * for that `Target`.
 */ function Ki(t, e) {
    var n = O(t);
    return n.persistence.runTransaction("Allocate target", "readwrite", (function(t) {
        var r;
        return n.qe.getTargetData(t, e).next((function(i) {
            return i ? (
            // This target has been listened to previously, so reuse the
            // previous targetID.
            // TODO(mcg): freshen last accessed date?
            r = i, mr.resolve(r)) : n.qe.allocateTargetId(t).next((function(i) {
                return r = new Cr(e, i, 0 /* Listen */ , t.currentSequenceNumber), n.qe.addTargetData(t, r).next((function() {
                    return r;
                }));
            }));
        }));
    })).then((function(t) {
        // If Multi-Tab is enabled, the existing target data may be newer than
        // the in-memory data
        var r = n.Fn.get(t.targetId);
        return (null === r || t.snapshotVersion.compareTo(r.snapshotVersion) > 0) && (n.Fn = n.Fn.insert(t.targetId, t), 
        n.kn.set(e, t.targetId)), t;
    }));
}

/**
 * Returns the TargetData as seen by the LocalStore, including updates that may
 * have not yet been persisted to the TargetCache.
 */
// Visible for testing.
/**
 * Unpins all the documents associated with the given target. If
 * `keepPersistedTargetData` is set to false and Eager GC enabled, the method
 * directly removes the associated target data from the target cache.
 *
 * Releasing a non-existing `Target` is a no-op.
 */
// PORTING NOTE: `keepPersistedTargetData` is multi-tab only.
function Gi(t, e, n) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var r, i, o, s;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(u) {
            switch (u.label) {
              case 0:
                r = O(t), i = r.Fn.get(e), o = n ? "readwrite" : "readwrite-primary", u.label = 1;

              case 1:
                return u.trys.push([ 1, 4, , 5 ]), n ? [ 3 /*break*/ , 3 ] : [ 4 /*yield*/ , r.persistence.runTransaction("Release target", o, (function(t) {
                    return r.persistence.referenceDelegate.removeTarget(t, i);
                })) ];

              case 2:
                u.sent(), u.label = 3;

              case 3:
                return [ 3 /*break*/ , 5 ];

              case 4:
                if (!_r(s = u.sent())) throw s;
                // All `releaseTarget` does is record the final metadata state for the
                // target, but we've been recording this periodically during target
                // activity. If we lose this write this could cause a very slight
                // difference in the order of target deletion during GC, but we
                // don't define exact LRU semantics so this is acceptable.
                                return D("LocalStore", "Failed to update sequence numbers for target " + e + ": " + s), 
                [ 3 /*break*/ , 5 ];

              case 5:
                return r.Fn = r.Fn.remove(e), r.kn.delete(i.target), [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Runs the specified query against the local store and returns the results,
 * potentially taking advantage of query data from previous executions (such
 * as the set of remote keys).
 *
 * @param usePreviousResults - Whether results from previous executions can
 * be used to optimize this query execution.
 */ function zi(t, e, n) {
    var r = O(t), i = U.min(), o = en();
    return r.persistence.runTransaction("Execute query", "readonly", (function(t) {
        return function(t, e, n) {
            var r = O(t), i = r.kn.get(n);
            return void 0 !== i ? mr.resolve(r.Fn.get(i)) : r.qe.getTargetData(e, n);
        }(r, t, $t(e)).next((function(e) {
            if (e) return i = e.lastLimboFreeSnapshotVersion, r.qe.getMatchingKeysForTargetId(t, e.targetId).next((function(t) {
                o = t;
            }));
        })).next((function() {
            return r.xn.getDocumentsMatchingQuery(t, e, n ? i : U.min(), n ? o : en());
        })).next((function(t) {
            return {
                documents: t,
                Bn: o
            };
        }));
    }));
}

// PORTING NOTE: Multi-Tab only.
function Qi(t, e) {
    var n = O(t), r = O(n.qe), i = n.Fn.get(e);
    return i ? Promise.resolve(i.target) : n.persistence.runTransaction("Get target data", "readonly", (function(t) {
        return r.lt(t, e).next((function(t) {
            return t ? t.target : null;
        }));
    }));
}

/**
 * Returns the set of documents that have been updated since the last call.
 * If this is the first call, returns the set of changes since client
 * initialization. Further invocations will return document that have changed
 * since the prior call.
 */
// PORTING NOTE: Multi-Tab only.
function Wi(t) {
    var e = O(t);
    return e.persistence.runTransaction("Get new document changes", "readonly", (function(t) {
        return function(t, e, n) {
            var r = O(t), i = Ye(), o = Pr(n), s = _i(e), u = IDBKeyRange.lowerBound(o, !0);
            return s.Ot({
                index: ir.readTimeIndex,
                range: u
            }, (function(t, e) {
                // Unlike `getEntry()` and others, `getNewDocumentChanges()` parses
                // the documents directly since we want to keep sentinel deletes.
                var n = Or(r.R, e);
                i = i.insert(n.key, n), o = e.readTime;
            })).next((function() {
                return {
                    wn: i,
                    readTime: Mr(o)
                };
            }));
        }(e.$n, t, e.On);
    })).then((function(t) {
        var n = t.wn, r = t.readTime;
        return e.On = r, n;
    }));
}

/**
 * Reads the newest document change from persistence and moves the internal
 * synchronization marker forward so that calls to `getNewDocumentChanges()`
 * only return changes that happened after client initialization.
 */
// PORTING NOTE: Multi-Tab only.
function Hi(t) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var e;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(n) {
            return [ 2 /*return*/ , (e = O(t)).persistence.runTransaction("Synchronize last document change read time", "readonly", (function(t) {
                return function(t) {
                    var e = _i(t), n = U.min();
                    // If there are no existing entries, we return SnapshotVersion.min().
                                        return e.Ot({
                        index: ir.readTimeIndex,
                        reverse: !0
                    }, (function(t, e, r) {
                        e.readTime && (n = Mr(e.readTime)), r.done();
                    })).next((function() {
                        return n;
                    }));
                }(t);
            })).then((function(t) {
                e.On = t;
            })) ];
        }));
    }));
}

/**
 * Creates a new target using the given bundle name, which will be used to
 * hold the keys of all documents from the bundle in query-document mappings.
 * This ensures that the loaded documents do not get garbage collected
 * right away.
 */
/**
 * Applies the documents from a bundle to the "ground-state" (remote)
 * documents.
 *
 * LocalDocuments are re-calculated if there are remaining mutations in the
 * queue.
 */ function Yi(t, e, n, r) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var i, o, s, u, a, c, h, f, l, d;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(p) {
            switch (p.label) {
              case 0:
                for (i = O(t), o = en(), s = Ye(), u = Ze(), a = 0, c = n; a < c.length; a++) h = c[a], 
                f = e.qn(h.metadata.name), h.document && (o = o.add(f)), s = s.insert(f, e.Un(h)), 
                u = u.insert(f, e.Qn(h.metadata.readTime));
                return l = i.$n.newChangeBuffer({
                    trackRemovals: !0
                }), [ 4 /*yield*/ , Ki(i, function(t) {
                    // It is OK that the path used for the query is not valid, because this will
                    // not be read and queried.
                    return $t(zt(z.fromString("__bundle__/docs/" + t)));
                }(r)) ];

              case 1:
                // Allocates a target to hold all document keys from the bundle, such that
                // they will not get garbage collected right away.
                return d = p.sent(), [ 2 /*return*/ , i.persistence.runTransaction("Apply bundle documents", "readwrite", (function(t) {
                    return Bi(t, l, s, U.min(), u).next((function(e) {
                        return l.apply(t), e;
                    })).next((function(e) {
                        return i.qe.removeMatchingKeysForTargetId(t, d.targetId).next((function() {
                            return i.qe.addMatchingKeys(t, o, d.targetId);
                        })).next((function() {
                            return i.Mn.En(t, e);
                        })).next((function() {
                            return e;
                        }));
                    }));
                })) ];
            }
        }));
    }));
}

/**
 * Returns a promise of a boolean to indicate if the given bundle has already
 * been loaded and the create time is newer than the current loading bundle.
 */
/**
 * Saves the given `NamedQuery` to local persistence.
 */ function Xi(t, e, n) {
    return void 0 === n && (n = en()), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var r, i;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(o) {
            switch (o.label) {
              case 0:
                return [ 4 /*yield*/ , Ki(t, $t(jr(e.bundledQuery))) ];

              case 1:
                return r = o.sent(), [ 2 /*return*/ , (i = O(t)).persistence.runTransaction("Save named query", "readwrite", (function(t) {
                    var o = bn(e.readTime);
                    // Simply save the query itself if it is older than what the SDK already
                    // has.
                                        if (r.snapshotVersion.compareTo(o) >= 0) return i.Qe.saveNamedQuery(t, e);
                    // Update existing target data because the query from the bundle is newer.
                                        var s = r.withResumeToken(Y.EMPTY_BYTE_STRING, o);
                    return i.Fn = i.Fn.insert(s.targetId, s), i.qe.updateTargetData(t, s).next((function() {
                        return i.qe.removeMatchingKeysForTargetId(t, r.targetId);
                    })).next((function() {
                        return i.qe.addMatchingKeys(t, n, r.targetId);
                    })).next((function() {
                        return i.Qe.saveNamedQuery(t, e);
                    }));
                })) ];
            }
        }));
    }));
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Ji = /** @class */ function() {
    function t(t) {
        this.R = t, this.Kn = new Map, this.jn = new Map;
    }
    return t.prototype.getBundleMetadata = function(t, e) {
        return mr.resolve(this.Kn.get(e));
    }, t.prototype.saveBundleMetadata = function(t, e) {
        /** Decodes a BundleMetadata proto into a BundleMetadata object. */
        var n;
        return this.Kn.set(e.id, {
            id: (n = e).id,
            version: n.version,
            createTime: bn(n.createTime)
        }), mr.resolve();
    }, t.prototype.getNamedQuery = function(t, e) {
        return mr.resolve(this.jn.get(e));
    }, t.prototype.saveNamedQuery = function(t, e) {
        return this.jn.set(e.name, function(t) {
            return {
                name: t.name,
                query: jr(t.bundledQuery),
                readTime: bn(t.readTime)
            };
        }(e)), mr.resolve();
    }, t;
}(), $i = /** @class */ function() {
    function t() {
        // A set of outstanding references to a document sorted by key.
        this.Wn = new Qe(Zi.Gn), 
        // A set of outstanding references to a document sorted by target id.
        this.zn = new Qe(Zi.Hn)
        /** Returns true if the reference set contains no references. */;
    }
    return t.prototype.isEmpty = function() {
        return this.Wn.isEmpty();
    }, 
    /** Adds a reference to the given document key for the given ID. */ t.prototype.addReference = function(t, e) {
        var n = new Zi(t, e);
        this.Wn = this.Wn.add(n), this.zn = this.zn.add(n);
    }, 
    /** Add references to the given document keys for the given ID. */ t.prototype.Jn = function(t, e) {
        var n = this;
        t.forEach((function(t) {
            return n.addReference(t, e);
        }));
    }, 
    /**
     * Removes a reference to the given document key for the given
     * ID.
     */
    t.prototype.removeReference = function(t, e) {
        this.Yn(new Zi(t, e));
    }, t.prototype.Xn = function(t, e) {
        var n = this;
        t.forEach((function(t) {
            return n.removeReference(t, e);
        }));
    }, 
    /**
     * Clears all references with a given ID. Calls removeRef() for each key
     * removed.
     */
    t.prototype.Zn = function(t) {
        var e = this, n = new st(new z([])), r = new Zi(n, t), i = new Zi(n, t + 1), o = [];
        return this.zn.forEachInRange([ r, i ], (function(t) {
            e.Yn(t), o.push(t.key);
        })), o;
    }, t.prototype.ts = function() {
        var t = this;
        this.Wn.forEach((function(e) {
            return t.Yn(e);
        }));
    }, t.prototype.Yn = function(t) {
        this.Wn = this.Wn.delete(t), this.zn = this.zn.delete(t);
    }, t.prototype.es = function(t) {
        var e = new st(new z([])), n = new Zi(e, t), r = new Zi(e, t + 1), i = en();
        return this.zn.forEachInRange([ n, r ], (function(t) {
            i = i.add(t.key);
        })), i;
    }, t.prototype.containsKey = function(t) {
        var e = new Zi(t, 0), n = this.Wn.firstAfterOrEqual(e);
        return null !== n && t.isEqual(n.key);
    }, t;
}(), Zi = /** @class */ function() {
    function t(t, e) {
        this.key = t, this.ns = e
        /** Compare by key then by ID */;
    }
    return t.Gn = function(t, e) {
        return st.comparator(t.key, e.key) || M(t.ns, e.ns);
    }, 
    /** Compare by ID then by key */ t.Hn = function(t, e) {
        return M(t.ns, e.ns) || st.comparator(t.key, e.key);
    }, t;
}(), to = /** @class */ function() {
    function t(t, e) {
        this.Ut = t, this.referenceDelegate = e, 
        /**
             * The set of all mutations that have been sent but not yet been applied to
             * the backend.
             */
        this._n = [], 
        /** Next value to use when assigning sequential IDs to each mutation batch. */
        this.ss = 1, 
        /** An ordered mapping between documents and the mutations batch IDs. */
        this.rs = new Qe(Zi.Gn);
    }
    return t.prototype.checkEmpty = function(t) {
        return mr.resolve(0 === this._n.length);
    }, t.prototype.addMutationBatch = function(t, e, n, r) {
        var i = this.ss;
        this.ss++, this._n.length > 0 && this._n[this._n.length - 1];
        var o = new kr(i, e, n, r);
        this._n.push(o);
        // Track references by document key and index collection parents.
        for (var s = 0, u = r; s < u.length; s++) {
            var a = u[s];
            this.rs = this.rs.add(new Zi(a.key, i)), this.Ut.addToCollectionParentIndex(t, a.key.path.popLast());
        }
        return mr.resolve(o);
    }, t.prototype.lookupMutationBatch = function(t, e) {
        return mr.resolve(this.os(e));
    }, t.prototype.getNextMutationBatchAfterBatchId = function(t, e) {
        var n = e + 1, r = this.cs(n), i = r < 0 ? 0 : r;
        // The requested batchId may still be out of range so normalize it to the
        // start of the queue.
                return mr.resolve(this._n.length > i ? this._n[i] : null);
    }, t.prototype.getHighestUnacknowledgedBatchId = function() {
        return mr.resolve(0 === this._n.length ? -1 : this.ss - 1);
    }, t.prototype.getAllMutationBatches = function(t) {
        return mr.resolve(this._n.slice());
    }, t.prototype.getAllMutationBatchesAffectingDocumentKey = function(t, e) {
        var n = this, r = new Zi(e, 0), i = new Zi(e, Number.POSITIVE_INFINITY), o = [];
        return this.rs.forEachInRange([ r, i ], (function(t) {
            var e = n.os(t.ns);
            o.push(e);
        })), mr.resolve(o);
    }, t.prototype.getAllMutationBatchesAffectingDocumentKeys = function(t, e) {
        var n = this, r = new Qe(M);
        return e.forEach((function(t) {
            var e = new Zi(t, 0), i = new Zi(t, Number.POSITIVE_INFINITY);
            n.rs.forEachInRange([ e, i ], (function(t) {
                r = r.add(t.ns);
            }));
        })), mr.resolve(this.us(r));
    }, t.prototype.getAllMutationBatchesAffectingQuery = function(t, e) {
        // Use the query path as a prefix for testing if a document matches the
        // query.
        var n = e.path, r = n.length + 1, i = n;
        // Construct a document reference for actually scanning the index. Unlike
        // the prefix the document key in this reference must have an even number of
        // segments. The empty segment can be used a suffix of the query path
        // because it precedes all other segments in an ordered traversal.
                st.isDocumentKey(i) || (i = i.child(""));
        var o = new Zi(new st(i), 0), s = new Qe(M);
        // Find unique batchIDs referenced by all documents potentially matching the
        // query.
                return this.rs.forEachWhile((function(t) {
            var e = t.key.path;
            return !!n.isPrefixOf(e) && (
            // Rows with document keys more than one segment longer than the query
            // path can't be matches. For example, a query on 'rooms' can't match
            // the document /rooms/abc/messages/xyx.
            // TODO(mcg): we'll need a different scanner when we implement
            // ancestor queries.
            e.length === r && (s = s.add(t.ns)), !0);
        }), o), mr.resolve(this.us(s));
    }, t.prototype.us = function(t) {
        var e = this, n = [];
        // Construct an array of matching batches, sorted by batchID to ensure that
        // multiple mutations affecting the same document key are applied in order.
                return t.forEach((function(t) {
            var r = e.os(t);
            null !== r && n.push(r);
        })), n;
    }, t.prototype.removeMutationBatch = function(t, e) {
        var n = this;
        R(0 === this.hs(e.batchId, "removed")), this._n.shift();
        var r = this.rs;
        return mr.forEach(e.mutations, (function(i) {
            var o = new Zi(i.key, e.batchId);
            return r = r.delete(o), n.referenceDelegate.markPotentiallyOrphaned(t, i.key);
        })).next((function() {
            n.rs = r;
        }));
    }, t.prototype.Gt = function(t) {
        // No-op since the memory mutation queue does not maintain a separate cache.
    }, t.prototype.containsKey = function(t, e) {
        var n = new Zi(e, 0), r = this.rs.firstAfterOrEqual(n);
        return mr.resolve(e.isEqual(r && r.key));
    }, t.prototype.performConsistencyCheck = function(t) {
        return this._n.length, mr.resolve();
    }, 
    /**
     * Finds the index of the given batchId in the mutation queue and asserts that
     * the resulting index is within the bounds of the queue.
     *
     * @param batchId - The batchId to search for
     * @param action - A description of what the caller is doing, phrased in passive
     * form (e.g. "acknowledged" in a routine that acknowledges batches).
     */
    t.prototype.hs = function(t, e) {
        return this.cs(t);
    }, 
    /**
     * Finds the index of the given batchId in the mutation queue. This operation
     * is O(1).
     *
     * @returns The computed index of the batch with the given batchId, based on
     * the state of the queue. Note this index can be negative if the requested
     * batchId has already been remvoed from the queue or past the end of the
     * queue if the batchId is larger than the last added batch.
     */
    t.prototype.cs = function(t) {
        return 0 === this._n.length ? 0 : t - this._n[0].batchId;
        // Examine the front of the queue to figure out the difference between the
        // batchId and indexes in the array. Note that since the queue is ordered
        // by batchId, if the first batch has a larger batchId then the requested
        // batchId doesn't exist in the queue.
        }, 
    /**
     * A version of lookupMutationBatch that doesn't return a promise, this makes
     * other functions that uses this code easier to read and more efficent.
     */
    t.prototype.os = function(t) {
        var e = this.cs(t);
        return e < 0 || e >= this._n.length ? null : this._n[e];
    }, t;
}(), eo = /** @class */ function() {
    /**
     * @param sizer - Used to assess the size of a document. For eager GC, this is
     * expected to just return 0 to avoid unnecessarily doing the work of
     * calculating the size.
     */
    function t(t, e) {
        this.Ut = t, this.ls = e, 
        /** Underlying cache of documents and their read times. */
        this.docs = new Ke(st.comparator), 
        /** Size of all cached documents. */
        this.size = 0
        /**
     * Adds the supplied entry to the cache and updates the cache size as appropriate.
     *
     * All calls of `addEntry`  are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */;
    }
    return t.prototype.addEntry = function(t, e, n) {
        var r = e.key, i = this.docs.get(r), o = i ? i.size : 0, s = this.ls(e);
        return this.docs = this.docs.insert(r, {
            document: e.clone(),
            size: s,
            readTime: n
        }), this.size += s - o, this.Ut.addToCollectionParentIndex(t, r.path.popLast());
    }, 
    /**
     * Removes the specified entry from the cache and updates the cache size as appropriate.
     *
     * All calls of `removeEntry` are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */
    t.prototype.removeEntry = function(t) {
        var e = this.docs.get(t);
        e && (this.docs = this.docs.remove(t), this.size -= e.size);
    }, t.prototype.getEntry = function(t, e) {
        var n = this.docs.get(e);
        return mr.resolve(n ? n.document.clone() : _t.newInvalidDocument(e));
    }, t.prototype.getEntries = function(t, e) {
        var n = this, r = Ye();
        return e.forEach((function(t) {
            var e = n.docs.get(t);
            r = r.insert(t, e ? e.document.clone() : _t.newInvalidDocument(t));
        })), mr.resolve(r);
    }, t.prototype.getDocumentsMatchingQuery = function(t, e, n) {
        for (var r = Ye(), i = new st(e.path.child("")), o = this.docs.getIteratorFrom(i)
        // Documents are ordered by key, so we can use a prefix scan to narrow down
        // the documents we need to match the query against.
        ; o.hasNext(); ) {
            var s = o.getNext(), u = s.key, a = s.value, c = a.document, h = a.readTime;
            if (!e.path.isPrefixOf(u.path)) break;
            h.compareTo(n) <= 0 || re(e, c) && (r = r.insert(c.key, c.clone()));
        }
        return mr.resolve(r);
    }, t.prototype.fs = function(t, e) {
        return mr.forEach(this.docs, (function(t) {
            return e(t);
        }));
    }, t.prototype.newChangeBuffer = function(t) {
        // `trackRemovals` is ignores since the MemoryRemoteDocumentCache keeps
        // a separate changelog and does not need special handling for removals.
        return new no(this);
    }, t.prototype.getSize = function(t) {
        return mr.resolve(this.size);
    }, t;
}(), no = /** @class */ function(t) {
    function e(e) {
        var n = this;
        return (n = t.call(this) || this).Ie = e, n;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.applyChanges = function(t) {
        var e = this, n = [];
        return this.changes.forEach((function(r, i) {
            i.document.isValidDocument() ? n.push(e.Ie.addEntry(t, i.document, e.getReadTime(r))) : e.Ie.removeEntry(r);
        })), mr.waitFor(n);
    }, e.prototype.getFromCache = function(t, e) {
        return this.Ie.getEntry(t, e);
    }, e.prototype.getAllFromCache = function(t, e) {
        return this.Ie.getEntries(t, e);
    }, e;
}(gi), ro = /** @class */ function() {
    function t(t) {
        this.persistence = t, 
        /**
             * Maps a target to the data about that target
             */
        this.ds = new mi((function(t) {
            return St(t);
        }), Nt), 
        /** The last received snapshot version. */
        this.lastRemoteSnapshotVersion = U.min(), 
        /** The highest numbered target ID encountered. */
        this.highestTargetId = 0, 
        /** The highest sequence number encountered. */
        this.ws = 0, 
        /**
             * A ordered bidirectional mapping between documents and the remote target
             * IDs.
             */
        this._s = new $i, this.targetCount = 0, this.ys = oi.Jt();
    }
    return t.prototype.forEachTarget = function(t, e) {
        return this.ds.forEach((function(t, n) {
            return e(n);
        })), mr.resolve();
    }, t.prototype.getLastRemoteSnapshotVersion = function(t) {
        return mr.resolve(this.lastRemoteSnapshotVersion);
    }, t.prototype.getHighestSequenceNumber = function(t) {
        return mr.resolve(this.ws);
    }, t.prototype.allocateTargetId = function(t) {
        return this.highestTargetId = this.ys.next(), mr.resolve(this.highestTargetId);
    }, t.prototype.setTargetsMetadata = function(t, e, n) {
        return n && (this.lastRemoteSnapshotVersion = n), e > this.ws && (this.ws = e), 
        mr.resolve();
    }, t.prototype.te = function(t) {
        this.ds.set(t.target, t);
        var e = t.targetId;
        e > this.highestTargetId && (this.ys = new oi(e), this.highestTargetId = e), t.sequenceNumber > this.ws && (this.ws = t.sequenceNumber);
    }, t.prototype.addTargetData = function(t, e) {
        return this.te(e), this.targetCount += 1, mr.resolve();
    }, t.prototype.updateTargetData = function(t, e) {
        return this.te(e), mr.resolve();
    }, t.prototype.removeTargetData = function(t, e) {
        return this.ds.delete(e.target), this._s.Zn(e.targetId), this.targetCount -= 1, 
        mr.resolve();
    }, t.prototype.removeTargets = function(t, e, n) {
        var r = this, i = 0, o = [];
        return this.ds.forEach((function(s, u) {
            u.sequenceNumber <= e && null === n.get(u.targetId) && (r.ds.delete(s), o.push(r.removeMatchingKeysForTargetId(t, u.targetId)), 
            i++);
        })), mr.waitFor(o).next((function() {
            return i;
        }));
    }, t.prototype.getTargetCount = function(t) {
        return mr.resolve(this.targetCount);
    }, t.prototype.getTargetData = function(t, e) {
        var n = this.ds.get(e) || null;
        return mr.resolve(n);
    }, t.prototype.addMatchingKeys = function(t, e, n) {
        return this._s.Jn(e, n), mr.resolve();
    }, t.prototype.removeMatchingKeys = function(t, e, n) {
        this._s.Xn(e, n);
        var r = this.persistence.referenceDelegate, i = [];
        return r && e.forEach((function(e) {
            i.push(r.markPotentiallyOrphaned(t, e));
        })), mr.waitFor(i);
    }, t.prototype.removeMatchingKeysForTargetId = function(t, e) {
        return this._s.Zn(e), mr.resolve();
    }, t.prototype.getMatchingKeysForTargetId = function(t, e) {
        var n = this._s.es(e);
        return mr.resolve(n);
    }, t.prototype.containsKey = function(t, e) {
        return mr.resolve(this._s.containsKey(e));
    }, t;
}(), io = /** @class */ function() {
    /**
     * The constructor accepts a factory for creating a reference delegate. This
     * allows both the delegate and this instance to have strong references to
     * each other without having nullable fields that would then need to be
     * checked or asserted on every access.
     */
    function t(t, e) {
        var n = this;
        this.gs = {}, this.Ne = new _(0), this.xe = !1, this.xe = !0, this.referenceDelegate = t(this), 
        this.qe = new ro(this), this.Ut = new Qr, this.Ue = function(t, e) {
            return new eo(t, (function(t) {
                return n.referenceDelegate.ps(t);
            }));
        }(this.Ut), this.R = new Rr(e), this.Qe = new Ji(this.R);
    }
    return t.prototype.start = function() {
        return Promise.resolve();
    }, t.prototype.shutdown = function() {
        // No durable state to ensure is closed on shutdown.
        return this.xe = !1, Promise.resolve();
    }, Object.defineProperty(t.prototype, "started", {
        get: function() {
            return this.xe;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.setDatabaseDeletedListener = function() {
        // No op.
    }, t.prototype.setNetworkEnabled = function() {
        // No op.
    }, t.prototype.getIndexManager = function() {
        return this.Ut;
    }, t.prototype.getMutationQueue = function(t) {
        var e = this.gs[t.toKey()];
        return e || (e = new to(this.Ut, this.referenceDelegate), this.gs[t.toKey()] = e), 
        e;
    }, t.prototype.getTargetCache = function() {
        return this.qe;
    }, t.prototype.getRemoteDocumentCache = function() {
        return this.Ue;
    }, t.prototype.getBundleCache = function() {
        return this.Qe;
    }, t.prototype.runTransaction = function(t, e, n) {
        var r = this;
        D("MemoryPersistence", "Starting transaction:", t);
        var i = new oo(this.Ne.next());
        return this.referenceDelegate.Es(), n(i).next((function(t) {
            return r.referenceDelegate.Ts(i).next((function() {
                return t;
            }));
        })).toPromise().then((function(t) {
            return i.raiseOnCommittedEvent(), t;
        }));
    }, t.prototype.Is = function(t, e) {
        return mr.or(Object.values(this.gs).map((function(n) {
            return function() {
                return n.containsKey(t, e);
            };
        })));
    }, t;
}(), oo = /** @class */ function(t) {
    function e(e) {
        var n = this;
        return (n = t.call(this) || this).currentSequenceNumber = e, n;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e;
}(yr), so = /** @class */ function() {
    function t(t) {
        this.persistence = t, 
        /** Tracks all documents that are active in Query views. */
        this.As = new $i, 
        /** The list of documents that are potentially GCed after each transaction. */
        this.Rs = null;
    }
    return t.bs = function(e) {
        return new t(e);
    }, Object.defineProperty(t.prototype, "vs", {
        get: function() {
            if (this.Rs) return this.Rs;
            throw C();
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.addReference = function(t, e, n) {
        return this.As.addReference(n, e), this.vs.delete(n.toString()), mr.resolve();
    }, t.prototype.removeReference = function(t, e, n) {
        return this.As.removeReference(n, e), this.vs.add(n.toString()), mr.resolve();
    }, t.prototype.markPotentiallyOrphaned = function(t, e) {
        return this.vs.add(e.toString()), mr.resolve();
    }, t.prototype.removeTarget = function(t, e) {
        var n = this;
        this.As.Zn(e.targetId).forEach((function(t) {
            return n.vs.add(t.toString());
        }));
        var r = this.persistence.getTargetCache();
        return r.getMatchingKeysForTargetId(t, e.targetId).next((function(t) {
            t.forEach((function(t) {
                return n.vs.add(t.toString());
            }));
        })).next((function() {
            return r.removeTargetData(t, e);
        }));
    }, t.prototype.Es = function() {
        this.Rs = new Set;
    }, t.prototype.Ts = function(t) {
        var e = this, n = this.persistence.getRemoteDocumentCache().newChangeBuffer();
        // Remove newly orphaned documents.
                return mr.forEach(this.vs, (function(r) {
            var i = st.fromPath(r);
            return e.Ps(t, i).next((function(t) {
                t || n.removeEntry(i);
            }));
        })).next((function() {
            return e.Rs = null, n.apply(t);
        }));
    }, t.prototype.updateLimboDocument = function(t, e) {
        var n = this;
        return this.Ps(t, e).next((function(t) {
            t ? n.vs.delete(e.toString()) : n.vs.add(e.toString());
        }));
    }, t.prototype.ps = function(t) {
        // For eager GC, we don't care about the document size, there are no size thresholds.
        return 0;
    }, t.prototype.Ps = function(t, e) {
        var n = this;
        return mr.or([ function() {
            return mr.resolve(n.As.containsKey(e));
        }, function() {
            return n.persistence.getTargetCache().containsKey(t, e);
        }, function() {
            return n.persistence.Is(t, e);
        } ]);
    }, t;
}(), uo = /** @class */ function() {
    function t(t) {
        this.uid = t;
    }
    return t.prototype.isAuthenticated = function() {
        return null != this.uid;
    }, 
    /**
     * Returns a key representing this user, suitable for inclusion in a
     * dictionary.
     */
    t.prototype.toKey = function() {
        return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
    }, t.prototype.isEqual = function(t) {
        return t.uid === this.uid;
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A collection of references to a document from some kind of numbered entity
 * (either a target ID or batch ID). As references are added to or removed from
 * the set corresponding events are emitted to a registered garbage collector.
 *
 * Each reference is represented by a DocumentReference object. Each of them
 * contains enough information to uniquely identify the reference. They are all
 * stored primarily in a set sorted by key. A document is considered garbage if
 * there's no references in that set (this can be efficiently checked thanks to
 * sorting by key).
 *
 * ReferenceSet also keeps a secondary set that contains references sorted by
 * IDs. This one is used to efficiently implement removal of all references by
 * some target ID.
 */
/** Assembles the key for a client state in WebStorage */
function ao(t, e) {
    return "firestore_clients_" + t + "_" + e;
}

// The format of the WebStorage key that stores the mutation state is:
//     firestore_mutations_<persistence_prefix>_<batch_id>
//     (for unauthenticated users)
// or: firestore_mutations_<persistence_prefix>_<batch_id>_<user_uid>
// 'user_uid' is last to avoid needing to escape '_' characters that it might
// contain.
/** Assembles the key for a mutation batch in WebStorage */ function co(t, e, n) {
    var r = "firestore_mutations_" + t + "_" + n;
    return e.isAuthenticated() && (r += "_" + e.uid), r;
}

// The format of the WebStorage key that stores a query target's metadata is:
//     firestore_targets_<persistence_prefix>_<target_id>
/** Assembles the key for a query state in WebStorage */ function ho(t, e) {
    return "firestore_targets_" + t + "_" + e;
}

// The WebStorage prefix that stores the primary tab's online state. The
// format of the key is:
//     firestore_online_state_<persistence_prefix>
/**
 * Holds the state of a mutation batch, including its user ID, batch ID and
 * whether the batch is 'pending', 'acknowledged' or 'rejected'.
 */
// Visible for testing
/** A user with a null UID. */ uo.UNAUTHENTICATED = new uo(null), 
// TODO(mikelehen): Look into getting a proper uid-equivalent for
// non-FirebaseAuth providers.
uo.GOOGLE_CREDENTIALS = new uo("google-credentials-uid"), uo.FIRST_PARTY = new uo("first-party-uid");

var fo = /** @class */ function() {
    function t(t, e, n, r) {
        this.user = t, this.batchId = e, this.state = n, this.error = r
        /**
     * Parses a MutationMetadata from its JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */;
    }
    return t.Vs = function(e, n, r) {
        var i, o = JSON.parse(r), s = "object" == typeof o && -1 !== [ "pending", "acknowledged", "rejected" ].indexOf(o.state) && (void 0 === o.error || "object" == typeof o.error);
        return s && o.error && ((s = "string" == typeof o.error.message && "string" == typeof o.error.code) && (i = new T(o.error.code, o.error.message))), 
        s ? new t(e, n, o.state, i) : (A("SharedClientState", "Failed to parse mutation state for ID '" + n + "': " + r), 
        null);
    }, t.prototype.Ss = function() {
        var t = {
            state: this.state,
            updateTimeMs: Date.now()
        };
        return this.error && (t.error = {
            code: this.error.code,
            message: this.error.message
        }), JSON.stringify(t);
    }, t;
}(), lo = /** @class */ function() {
    function t(t, e, n) {
        this.targetId = t, this.state = e, this.error = n
        /**
     * Parses a QueryTargetMetadata from its JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */;
    }
    return t.Vs = function(e, n) {
        var r, i = JSON.parse(n), o = "object" == typeof i && -1 !== [ "not-current", "current", "rejected" ].indexOf(i.state) && (void 0 === i.error || "object" == typeof i.error);
        return o && i.error && ((o = "string" == typeof i.error.message && "string" == typeof i.error.code) && (r = new T(i.error.code, i.error.message))), 
        o ? new t(e, i.state, r) : (A("SharedClientState", "Failed to parse target state for ID '" + e + "': " + n), 
        null);
    }, t.prototype.Ss = function() {
        var t = {
            state: this.state,
            updateTimeMs: Date.now()
        };
        return this.error && (t.error = {
            code: this.error.code,
            message: this.error.message
        }), JSON.stringify(t);
    }, t;
}(), po = /** @class */ function() {
    function t(t, e) {
        this.clientId = t, this.activeTargetIds = e
        /**
     * Parses a RemoteClientState from the JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */;
    }
    return t.Vs = function(e, n) {
        for (var r = JSON.parse(n), i = "object" == typeof r && r.activeTargetIds instanceof Array, o = rn(), s = 0; i && s < r.activeTargetIds.length; ++s) i = ot(r.activeTargetIds[s]), 
        o = o.add(r.activeTargetIds[s]);
        return i ? new t(e, o) : (A("SharedClientState", "Failed to parse client data for instance '" + e + "': " + n), 
        null);
    }, t;
}(), yo = /** @class */ function() {
    function t(t, e) {
        this.clientId = t, this.onlineState = e
        /**
     * Parses a SharedOnlineState from its JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */;
    }
    return t.Vs = function(e) {
        var n = JSON.parse(e);
        return "object" == typeof n && -1 !== [ "Unknown", "Online", "Offline" ].indexOf(n.onlineState) && "string" == typeof n.clientId ? new t(n.clientId, n.onlineState) : (A("SharedClientState", "Failed to parse online state: " + e), 
        null);
    }, t;
}(), vo = /** @class */ function() {
    function t() {
        this.activeTargetIds = rn();
    }
    return t.prototype.Ds = function(t) {
        this.activeTargetIds = this.activeTargetIds.add(t);
    }, t.prototype.Cs = function(t) {
        this.activeTargetIds = this.activeTargetIds.delete(t);
    }, 
    /**
     * Converts this entry into a JSON-encoded format we can use for WebStorage.
     * Does not encode `clientId` as it is part of the key in WebStorage.
     */
    t.prototype.Ss = function() {
        var t = {
            activeTargetIds: this.activeTargetIds.toArray(),
            updateTimeMs: Date.now()
        };
        return JSON.stringify(t);
    }, t;
}(), mo = /** @class */ function() {
    function t(t, e, n, r, i) {
        this.window = t, this.Se = e, this.persistenceKey = n, this.Ns = r, this.syncEngine = null, 
        this.onlineStateHandler = null, this.sequenceNumberHandler = null, this.xs = this.Fs.bind(this), 
        this.ks = new Ke(M), this.started = !1, 
        /**
             * Captures WebStorage events that occur before `start()` is called. These
             * events are replayed once `WebStorageSharedClientState` is started.
             */
        this.Os = [];
        // Escape the special characters mentioned here:
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
        var o = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        this.storage = this.window.localStorage, this.currentUser = i, this.$s = ao(this.persistenceKey, this.Ns), 
        this.Ms = 
        /** Assembles the key for the current sequence number. */
        function(t) {
            return "firestore_sequence_number_" + t;
        }(this.persistenceKey), this.ks = this.ks.insert(this.Ns, new vo), this.Ls = new RegExp("^firestore_clients_" + o + "_([^_]*)$"), 
        this.Bs = new RegExp("^firestore_mutations_" + o + "_(\\d+)(?:_(.*))?$"), this.qs = new RegExp("^firestore_targets_" + o + "_(\\d+)$"), 
        this.Us = 
        /** Assembles the key for the online state of the primary tab. */
        function(t) {
            return "firestore_online_state_" + t;
        }(this.persistenceKey), this.Qs = function(t) {
            return "firestore_bundle_loaded_" + t;
        }(this.persistenceKey), 
        // Rather than adding the storage observer during start(), we add the
        // storage observer during initialization. This ensures that we collect
        // events before other components populate their initial state (during their
        // respective start() calls). Otherwise, we might for example miss a
        // mutation that is added after LocalStore's start() processed the existing
        // mutations but before we observe WebStorage events.
        this.window.addEventListener("storage", this.xs);
    }
    /** Returns 'true' if WebStorage is available in the current environment. */    return t.yt = function(t) {
        return !(!t || !t.localStorage);
    }, t.prototype.start = function() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
            var t, e, n, r, i, o, s, u, a, c, h, f = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(l) {
                switch (l.label) {
                  case 0:
                    return [ 4 /*yield*/ , this.syncEngine.fn() ];

                  case 1:
                    for (t = l.sent(), e = 0, n = t; e < n.length; e++) (r = n[e]) !== this.Ns && (i = this.getItem(ao(this.persistenceKey, r))) && (o = po.Vs(r, i)) && (this.ks = this.ks.insert(o.clientId, o));
                    for (this.Ks(), (s = this.storage.getItem(this.Us)) && (u = this.js(s)) && this.Ws(u), 
                    a = 0, c = this.Os; a < c.length; a++) h = c[a], this.Fs(h);
                    return this.Os = [], 
                    // Register a window unload hook to remove the client metadata entry from
                    // WebStorage even if `shutdown()` was not called.
                    this.window.addEventListener("unload", (function() {
                        return f.shutdown();
                    })), this.started = !0, [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.writeSequenceNumber = function(t) {
        this.setItem(this.Ms, JSON.stringify(t));
    }, t.prototype.getAllActiveQueryTargets = function() {
        return this.Gs(this.ks);
    }, t.prototype.isActiveQueryTarget = function(t) {
        var e = !1;
        return this.ks.forEach((function(n, r) {
            r.activeTargetIds.has(t) && (e = !0);
        })), e;
    }, t.prototype.addPendingMutation = function(t) {
        this.zs(t, "pending");
    }, t.prototype.updateMutationState = function(t, e, n) {
        this.zs(t, e, n), 
        // Once a final mutation result is observed by other clients, they no longer
        // access the mutation's metadata entry. Since WebStorage replays events
        // in order, it is safe to delete the entry right after updating it.
        this.Hs(t);
    }, t.prototype.addLocalQueryTarget = function(t) {
        var e = "not-current";
        // Lookup an existing query state if the target ID was already registered
        // by another tab
                if (this.isActiveQueryTarget(t)) {
            var n = this.storage.getItem(ho(this.persistenceKey, t));
            if (n) {
                var r = lo.Vs(t, n);
                r && (e = r.state);
            }
        }
        return this.Js.Ds(t), this.Ks(), e;
    }, t.prototype.removeLocalQueryTarget = function(t) {
        this.Js.Cs(t), this.Ks();
    }, t.prototype.isLocalQueryTarget = function(t) {
        return this.Js.activeTargetIds.has(t);
    }, t.prototype.clearQueryState = function(t) {
        this.removeItem(ho(this.persistenceKey, t));
    }, t.prototype.updateQueryState = function(t, e, n) {
        this.Ys(t, e, n);
    }, t.prototype.handleUserChange = function(t, e, n) {
        var r = this;
        e.forEach((function(t) {
            r.Hs(t);
        })), this.currentUser = t, n.forEach((function(t) {
            r.addPendingMutation(t);
        }));
    }, t.prototype.setOnlineState = function(t) {
        this.Xs(t);
    }, t.prototype.notifyBundleLoaded = function() {
        this.Zs();
    }, t.prototype.shutdown = function() {
        this.started && (this.window.removeEventListener("storage", this.xs), this.removeItem(this.$s), 
        this.started = !1);
    }, t.prototype.getItem = function(t) {
        var e = this.storage.getItem(t);
        return D("SharedClientState", "READ", t, e), e;
    }, t.prototype.setItem = function(t, e) {
        D("SharedClientState", "SET", t, e), this.storage.setItem(t, e);
    }, t.prototype.removeItem = function(t) {
        D("SharedClientState", "REMOVE", t), this.storage.removeItem(t);
    }, t.prototype.Fs = function(t) {
        var e = this, n = t;
        // Note: The function is typed to take Event to be interface-compatible with
        // `Window.addEventListener`.
                if (n.storageArea === this.storage) {
            if (D("SharedClientState", "EVENT", n.key, n.newValue), n.key === this.$s) return void A("Received WebStorage notification for local change. Another client might have garbage-collected our state");
            this.Se.enqueueRetryable((function() {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(e, void 0, void 0, (function() {
                    var t, e, r, i, o, s;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(u) {
                        if (this.started) {
                            if (null !== n.key) if (this.Ls.test(n.key)) {
                                if (null == n.newValue) return t = this.ti(n.key), [ 2 /*return*/ , this.ei(t, null) ];
                                if (e = this.ni(n.key, n.newValue)) return [ 2 /*return*/ , this.ei(e.clientId, e) ];
                            } else if (this.Bs.test(n.key)) {
                                if (null !== n.newValue && (r = this.si(n.key, n.newValue))) return [ 2 /*return*/ , this.ii(r) ];
                            } else if (this.qs.test(n.key)) {
                                if (null !== n.newValue && (i = this.ri(n.key, n.newValue))) return [ 2 /*return*/ , this.oi(i) ];
                            } else if (n.key === this.Us) {
                                if (null !== n.newValue && (o = this.js(n.newValue))) return [ 2 /*return*/ , this.Ws(o) ];
                            } else if (n.key === this.Ms) (s = function(t) {
                                var e = _.o;
                                if (null != t) try {
                                    var n = JSON.parse(t);
                                    R("number" == typeof n), e = n;
                                } catch (t) {
                                    A("SharedClientState", "Failed to read sequence number from WebStorage", t);
                                }
                                return e;
                            }(n.newValue)) !== _.o && this.sequenceNumberHandler(s); else if (n.key === this.Qs) return [ 2 /*return*/ , this.syncEngine.ci() ];
                        } else this.Os.push(n);
                        return [ 2 /*return*/ ];
                    }));
                }));
            }));
        }
    }, Object.defineProperty(t.prototype, "Js", {
        get: function() {
            return this.ks.get(this.Ns);
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.Ks = function() {
        this.setItem(this.$s, this.Js.Ss());
    }, t.prototype.zs = function(t, e, n) {
        var r = new fo(this.currentUser, t, e, n), i = co(this.persistenceKey, this.currentUser, t);
        this.setItem(i, r.Ss());
    }, t.prototype.Hs = function(t) {
        var e = co(this.persistenceKey, this.currentUser, t);
        this.removeItem(e);
    }, t.prototype.Xs = function(t) {
        var e = {
            clientId: this.Ns,
            onlineState: t
        };
        this.storage.setItem(this.Us, JSON.stringify(e));
    }, t.prototype.Ys = function(t, e, n) {
        var r = ho(this.persistenceKey, t), i = new lo(t, e, n);
        this.setItem(r, i.Ss());
    }, t.prototype.Zs = function() {
        this.setItem(this.Qs, "value-not-used");
    }, 
    /**
     * Parses a client state key in WebStorage. Returns null if the key does not
     * match the expected key format.
     */
    t.prototype.ti = function(t) {
        var e = this.Ls.exec(t);
        return e ? e[1] : null;
    }, 
    /**
     * Parses a client state in WebStorage. Returns 'null' if the value could not
     * be parsed.
     */
    t.prototype.ni = function(t, e) {
        var n = this.ti(t);
        return po.Vs(n, e);
    }, 
    /**
     * Parses a mutation batch state in WebStorage. Returns 'null' if the value
     * could not be parsed.
     */
    t.prototype.si = function(t, e) {
        var n = this.Bs.exec(t), r = Number(n[1]), i = void 0 !== n[2] ? n[2] : null;
        return fo.Vs(new uo(i), r, e);
    }, 
    /**
     * Parses a query target state from WebStorage. Returns 'null' if the value
     * could not be parsed.
     */
    t.prototype.ri = function(t, e) {
        var n = this.qs.exec(t), r = Number(n[1]);
        return lo.Vs(r, e);
    }, 
    /**
     * Parses an online state from WebStorage. Returns 'null' if the value
     * could not be parsed.
     */
    t.prototype.js = function(t) {
        return yo.Vs(t);
    }, t.prototype.ii = function(t) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(e) {
                return t.user.uid === this.currentUser.uid ? [ 2 /*return*/ , this.syncEngine.ui(t.batchId, t.state, t.error) ] : (D("SharedClientState", "Ignoring mutation for non-active user " + t.user.uid), 
                [ 2 /*return*/ ]);
            }));
        }));
    }, t.prototype.oi = function(t) {
        return this.syncEngine.ai(t.targetId, t.state, t.error);
    }, t.prototype.ei = function(t, e) {
        var n = this, r = e ? this.ks.insert(t, e) : this.ks.remove(t), i = this.Gs(this.ks), o = this.Gs(r), s = [], u = [];
        return o.forEach((function(t) {
            i.has(t) || s.push(t);
        })), i.forEach((function(t) {
            o.has(t) || u.push(t);
        })), this.syncEngine.hi(s, u).then((function() {
            n.ks = r;
        }));
    }, t.prototype.Ws = function(t) {
        // We check whether the client that wrote this online state is still active
        // by comparing its client ID to the list of clients kept active in
        // IndexedDb. If a client does not update their IndexedDb client state
        // within 5 seconds, it is considered inactive and we don't emit an online
        // state event.
        this.ks.get(t.clientId) && this.onlineStateHandler(t.onlineState);
    }, t.prototype.Gs = function(t) {
        var e = rn();
        return t.forEach((function(t, n) {
            e = e.unionWith(n.activeTargetIds);
        })), e;
    }, t;
}(), go = /** @class */ function() {
    function t() {
        this.li = new vo, this.fi = {}, this.onlineStateHandler = null, this.sequenceNumberHandler = null;
    }
    return t.prototype.addPendingMutation = function(t) {
        // No op.
    }, t.prototype.updateMutationState = function(t, e, n) {
        // No op.
    }, t.prototype.addLocalQueryTarget = function(t) {
        return this.li.Ds(t), this.fi[t] || "not-current";
    }, t.prototype.updateQueryState = function(t, e, n) {
        this.fi[t] = e;
    }, t.prototype.removeLocalQueryTarget = function(t) {
        this.li.Cs(t);
    }, t.prototype.isLocalQueryTarget = function(t) {
        return this.li.activeTargetIds.has(t);
    }, t.prototype.clearQueryState = function(t) {
        delete this.fi[t];
    }, t.prototype.getAllActiveQueryTargets = function() {
        return this.li.activeTargetIds;
    }, t.prototype.isActiveQueryTarget = function(t) {
        return this.li.activeTargetIds.has(t);
    }, t.prototype.start = function() {
        return this.li = new vo, Promise.resolve();
    }, t.prototype.handleUserChange = function(t, e, n) {
        // No op.
    }, t.prototype.setOnlineState = function(t) {
        // No op.
    }, t.prototype.shutdown = function() {}, t.prototype.writeSequenceNumber = function(t) {}, 
    t.prototype.notifyBundleLoaded = function() {
        // No op.
    }, t;
}(), wo = /** @class */ function() {
    function t() {}
    return t.prototype.di = function(t) {
        // No-op.
    }, t.prototype.shutdown = function() {
        // No-op.
    }, t;
}(), bo = /** @class */ function() {
    function t() {
        var t = this;
        this.wi = function() {
            return t._i();
        }, this.mi = function() {
            return t.yi();
        }, this.gi = [], this.pi();
    }
    return t.prototype.di = function(t) {
        this.gi.push(t);
    }, t.prototype.shutdown = function() {
        window.removeEventListener("online", this.wi), window.removeEventListener("offline", this.mi);
    }, t.prototype.pi = function() {
        window.addEventListener("online", this.wi), window.addEventListener("offline", this.mi);
    }, t.prototype._i = function() {
        D("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
        for (var t = 0, e = this.gi; t < e.length; t++) {
            (0, e[t])(0 /* AVAILABLE */);
        }
    }, t.prototype.yi = function() {
        D("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
        for (var t = 0, e = this.gi; t < e.length; t++) {
            (0, e[t])(1 /* UNAVAILABLE */);
        }
    }, 
    // TODO(chenbrian): Consider passing in window either into this component or
    // here for testing via FakeWindow.
    /** Checks that all used attributes of window are available. */
    t.yt = function() {
        return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener;
    }, t;
}(), Io = {
    BatchGetDocuments: "batchGet",
    Commit: "commit",
    RunQuery: "runQuery"
}, _o = /** @class */ function() {
    function t(t) {
        this.Ei = t.Ei, this.Ti = t.Ti;
    }
    return t.prototype.Ii = function(t) {
        this.Ai = t;
    }, t.prototype.Ri = function(t) {
        this.bi = t;
    }, t.prototype.onMessage = function(t) {
        this.vi = t;
    }, t.prototype.close = function() {
        this.Ti();
    }, t.prototype.send = function(t) {
        this.Ei(t);
    }, t.prototype.Pi = function() {
        this.Ai();
    }, t.prototype.Vi = function(t) {
        this.bi(t);
    }, t.prototype.Si = function(t) {
        this.vi(t);
    }, t;
}(), Eo = /** @class */ function(t) {
    function u(e) {
        var n = this;
        return (n = t.call(this, e) || this).forceLongPolling = e.forceLongPolling, n.autoDetectLongPolling = e.autoDetectLongPolling, 
        n;
    }
    /**
     * Base class for all Rest-based connections to the backend (WebChannel and
     * HTTP).
     */
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(u, t), u.prototype.ki = function(t, e, n, r) {
        return new Promise((function(i, o) {
            var s = new _firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_2__["XhrIo"];
            s.listenOnce(_firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_2__["EventType"].COMPLETE, (function() {
                try {
                    switch (s.getLastErrorCode()) {
                      case _firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_2__["ErrorCode"].NO_ERROR:
                        var e = s.getResponseJson();
                        D("Connection", "XHR received:", JSON.stringify(e)), i(e);
                        break;

                      case _firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_2__["ErrorCode"].TIMEOUT:
                        D("Connection", 'RPC "' + t + '" timed out'), o(new T(E.DEADLINE_EXCEEDED, "Request time out"));
                        break;

                      case _firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_2__["ErrorCode"].HTTP_ERROR:
                        var n = s.getStatus();
                        if (D("Connection", 'RPC "' + t + '" failed with status:', n, "response text:", s.getResponseText()), 
                        n > 0) {
                            var r = s.getResponseJson().error;
                            if (r && r.status && r.message) {
                                var u = function(t) {
                                    var e = t.toLowerCase().replace(/_/g, "-");
                                    return Object.values(E).indexOf(e) >= 0 ? e : E.UNKNOWN;
                                }(r.status);
                                o(new T(u, r.message));
                            } else o(new T(E.UNKNOWN, "Server responded with status " + s.getStatus()));
                        } else 
                        // If we received an HTTP_ERROR but there's no status code,
                        // it's most probably a connection issue
                        o(new T(E.UNAVAILABLE, "Connection failed."));
                        break;

                      default:
                        C();
                    }
                } finally {
                    D("Connection", 'RPC "' + t + '" completed.');
                }
            }));
            var u = JSON.stringify(r);
            s.send(e, "POST", u, n, 15);
        }));
    }, u.prototype.$i = function(t, u) {
        var a = [ this.Di, "/", "google.firestore.v1.Firestore", "/", t, "/channel" ], c = Object(_firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_2__["createWebChannelTransport"])(), h = Object(_firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_2__["getStatEventTarget"])(), f = {
            // Required for backend stickiness, routing behavior is based on this
            // parameter.
            httpSessionIdParam: "gsessionid",
            initMessageHeaders: {},
            messageUrlParams: {
                // This param is used to improve routing and project isolation by the
                // backend and must be included in every request.
                database: "projects/" + this.databaseId.projectId + "/databases/" + this.databaseId.database
            },
            sendRawJson: !0,
            supportsCrossDomainXhr: !0,
            internalChannelParams: {
                // Override the default timeout (randomized between 10-20 seconds) since
                // a large write batch on a slow internet connection may take a long
                // time to send to the backend. Rather than have WebChannel impose a
                // tight timeout which could lead to infinite timeouts and retries, we
                // set it very large (5-10 minutes) and rely on the browser's builtin
                // timeouts to kick in if the request isn't working.
                forwardChannelRequestTimeoutMs: 6e5
            },
            forceLongPolling: this.forceLongPolling,
            detectBufferingProxy: this.autoDetectLongPolling
        };
        this.Fi(f.initMessageHeaders, u), 
        // Sending the custom headers we just added to request.initMessageHeaders
        // (Authorization, etc.) will trigger the browser to make a CORS preflight
        // request because the XHR will no longer meet the criteria for a "simple"
        // CORS request:
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests
        // Therefore to avoid the CORS preflight request (an extra network
        // roundtrip), we use the httpHeadersOverwriteParam option to specify that
        // the headers should instead be encoded into a special "$httpHeaders" query
        // parameter, which is recognized by the webchannel backend. This is
        // formally defined here:
        // https://github.com/google/closure-library/blob/b0e1815b13fb92a46d7c9b3c30de5d6a396a3245/closure/goog/net/rpc/httpcors.js#L32
        // TODO(b/145624756): There is a backend bug where $httpHeaders isn't respected if the request
        // doesn't have an Origin header. So we have to exclude a few browser environments that are
        // known to (sometimes) not include an Origin. See
        // https://github.com/firebase/firebase-js-sdk/issues/1491.
        Object(_firebase_util__WEBPACK_IMPORTED_MODULE_0__["isMobileCordova"])() || Object(_firebase_util__WEBPACK_IMPORTED_MODULE_0__["isReactNative"])() || Object(_firebase_util__WEBPACK_IMPORTED_MODULE_0__["isElectron"])() || Object(_firebase_util__WEBPACK_IMPORTED_MODULE_0__["isIE"])() || Object(_firebase_util__WEBPACK_IMPORTED_MODULE_0__["isUWP"])() || Object(_firebase_util__WEBPACK_IMPORTED_MODULE_0__["isBrowserExtension"])() || (f.httpHeadersOverwriteParam = "$httpHeaders");
        var l = a.join("");
        D("Connection", "Creating WebChannel: " + l, f);
        var g = c.createWebChannel(l, f), w = !1, b = !1, I = new _o({
            Ei: function(t) {
                b ? D("Connection", "Not sending because WebChannel is closed:", t) : (w || (D("Connection", "Opening WebChannel transport."), 
                g.open(), w = !0), D("Connection", "WebChannel sending:", t), g.send(t));
            },
            Ti: function() {
                return g.close();
            }
        }), _ = function(t, e, n) {
            // TODO(dimond): closure typing seems broken because WebChannel does
            // not implement goog.events.Listenable
            t.listen(e, (function(t) {
                try {
                    n(t);
                } catch (t) {
                    setTimeout((function() {
                        throw t;
                    }), 0);
                }
            }));
        };
        // WebChannel supports sending the first message with the handshake - saving
        // a network round trip. However, it will have to call send in the same
        // JS event loop as open. In order to enforce this, we delay actually
        // opening the WebChannel until send is called. Whether we have called
        // open is tracked with this variable.
                // Closure events are guarded and exceptions are swallowed, so catch any
        // exception and rethrow using a setTimeout so they become visible again.
        // Note that eventually this function could go away if we are confident
        // enough the code is exception free.
        return _(g, _firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_2__["WebChannel"].EventType.OPEN, (function() {
            b || D("Connection", "WebChannel transport opened.");
        })), _(g, _firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_2__["WebChannel"].EventType.CLOSE, (function() {
            b || (b = !0, D("Connection", "WebChannel transport closed"), I.Vi());
        })), _(g, _firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_2__["WebChannel"].EventType.ERROR, (function(t) {
            b || (b = !0, k("Connection", "WebChannel transport errored:", t), I.Vi(new T(E.UNAVAILABLE, "The operation could not be completed")));
        })), _(g, _firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_2__["WebChannel"].EventType.MESSAGE, (function(t) {
            var e;
            if (!b) {
                var n = t.data[0];
                R(!!n);
                // TODO(b/35143891): There is a bug in One Platform that caused errors
                // (and only errors) to be wrapped in an extra array. To be forward
                // compatible with the bug we need to check either condition. The latter
                // can be removed once the fix has been rolled out.
                // Use any because msgData.error is not typed.
                var r = n, i = r.error || (null === (e = r[0]) || void 0 === e ? void 0 : e.error);
                if (i) {
                    D("Connection", "WebChannel received error:", i);
                    // error.status will be a string like 'OK' or 'NOT_FOUND'.
                    var o = i.status, s = 
                    /**
 * Maps an error Code from a GRPC status identifier like 'NOT_FOUND'.
 *
 * @returns The Code equivalent to the given status string or undefined if
 *     there is no match.
 */
                    function(t) {
                        // lookup by string
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        var e = Me[t];
                        if (void 0 !== e) return je(e);
                    }(o), u = i.message;
                    void 0 === s && (s = E.INTERNAL, u = "Unknown error status: " + o + " with message " + i.message), 
                    // Mark closed so no further events are propagated
                    b = !0, I.Vi(new T(s, u)), g.close();
                } else D("Connection", "WebChannel received:", n), I.Si(n);
            }
        })), _(h, _firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_2__["Event"].STAT_EVENT, (function(t) {
            t.stat === _firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_2__["Stat"].PROXY ? D("Connection", "Detected buffering proxy") : t.stat === _firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_2__["Stat"].NOPROXY && D("Connection", "Detected no buffering proxy");
        })), setTimeout((function() {
            // Technically we could/should wait for the WebChannel opened event,
            // but because we want to send the first message with the WebChannel
            // handshake we pretend the channel opened here (asynchronously), and
            // then delay the actual open until the first message is sent.
            I.Pi();
        }), 0), I;
    }, u;
}(/** @class */ function() {
    function t(t) {
        this.databaseInfo = t, this.databaseId = t.databaseId;
        var e = t.ssl ? "https" : "http";
        this.Di = e + "://" + t.host, this.Ci = "projects/" + this.databaseId.projectId + "/databases/" + this.databaseId.database + "/documents";
    }
    return t.prototype.Ni = function(t, e, n, r) {
        var i = this.xi(t, e);
        D("RestConnection", "Sending: ", i, n);
        var o = {};
        return this.Fi(o, r), this.ki(t, i, o, n).then((function(t) {
            return D("RestConnection", "Received: ", t), t;
        }), (function(e) {
            throw k("RestConnection", t + " failed with error: ", e, "url: ", i, "request:", n), 
            e;
        }));
    }, t.prototype.Oi = function(t, e, n, r) {
        // The REST API automatically aggregates all of the streamed results, so we
        // can just use the normal invoke() method.
        return this.Ni(t, e, n, r);
    }, 
    /**
     * Modifies the headers for a request, adding any authorization token if
     * present and any additional headers for the request.
     */
    t.prototype.Fi = function(t, e) {
        if (t["X-Goog-Api-Client"] = "gl-js/ fire/8.3.2", t["X-Firebase-GMPID"] = this.databaseInfo.appId, 
        // Content-Type: text/plain will avoid preflight requests which might
        // mess with CORS and redirects by proxies. If we add custom headers
        // we will need to change this code to potentially use the $httpOverwrite
        // parameter supported by ESF to avoid triggering preflight requests.
        t["Content-Type"] = "text/plain", e) for (var n in e.authHeaders) e.authHeaders.hasOwnProperty(n) && (t[n] = e.authHeaders[n]);
    }, t.prototype.xi = function(t, e) {
        var n = Io[t];
        return this.Di + "/v1/" + e + ":" + n;
    }, t;
}());

/**
 * Holds the state of a query target, including its target ID and whether the
 * target is 'not-current', 'current' or 'rejected'.
 */
// Visible for testing
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Initializes the WebChannelConnection for the browser. */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** The Platform's 'window' implementation or null if not available. */
function To() {
    // `window` is not always available, e.g. in ReactNative and WebWorkers.
    // eslint-disable-next-line no-restricted-globals
    return "undefined" != typeof window ? window : null;
}

/** The Platform's 'document' implementation or null if not available. */ function So() {
    // `document` is not always available, e.g. in ReactNative and WebWorkers.
    // eslint-disable-next-line no-restricted-globals
    return "undefined" != typeof document ? document : null;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function No(t) {
    return new vn(t, /* useProto3Json= */ !0);
}

/**
 * An instance of the Platform's 'TextEncoder' implementation.
 */
/**
 * A helper for running delayed tasks following an exponential backoff curve
 * between attempts.
 *
 * Each delay is made up of a "base" delay which follows the exponential
 * backoff curve, and a +/- 50% "jitter" that is calculated and added to the
 * base delay. This prevents clients from accidentally synchronizing their
 * delays causing spikes of load to the backend.
 */ var Do = /** @class */ function() {
    function t(
    /**
     * The AsyncQueue to run backoff operations on.
     */
    t, 
    /**
     * The ID to use when scheduling backoff operations on the AsyncQueue.
     */
    e, 
    /**
     * The initial delay (used as the base delay on the first retry attempt).
     * Note that jitter will still be applied, so the actual delay could be as
     * little as 0.5*initialDelayMs.
     */
    n
    /**
     * The multiplier to use to determine the extended base delay after each
     * attempt.
     */ , r
    /**
     * The maximum base delay after which no further backoff is performed.
     * Note that jitter will still be applied, so the actual delay could be as
     * much as 1.5*maxDelayMs.
     */ , i) {
        void 0 === n && (n = 1e3), void 0 === r && (r = 1.5), void 0 === i && (i = 6e4), 
        this.Se = t, this.timerId = e, this.Mi = n, this.Li = r, this.Bi = i, this.qi = 0, 
        this.Ui = null, 
        /** The last backoff attempt, as epoch milliseconds. */
        this.Qi = Date.now(), this.reset();
    }
    /**
     * Resets the backoff delay.
     *
     * The very next backoffAndWait() will have no delay. If it is called again
     * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
     * subsequent ones will increase according to the backoffFactor.
     */    return t.prototype.reset = function() {
        this.qi = 0;
    }, 
    /**
     * Resets the backoff delay to the maximum delay (e.g. for use after a
     * RESOURCE_EXHAUSTED error).
     */
    t.prototype.Ki = function() {
        this.qi = this.Bi;
    }, 
    /**
     * Returns a promise that resolves after currentDelayMs, and increases the
     * delay for any subsequent attempts. If there was a pending backoff operation
     * already, it will be canceled.
     */
    t.prototype.ji = function(t) {
        var e = this;
        // Cancel any pending backoff operation.
                this.cancel();
        // First schedule using the current base (which may be 0 and should be
        // honored as such).
        var n = Math.floor(this.qi + this.Wi()), r = Math.max(0, Date.now() - this.Qi), i = Math.max(0, n - r);
        // Guard against lastAttemptTime being in the future due to a clock change.
                i > 0 && D("ExponentialBackoff", "Backing off for " + i + " ms (base delay: " + this.qi + " ms, delay with jitter: " + n + " ms, last attempt: " + r + " ms ago)"), 
        this.Ui = this.Se.enqueueAfterDelay(this.timerId, i, (function() {
            return e.Qi = Date.now(), t();
        })), 
        // Apply backoff factor to determine next delay and ensure it is within
        // bounds.
        this.qi *= this.Li, this.qi < this.Mi && (this.qi = this.Mi), this.qi > this.Bi && (this.qi = this.Bi);
    }, t.prototype.Gi = function() {
        null !== this.Ui && (this.Ui.skipDelay(), this.Ui = null);
    }, t.prototype.cancel = function() {
        null !== this.Ui && (this.Ui.cancel(), this.Ui = null);
    }, 
    /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */ t.prototype.Wi = function() {
        return (Math.random() - .5) * this.qi;
    }, t;
}(), Ao = /** @class */ function() {
    function t(t, e, n, r, i, o) {
        this.Se = t, this.zi = n, this.Hi = r, this.Ji = i, this.listener = o, this.state = 0 /* Initial */ , 
        /**
             * A close count that's incremented every time the stream is closed; used by
             * getCloseGuardedDispatcher() to invalidate callbacks that happen after
             * close.
             */
        this.Yi = 0, this.Xi = null, this.stream = null, this.Zi = new Do(t, e)
        /**
     * Returns true if start() has been called and no error has occurred. True
     * indicates the stream is open or in the process of opening (which
     * encompasses respecting backoff, getting auth tokens, and starting the
     * actual RPC). Use isOpen() to determine if the stream is open and ready for
     * outbound requests.
     */;
    }
    return t.prototype.tr = function() {
        return 1 /* Starting */ === this.state || 2 /* Open */ === this.state || 4 /* Backoff */ === this.state;
    }, 
    /**
     * Returns true if the underlying RPC is open (the onOpen() listener has been
     * called) and the stream is ready for outbound requests.
     */
    t.prototype.er = function() {
        return 2 /* Open */ === this.state;
    }, 
    /**
     * Starts the RPC. Only allowed if isStarted() returns false. The stream is
     * not immediately ready for use: onOpen() will be invoked when the RPC is
     * ready for outbound requests, at which point isOpen() will return true.
     *
     * When start returns, isStarted() will return true.
     */
    t.prototype.start = function() {
        3 /* Error */ !== this.state ? this.auth() : this.nr();
    }, 
    /**
     * Stops the RPC. This call is idempotent and allowed regardless of the
     * current isStarted() state.
     *
     * When stop returns, isStarted() and isOpen() will both return false.
     */
    t.prototype.stop = function() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.tr() ? [ 4 /*yield*/ , this.close(0 /* Initial */) ] : [ 3 /*break*/ , 2 ];

                  case 1:
                    t.sent(), t.label = 2;

                  case 2:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * After an error the stream will usually back off on the next attempt to
     * start it. If the error warrants an immediate restart of the stream, the
     * sender can use this to indicate that the receiver should not back off.
     *
     * Each error will call the onClose() listener. That function can decide to
     * inhibit backoff if required.
     */
    t.prototype.sr = function() {
        this.state = 0 /* Initial */ , this.Zi.reset();
    }, 
    /**
     * Marks this stream as idle. If no further actions are performed on the
     * stream for one minute, the stream will automatically close itself and
     * notify the stream's onClose() handler with Status.OK. The stream will then
     * be in a !isStarted() state, requiring the caller to start the stream again
     * before further use.
     *
     * Only streams that are in state 'Open' can be marked idle, as all other
     * states imply pending network operations.
     */
    t.prototype.ir = function() {
        var t = this;
        // Starts the idle time if we are in state 'Open' and are not yet already
        // running a timer (in which case the previous idle timeout still applies).
                this.er() && null === this.Xi && (this.Xi = this.Se.enqueueAfterDelay(this.zi, 6e4, (function() {
            return t.rr();
        })));
    }, 
    /** Sends a message to the underlying stream. */ t.prototype.cr = function(t) {
        this.ur(), this.stream.send(t);
    }, 
    /** Called by the idle timer when the stream should close due to inactivity. */ t.prototype.rr = function() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(t) {
                return this.er() ? [ 2 /*return*/ , this.close(0 /* Initial */) ] : [ 2 /*return*/ ];
            }));
        }));
    }, 
    /** Marks the stream as active again. */ t.prototype.ur = function() {
        this.Xi && (this.Xi.cancel(), this.Xi = null);
    }, 
    /**
     * Closes the stream and cleans up as necessary:
     *
     * * closes the underlying GRPC stream;
     * * calls the onClose handler with the given 'error';
     * * sets internal stream state to 'finalState';
     * * adjusts the backoff timer based on the error
     *
     * A new stream can be opened by calling start().
     *
     * @param finalState - the intended state of the stream after closing.
     * @param error - the error the connection was closed with.
     */
    t.prototype.close = function(t, e) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(n) {
                switch (n.label) {
                  case 0:
                    // Notify the listener that the stream closed.
                    // Cancel any outstanding timers (they're guaranteed not to execute).
                    return this.ur(), this.Zi.cancel(), 
                    // Invalidates any stream-related callbacks (e.g. from auth or the
                    // underlying stream), guaranteeing they won't execute.
                    this.Yi++, 3 /* Error */ !== t ? 
                    // If this is an intentional close ensure we don't delay our next connection attempt.
                    this.Zi.reset() : e && e.code === E.RESOURCE_EXHAUSTED ? (
                    // Log the error. (Probably either 'quota exceeded' or 'max queue length reached'.)
                    A(e.toString()), A("Using maximum backoff delay to prevent overloading the backend."), 
                    this.Zi.Ki()) : e && e.code === E.UNAUTHENTICATED && 
                    // "unauthenticated" error means the token was rejected. Try force refreshing it in case it
                    // just expired.
                    this.Ji.invalidateToken(), 
                    // Clean up the underlying stream because we are no longer interested in events.
                    null !== this.stream && (this.ar(), this.stream.close(), this.stream = null), 
                    // This state must be assigned before calling onClose() to allow the callback to
                    // inhibit backoff or otherwise manipulate the state in its non-started state.
                    this.state = t, [ 4 /*yield*/ , this.listener.Ri(e) ];

                  case 1:
                    // Cancel any outstanding timers (they're guaranteed not to execute).
                    // Notify the listener that the stream closed.
                    return n.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Can be overridden to perform additional cleanup before the stream is closed.
     * Calling super.tearDown() is not required.
     */
    t.prototype.ar = function() {}, t.prototype.auth = function() {
        var t = this;
        this.state = 1 /* Starting */;
        var e = this.hr(this.Yi), n = this.Yi;
        // TODO(mikelehen): Just use dispatchIfNotClosed, but see TODO below.
                this.Ji.getToken().then((function(e) {
            // Stream can be stopped while waiting for authentication.
            // TODO(mikelehen): We really should just use dispatchIfNotClosed
            // and let this dispatch onto the queue, but that opened a spec test can
            // of worms that I don't want to deal with in this PR.
            t.Yi === n && 
            // Normally we'd have to schedule the callback on the AsyncQueue.
            // However, the following calls are safe to be called outside the
            // AsyncQueue since they don't chain asynchronous calls
            t.lr(e);
        }), (function(n) {
            e((function() {
                var e = new T(E.UNKNOWN, "Fetching auth token failed: " + n.message);
                return t.dr(e);
            }));
        }));
    }, t.prototype.lr = function(t) {
        var e = this, n = this.hr(this.Yi);
        this.stream = this.wr(t), this.stream.Ii((function() {
            n((function() {
                return e.state = 2 /* Open */ , e.listener.Ii();
            }));
        })), this.stream.Ri((function(t) {
            n((function() {
                return e.dr(t);
            }));
        })), this.stream.onMessage((function(t) {
            n((function() {
                return e.onMessage(t);
            }));
        }));
    }, t.prototype.nr = function() {
        var t = this;
        this.state = 4 /* Backoff */ , this.Zi.ji((function() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(t, void 0, void 0, (function() {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(t) {
                    return this.state = 0 /* Initial */ , this.start(), [ 2 /*return*/ ];
                }));
            }));
        }));
    }, 
    // Visible for tests
    t.prototype.dr = function(t) {
        // In theory the stream could close cleanly, however, in our current model
        // we never expect this to happen because if we stop a stream ourselves,
        // this callback will never be called. To prevent cases where we retry
        // without a backoff accidentally, we set the stream to error in all cases.
        return D("PersistentStream", "close with error: " + t), this.stream = null, this.close(3 /* Error */ , t);
    }, 
    /**
     * Returns a "dispatcher" function that dispatches operations onto the
     * AsyncQueue but only runs them if closeCount remains unchanged. This allows
     * us to turn auth / stream callbacks into no-ops if the stream is closed /
     * re-opened, etc.
     */
    t.prototype.hr = function(t) {
        var e = this;
        return function(n) {
            e.Se.enqueueAndForget((function() {
                return e.Yi === t ? n() : (D("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), 
                Promise.resolve());
            }));
        };
    }, t;
}(), ko = /** @class */ function(t) {
    function e(e, n, r, i, o) {
        var s = this;
        return (s = t.call(this, e, "listen_stream_connection_backoff" /* ListenStreamConnectionBackoff */ , "listen_stream_idle" /* ListenStreamIdle */ , n, r, o) || this).R = i, 
        s;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.wr = function(t) {
        return this.Hi.$i("Listen", t);
    }, e.prototype.onMessage = function(t) {
        // A successful response means the stream is healthy
        this.Zi.reset();
        var e = function(t, e) {
            var n;
            if ("targetChange" in e) {
                e.targetChange;
                // proto3 default value is unset in JSON (undefined), so use 'NO_CHANGE'
                // if unset
                var r = function(t) {
                    return "NO_CHANGE" === t ? 0 /* NoChange */ : "ADD" === t ? 1 /* Added */ : "REMOVE" === t ? 2 /* Removed */ : "CURRENT" === t ? 3 /* Current */ : "RESET" === t ? 4 /* Reset */ : C();
                }(e.targetChange.targetChangeType || "NO_CHANGE"), i = e.targetChange.targetIds || [], o = function(t, e) {
                    return t.I ? (R(void 0 === e || "string" == typeof e), Y.fromBase64String(e || "")) : (R(void 0 === e || e instanceof Uint8Array), 
                    Y.fromUint8Array(e || new Uint8Array));
                }(t, e.targetChange.resumeToken), s = (u = e.targetChange.cause) && function(t) {
                    var e = void 0 === t.code ? E.UNKNOWN : je(t.code);
                    return new T(e, t.message || "");
                }(u);
                n = new cn(r, i, o, s || null);
            } else if ("documentChange" in e) {
                e.documentChange, (r = e.documentChange).document, r.document.name, r.document.updateTime, 
                i = Tn(t, r.document.name), o = bn(r.document.updateTime);
                var u = new bt({
                    mapValue: {
                        fields: r.document.fields
                    }
                }), a = (s = _t.newFoundDocument(i, o, u), r.targetIds || []), c = r.removedTargetIds || [];
                n = new un(a, c, s.key, s);
            } else if ("documentDelete" in e) e.documentDelete, (r = e.documentDelete).document, 
            i = Tn(t, r.document), o = r.readTime ? bn(r.readTime) : U.min(), u = _t.newNoDocument(i, o), 
            s = r.removedTargetIds || [], n = new un([], s, u.key, u); else if ("documentRemove" in e) e.documentRemove, 
            (r = e.documentRemove).document, i = Tn(t, r.document), o = r.removedTargetIds || [], 
            n = new un([], o, i, null); else {
                if (!("filter" in e)) return C();
                e.filter;
                var h = e.filter;
                h.targetId, r = h.count || 0, i = new Ue(r), o = h.targetId, n = new an(o, i);
            }
            return n;
        }(this.R, t), n = function(t) {
            // We have only reached a consistent snapshot for the entire stream if there
            // is a read_time set and it applies to all targets (i.e. the list of
            // targets is empty). The backend is guaranteed to send such responses.
            if (!("targetChange" in t)) return U.min();
            var e = t.targetChange;
            return e.targetIds && e.targetIds.length ? U.min() : e.readTime ? bn(e.readTime) : U.min();
        }(t);
        return this.listener._r(e, n);
    }, 
    /**
     * Registers interest in the results of the given target. If the target
     * includes a resumeToken it will be included in the request. Results that
     * affect the target will be streamed back as WatchChange messages that
     * reference the targetId.
     */
    e.prototype.mr = function(t) {
        var e = {};
        e.database = Dn(this.R), e.addTarget = function(t, e) {
            var n, r = e.target;
            return (n = Dt(r) ? {
                documents: On(t, r)
            } : {
                query: Ln(t, r)
            }).targetId = e.targetId, e.resumeToken.approximateByteSize() > 0 ? n.resumeToken = gn(t, e.resumeToken) : e.snapshotVersion.compareTo(U.min()) > 0 && (
            // TODO(wuandy): Consider removing above check because it is most likely true.
            // Right now, many tests depend on this behaviour though (leaving min() out
            // of serialization).
            n.readTime = mn(t, e.snapshotVersion.toTimestamp())), n;
        }(this.R, t);
        var n = function(t, e) {
            var n = function(t, e) {
                switch (e) {
                  case 0 /* Listen */ :
                    return null;

                  case 1 /* ExistenceFilterMismatch */ :
                    return "existence-filter-mismatch";

                  case 2 /* LimboResolution */ :
                    return "limbo-document";

                  default:
                    return C();
                }
            }(0, e.purpose);
            return null == n ? null : {
                "goog-listen-tags": n
            };
        }(this.R, t);
        n && (e.labels = n), this.cr(e);
    }, 
    /**
     * Unregisters interest in the results of the target associated with the
     * given targetId.
     */
    e.prototype.yr = function(t) {
        var e = {};
        e.database = Dn(this.R), e.removeTarget = t, this.cr(e);
    }, e;
}(Ao), xo = /** @class */ function(t) {
    function e(e, n, r, i, o) {
        var s = this;
        return (s = t.call(this, e, "write_stream_connection_backoff" /* WriteStreamConnectionBackoff */ , "write_stream_idle" /* WriteStreamIdle */ , n, r, o) || this).R = i, 
        s.gr = !1, s;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), Object.defineProperty(e.prototype, "pr", {
        /**
         * Tracks whether or not a handshake has been successfully exchanged and
         * the stream is ready to accept mutations.
         */
        get: function() {
            return this.gr;
        },
        enumerable: !1,
        configurable: !0
    }), 
    // Override of PersistentStream.start
    e.prototype.start = function() {
        this.gr = !1, this.lastStreamToken = void 0, t.prototype.start.call(this);
    }, e.prototype.ar = function() {
        this.gr && this.Er([]);
    }, e.prototype.wr = function(t) {
        return this.Hi.$i("Write", t);
    }, e.prototype.onMessage = function(t) {
        if (
        // Always capture the last stream token.
        R(!!t.streamToken), this.lastStreamToken = t.streamToken, this.gr) {
            // A successful first write response means the stream is healthy,
            // Note, that we could consider a successful handshake healthy, however,
            // the write itself might be causing an error we want to back off from.
            this.Zi.reset();
            var e = function(t, e) {
                return t && t.length > 0 ? (R(void 0 !== e), t.map((function(t) {
                    return function(t, e) {
                        // NOTE: Deletes don't have an updateTime.
                        var n = t.updateTime ? bn(t.updateTime) : bn(e);
                        return n.isEqual(U.min()) && (
                        // The Firestore Emulator currently returns an update time of 0 for
                        // deletes of non-existing documents (rather than null). This breaks the
                        // test "get deleted doc while offline with source=cache" as NoDocuments
                        // with version 0 are filtered by IndexedDb's RemoteDocumentCache.
                        // TODO(#2149): Remove this when Emulator is fixed
                        n = bn(e)), new _e(n, t.transformResults || []);
                    }(t, e);
                }))) : [];
            }(t.writeResults, t.commitTime), n = bn(t.commitTime);
            return this.listener.Tr(n, e);
        }
        // The first response is always the handshake response
                return R(!t.writeResults || 0 === t.writeResults.length), this.gr = !0, 
        this.listener.Ir();
    }, 
    /**
     * Sends an initial streamToken to the server, performing the handshake
     * required to make the StreamingWrite RPC work. Subsequent
     * calls should wait until onHandshakeComplete was called.
     */
    e.prototype.Ar = function() {
        // TODO(dimond): Support stream resumption. We intentionally do not set the
        // stream token on the handshake, ignoring any stream token we might have.
        var t = {};
        t.database = Dn(this.R), this.cr(t);
    }, 
    /** Sends a group of mutations to the Firestore backend to apply. */ e.prototype.Er = function(t) {
        var e = this, n = {
            streamToken: this.lastStreamToken,
            writes: t.map((function(t) {
                return Cn(e.R, t);
            }))
        };
        this.cr(n);
    }, e;
}(Ao), Co = /** @class */ function(t) {
    function e(e, n, r) {
        var i = this;
        return (i = t.call(this) || this).credentials = e, i.Hi = n, i.R = r, i.Rr = !1, 
        i;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.br = function() {
        if (this.Rr) throw new T(E.FAILED_PRECONDITION, "The client has already been terminated.");
    }, 
    /** Gets an auth token and invokes the provided RPC. */ e.prototype.Ni = function(t, e, n) {
        var r = this;
        return this.br(), this.credentials.getToken().then((function(i) {
            return r.Hi.Ni(t, e, n, i);
        })).catch((function(t) {
            throw t.code === E.UNAUTHENTICATED && r.credentials.invalidateToken(), t;
        }));
    }, 
    /** Gets an auth token and invokes the provided RPC with streamed results. */ e.prototype.Oi = function(t, e, n) {
        var r = this;
        return this.br(), this.credentials.getToken().then((function(i) {
            return r.Hi.Oi(t, e, n, i);
        })).catch((function(t) {
            throw t.code === E.UNAUTHENTICATED && r.credentials.invalidateToken(), t;
        }));
    }, e.prototype.terminate = function() {
        this.Rr = !1;
    }, e;
}((function() {})), Ro = /** @class */ function() {
    function t(t, e) {
        this.asyncQueue = t, this.onlineStateHandler = e, 
        /** The current OnlineState. */
        this.state = "Unknown" /* Unknown */ , 
        /**
             * A count of consecutive failures to open the stream. If it reaches the
             * maximum defined by MAX_WATCH_STREAM_FAILURES, we'll set the OnlineState to
             * Offline.
             */
        this.vr = 0, 
        /**
             * A timer that elapses after ONLINE_STATE_TIMEOUT_MS, at which point we
             * transition from OnlineState.Unknown to OnlineState.Offline without waiting
             * for the stream to actually fail (MAX_WATCH_STREAM_FAILURES times).
             */
        this.Pr = null, 
        /**
             * Whether the client should log a warning message if it fails to connect to
             * the backend (initially true, cleared after a successful stream, or if we've
             * logged the message already).
             */
        this.Vr = !0
        /**
     * Called by RemoteStore when a watch stream is started (including on each
     * backoff attempt).
     *
     * If this is the first attempt, it sets the OnlineState to Unknown and starts
     * the onlineStateTimer.
     */;
    }
    return t.prototype.Sr = function() {
        var t = this;
        0 === this.vr && (this.Dr("Unknown" /* Unknown */), this.Pr = this.asyncQueue.enqueueAfterDelay("online_state_timeout" /* OnlineStateTimeout */ , 1e4, (function() {
            return t.Pr = null, t.Cr("Backend didn't respond within 10 seconds."), t.Dr("Offline" /* Offline */), 
            Promise.resolve();
        })));
    }, 
    /**
     * Updates our OnlineState as appropriate after the watch stream reports a
     * failure. The first failure moves us to the 'Unknown' state. We then may
     * allow multiple failures (based on MAX_WATCH_STREAM_FAILURES) before we
     * actually transition to the 'Offline' state.
     */
    t.prototype.Nr = function(t) {
        "Online" /* Online */ === this.state ? this.Dr("Unknown" /* Unknown */) : (this.vr++, 
        this.vr >= 1 && (this.Fr(), this.Cr("Connection failed 1 times. Most recent error: " + t.toString()), 
        this.Dr("Offline" /* Offline */)));
    }, 
    /**
     * Explicitly sets the OnlineState to the specified state.
     *
     * Note that this resets our timers / failure counters, etc. used by our
     * Offline heuristics, so must not be used in place of
     * handleWatchStreamStart() and handleWatchStreamFailure().
     */
    t.prototype.set = function(t) {
        this.Fr(), this.vr = 0, "Online" /* Online */ === t && (
        // We've connected to watch at least once. Don't warn the developer
        // about being offline going forward.
        this.Vr = !1), this.Dr(t);
    }, t.prototype.Dr = function(t) {
        t !== this.state && (this.state = t, this.onlineStateHandler(t));
    }, t.prototype.Cr = function(t) {
        var e = "Could not reach Cloud Firestore backend. " + t + "\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.";
        this.Vr ? (A(e), this.Vr = !1) : D("OnlineStateTracker", e);
    }, t.prototype.Fr = function() {
        null !== this.Pr && (this.Pr.cancel(), this.Pr = null);
    }, t;
}(), Oo = function(
/**
     * The local store, used to fill the write pipeline with outbound mutations.
     */
t, 
/** The client-side proxy for interacting with the backend. */
e, n, r, i) {
    var o = this;
    this.localStore = t, this.datastore = e, this.asyncQueue = n, this.remoteSyncer = {}, 
    /**
             * A list of up to MAX_PENDING_WRITES writes that we have fetched from the
             * LocalStore via fillWritePipeline() and have or will send to the write
             * stream.
             *
             * Whenever writePipeline.length > 0 the RemoteStore will attempt to start or
             * restart the write stream. When the stream is established the writes in the
             * pipeline will be sent in order.
             *
             * Writes remain in writePipeline until they are acknowledged by the backend
             * and thus will automatically be re-sent if the stream is interrupted /
             * restarted before they're acknowledged.
             *
             * Write responses from the backend are linked to their originating request
             * purely based on order, and so we can just shift() writes from the front of
             * the writePipeline as we receive responses.
             */
    this.kr = [], 
    /**
             * A mapping of watched targets that the client cares about tracking and the
             * user has explicitly called a 'listen' for this target.
             *
             * These targets may or may not have been sent to or acknowledged by the
             * server. On re-establishing the listen stream, these targets should be sent
             * to the server. The targets removed with unlistens are removed eagerly
             * without waiting for confirmation from the listen stream.
             */
    this.Or = new Map, 
    /**
             * A set of reasons for why the RemoteStore may be offline. If empty, the
             * RemoteStore may start its network connections.
             */
    this.$r = new Set, 
    /**
             * Event handlers that get called when the network is disabled or enabled.
             *
             * PORTING NOTE: These functions are used on the Web client to create the
             * underlying streams (to support tree-shakeable streams). On Android and iOS,
             * the streams are created during construction of RemoteStore.
             */
    this.Mr = [], this.Lr = i, this.Lr.di((function(t) {
        n.enqueueAndForget((function() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(o, void 0, void 0, (function() {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(t) {
                    switch (t.label) {
                      case 0:
                        return jo(this) ? (D("RemoteStore", "Restarting streams for network reachability change."), 
                        [ 4 /*yield*/ , function(t) {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
                                var e;
                                return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(n) {
                                    switch (n.label) {
                                      case 0:
                                        return (e = O(t)).$r.add(4 /* ConnectivityChange */), [ 4 /*yield*/ , Po(e) ];

                                      case 1:
                                        return n.sent(), e.Br.set("Unknown" /* Unknown */), e.$r.delete(4 /* ConnectivityChange */), 
                                        [ 4 /*yield*/ , Lo(e) ];

                                      case 2:
                                        return n.sent(), [ 2 /*return*/ ];
                                    }
                                }));
                            }));
                        }(this) ]) : [ 3 /*break*/ , 2 ];

                      case 1:
                        t.sent(), t.label = 2;

                      case 2:
                        return [ 2 /*return*/ ];
                    }
                }));
            }));
        }));
    })), this.Br = new Ro(n, r);
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A PersistentStream is an abstract base class that represents a streaming RPC
 * to the Firestore backend. It's built on top of the connections own support
 * for streaming RPCs, and adds several critical features for our clients:
 *
 *   - Exponential backoff on failure
 *   - Authentication via CredentialsProvider
 *   - Dispatching all callbacks into the shared worker queue
 *   - Closing idle streams after 60 seconds of inactivity
 *
 * Subclasses of PersistentStream implement serialization of models to and
 * from the JSON representation of the protocol buffers for a specific
 * streaming RPC.
 *
 * ## Starting and Stopping
 *
 * Streaming RPCs are stateful and need to be start()ed before messages can
 * be sent and received. The PersistentStream will call the onOpen() function
 * of the listener once the stream is ready to accept requests.
 *
 * Should a start() fail, PersistentStream will call the registered onClose()
 * listener with a FirestoreError indicating what went wrong.
 *
 * A PersistentStream can be started and stopped repeatedly.
 *
 * Generic types:
 *  SendType: The type of the outgoing message of the underlying
 *    connection stream
 *  ReceiveType: The type of the incoming message of the underlying
 *    connection stream
 *  ListenerType: The type of the listener that will be used for callbacks
 */ function Lo(t) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var e, n;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(r) {
            switch (r.label) {
              case 0:
                if (!jo(t)) return [ 3 /*break*/ , 4 ];
                e = 0, n = t.Mr, r.label = 1;

              case 1:
                return e < n.length ? [ 4 /*yield*/ , (0, n[e])(/* enabled= */ !0) ] : [ 3 /*break*/ , 4 ];

              case 2:
                r.sent(), r.label = 3;

              case 3:
                return e++, [ 3 /*break*/ , 1 ];

              case 4:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Temporarily disables the network. The network can be re-enabled using
 * enableNetwork().
 */ function Po(t) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var e, n;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(r) {
            switch (r.label) {
              case 0:
                e = 0, n = t.Mr, r.label = 1;

              case 1:
                return e < n.length ? [ 4 /*yield*/ , (0, n[e])(/* enabled= */ !1) ] : [ 3 /*break*/ , 4 ];

              case 2:
                r.sent(), r.label = 3;

              case 3:
                return e++, [ 3 /*break*/ , 1 ];

              case 4:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Starts new listen for the given target. Uses resume token if provided. It
 * is a no-op if the target of given `TargetData` is already being listened to.
 */ function Mo(t, e) {
    var n = O(t);
    n.Or.has(e.targetId) || (
    // Mark this as something the client is currently listening for.
    n.Or.set(e.targetId, e), Bo(n) ? 
    // The listen will be sent in onWatchStreamOpen
    Uo(n) : rs(n).er() && Vo(n, e));
}

/**
 * Removes the listen from server. It is a no-op if the given target id is
 * not being listened to.
 */ function Fo(t, e) {
    var n = O(t), r = rs(n);
    n.Or.delete(e), r.er() && qo(n, e), 0 === n.Or.size && (r.er() ? r.ir() : jo(n) && 
    // Revert to OnlineState.Unknown if the watch stream is not open and we
    // have no listeners, since without any listens to send we cannot
    // confirm if the stream is healthy and upgrade to OnlineState.Online.
    n.Br.set("Unknown" /* Unknown */));
}

/**
 * We need to increment the the expected number of pending responses we're due
 * from watch so we wait for the ack to process any messages from this target.
 */ function Vo(t, e) {
    t.qr.U(e.targetId), rs(t).mr(e)
    /**
 * We need to increment the expected number of pending responses we're due
 * from watch so we wait for the removal on the server before we process any
 * messages from this target.
 */;
}

function qo(t, e) {
    t.qr.U(e), rs(t).yr(e);
}

function Uo(t) {
    t.qr = new fn({
        getRemoteKeysForTarget: function(e) {
            return t.remoteSyncer.getRemoteKeysForTarget(e);
        },
        lt: function(e) {
            return t.Or.get(e) || null;
        }
    }), rs(t).start(), t.Br.Sr()
    /**
 * Returns whether the watch stream should be started because it's necessary
 * and has not yet been started.
 */;
}

function Bo(t) {
    return jo(t) && !rs(t).tr() && t.Or.size > 0;
}

function jo(t) {
    return 0 === O(t).$r.size;
}

function Ko(t) {
    t.qr = void 0;
}

function Go(t) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(e) {
            return t.Or.forEach((function(e, n) {
                Vo(t, e);
            })), [ 2 /*return*/ ];
        }));
    }));
}

function zo(t, e) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(n) {
            return Ko(t), 
            // If we still need the watch stream, retry the connection.
            Bo(t) ? (t.Br.Nr(e), Uo(t)) : 
            // No need to restart watch stream because there are no active targets.
            // The online state is set to unknown because there is no active attempt
            // at establishing a connection
            t.Br.set("Unknown" /* Unknown */), [ 2 /*return*/ ];
        }));
    }));
}

function Qo(t, e, n) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var r, i, o;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(s) {
            switch (s.label) {
              case 0:
                if (t.Br.set("Online" /* Online */), !(e instanceof cn && 2 /* Removed */ === e.state && e.cause)) 
                // Mark the client as online since we got a message from the server
                return [ 3 /*break*/ , 6 ];
                s.label = 1;

              case 1:
                return s.trys.push([ 1, 3, , 5 ]), [ 4 /*yield*/ , 
                /** Handles an error on a target */
                function(t, e) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
                        var n, r, i, o;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(s) {
                            switch (s.label) {
                              case 0:
                                n = e.cause, r = 0, i = e.targetIds, s.label = 1;

                              case 1:
                                return r < i.length ? (o = i[r], t.Or.has(o) ? [ 4 /*yield*/ , t.remoteSyncer.rejectListen(o, n) ] : [ 3 /*break*/ , 3 ]) : [ 3 /*break*/ , 5 ];

                              case 2:
                                s.sent(), t.Or.delete(o), t.qr.removeTarget(o), s.label = 3;

                              case 3:
                                s.label = 4;

                              case 4:
                                return r++, [ 3 /*break*/ , 1 ];

                              case 5:
                                return [ 2 /*return*/ ];
                            }
                        }));
                    }));
                }(t, e) ];

              case 2:
                return s.sent(), [ 3 /*break*/ , 5 ];

              case 3:
                return r = s.sent(), D("RemoteStore", "Failed to remove targets %s: %s ", e.targetIds.join(","), r), 
                [ 4 /*yield*/ , Wo(t, r) ];

              case 4:
                return s.sent(), [ 3 /*break*/ , 5 ];

              case 5:
                return [ 3 /*break*/ , 13 ];

              case 6:
                if (e instanceof un ? t.qr.X(e) : e instanceof an ? t.qr.rt(e) : t.qr.et(e), n.isEqual(U.min())) return [ 3 /*break*/ , 13 ];
                s.label = 7;

              case 7:
                return s.trys.push([ 7, 11, , 13 ]), [ 4 /*yield*/ , qi(t.localStore) ];

              case 8:
                return i = s.sent(), n.compareTo(i) >= 0 ? [ 4 /*yield*/ , 
                /**
                 * Takes a batch of changes from the Datastore, repackages them as a
                 * RemoteEvent, and passes that on to the listener, which is typically the
                 * SyncEngine.
                 */
                function(t, e) {
                    var n = t.qr.ut(e);
                    // Update in-memory resume tokens. LocalStore will update the
                    // persistent view of these when applying the completed RemoteEvent.
                                        return n.targetChanges.forEach((function(n, r) {
                        if (n.resumeToken.approximateByteSize() > 0) {
                            var i = t.Or.get(r);
                            // A watched target might have been removed already.
                                                        i && t.Or.set(r, i.withResumeToken(n.resumeToken, e));
                        }
                    })), 
                    // Re-establish listens for the targets that have been invalidated by
                    // existence filter mismatches.
                    n.targetMismatches.forEach((function(e) {
                        var n = t.Or.get(e);
                        if (n) {
                            // Clear the resume token for the target, since we're in a known mismatch
                            // state.
                            t.Or.set(e, n.withResumeToken(Y.EMPTY_BYTE_STRING, n.snapshotVersion)), 
                            // Cause a hard reset by unwatching and rewatching immediately, but
                            // deliberately don't send a resume token so that we get a full update.
                            qo(t, e);
                            // Mark the target we send as being on behalf of an existence filter
                            // mismatch, but don't actually retain that in listenTargets. This ensures
                            // that we flag the first re-listen this way without impacting future
                            // listens of this target (that might happen e.g. on reconnect).
                            var r = new Cr(n.target, e, 1 /* ExistenceFilterMismatch */ , n.sequenceNumber);
                            Vo(t, r);
                        }
                    })), t.remoteSyncer.applyRemoteEvent(n);
                }(t, n) ] : [ 3 /*break*/ , 10 ];

                // We have received a target change with a global snapshot if the snapshot
                // version is not equal to SnapshotVersion.min().
                              case 9:
                // We have received a target change with a global snapshot if the snapshot
                // version is not equal to SnapshotVersion.min().
                s.sent(), s.label = 10;

              case 10:
                return [ 3 /*break*/ , 13 ];

              case 11:
                return D("RemoteStore", "Failed to raise snapshot:", o = s.sent()), [ 4 /*yield*/ , Wo(t, o) ];

              case 12:
                return s.sent(), [ 3 /*break*/ , 13 ];

              case 13:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Recovery logic for IndexedDB errors that takes the network offline until
 * `op` succeeds. Retries are scheduled with backoff using
 * `enqueueRetryable()`. If `op()` is not provided, IndexedDB access is
 * validated via a generic operation.
 *
 * The returned Promise is resolved once the network is disabled and before
 * any retry attempt.
 */ function Wo(t, e, n) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var r = this;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(i) {
            switch (i.label) {
              case 0:
                if (!_r(e)) throw e;
                // Disable network and raise offline snapshots
                return t.$r.add(1 /* IndexedDbFailed */), [ 4 /*yield*/ , Po(t) ];

              case 1:
                // Disable network and raise offline snapshots
                return i.sent(), t.Br.set("Offline" /* Offline */), n || (
                // Use a simple read operation to determine if IndexedDB recovered.
                // Ideally, we would expose a health check directly on SimpleDb, but
                // RemoteStore only has access to persistence through LocalStore.
                n = function() {
                    return qi(t.localStore);
                }), 
                // Probe IndexedDB periodically and re-enable network
                t.asyncQueue.enqueueRetryable((function() {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(r, void 0, void 0, (function() {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(e) {
                            switch (e.label) {
                              case 0:
                                return D("RemoteStore", "Retrying IndexedDB access"), [ 4 /*yield*/ , n() ];

                              case 1:
                                return e.sent(), t.$r.delete(1 /* IndexedDbFailed */), [ 4 /*yield*/ , Lo(t) ];

                              case 2:
                                return e.sent(), [ 2 /*return*/ ];
                            }
                        }));
                    }));
                })), [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Executes `op`. If `op` fails, takes the network offline until `op`
 * succeeds. Returns after the first attempt.
 */ function Ho(t, e) {
    return e().catch((function(n) {
        return Wo(t, n, e);
    }));
}

function Yo(t) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var e, n, r, i, o;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(s) {
            switch (s.label) {
              case 0:
                e = O(t), n = is(e), r = e.kr.length > 0 ? e.kr[e.kr.length - 1].batchId : -1, s.label = 1;

              case 1:
                if (!
                /**
 * Returns true if we can add to the write pipeline (i.e. the network is
 * enabled and the write pipeline is not full).
 */
                function(t) {
                    return jo(t) && t.kr.length < 10;
                }
                /**
 * Queues additional writes to be sent to the write stream, sending them
 * immediately if the write stream is established.
 */ (e)) return [ 3 /*break*/ , 7 ];
                s.label = 2;

              case 2:
                return s.trys.push([ 2, 4, , 6 ]), [ 4 /*yield*/ , ji(e.localStore, r) ];

              case 3:
                return null === (i = s.sent()) ? (0 === e.kr.length && n.ir(), [ 3 /*break*/ , 7 ]) : (r = i.batchId, 
                function(t, e) {
                    t.kr.push(e);
                    var n = is(t);
                    n.er() && n.pr && n.Er(e.mutations);
                }(e, i), [ 3 /*break*/ , 6 ]);

              case 4:
                return o = s.sent(), [ 4 /*yield*/ , Wo(e, o) ];

              case 5:
                return s.sent(), [ 3 /*break*/ , 6 ];

              case 6:
                return [ 3 /*break*/ , 1 ];

              case 7:
                return Xo(e) && Jo(e), [ 2 /*return*/ ];
            }
        }));
    }));
}

function Xo(t) {
    return jo(t) && !is(t).tr() && t.kr.length > 0;
}

function Jo(t) {
    is(t).start();
}

function $o(t) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(e) {
            return is(t).Ar(), [ 2 /*return*/ ];
        }));
    }));
}

function Zo(t) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var e, n, r, i;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(o) {
            // Send the write pipeline now that the stream is established.
            for (e = is(t), n = 0, r = t.kr; n < r.length; n++) i = r[n], e.Er(i.mutations);
            return [ 2 /*return*/ ];
        }));
    }));
}

function ts(t, e, n) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var r, i;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(o) {
            switch (o.label) {
              case 0:
                return r = t.kr.shift(), i = xr.from(r, e, n), [ 4 /*yield*/ , Ho(t, (function() {
                    return t.remoteSyncer.applySuccessfulWrite(i);
                })) ];

              case 1:
                // It's possible that with the completion of this mutation another
                // slot has freed up.
                return o.sent(), [ 4 /*yield*/ , Yo(t) ];

              case 2:
                // It's possible that with the completion of this mutation another
                // slot has freed up.
                return o.sent(), [ 2 /*return*/ ];
            }
        }));
    }));
}

function es(t, e) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(n) {
            switch (n.label) {
              case 0:
                return e && is(t).pr ? [ 4 /*yield*/ , function(t, e) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
                        var n, r;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(i) {
                            switch (i.label) {
                              case 0:
                                return Be(r = e.code) && r !== E.ABORTED ? (n = t.kr.shift(), 
                                // In this case it's also unlikely that the server itself is melting
                                // down -- this was just a bad request so inhibit backoff on the next
                                // restart.
                                is(t).sr(), [ 4 /*yield*/ , Ho(t, (function() {
                                    return t.remoteSyncer.rejectFailedWrite(n.batchId, e);
                                })) ]) : [ 3 /*break*/ , 3 ];

                              case 1:
                                // It's possible that with the completion of this mutation
                                // another slot has freed up.
                                return i.sent(), [ 4 /*yield*/ , Yo(t) ];

                              case 2:
                                // In this case it's also unlikely that the server itself is melting
                                // down -- this was just a bad request so inhibit backoff on the next
                                // restart.
                                // It's possible that with the completion of this mutation
                                // another slot has freed up.
                                i.sent(), i.label = 3;

                              case 3:
                                return [ 2 /*return*/ ];
                            }
                        }));
                    }));
                }(t, e) ] : [ 3 /*break*/ , 2 ];

                // This error affects the actual write.
                              case 1:
                // This error affects the actual write.
                n.sent(), n.label = 2;

              case 2:
                // If the write stream closed after the write handshake completes, a write
                // operation failed and we fail the pending operation.
                // The write stream might have been started by refilling the write
                // pipeline for failed writes
                return Xo(t) && Jo(t), [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Toggles the network state when the client gains or loses its primary lease.
 */ function ns(t, e) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var n, r;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(i) {
            switch (i.label) {
              case 0:
                return n = O(t), e ? (n.$r.delete(2 /* IsSecondary */), [ 4 /*yield*/ , Lo(n) ]) : [ 3 /*break*/ , 2 ];

              case 1:
                return i.sent(), [ 3 /*break*/ , 5 ];

              case 2:
                return (r = e) ? [ 3 /*break*/ , 4 ] : (n.$r.add(2 /* IsSecondary */), [ 4 /*yield*/ , Po(n) ]);

              case 3:
                i.sent(), r = n.Br.set("Unknown" /* Unknown */), i.label = 4;

              case 4:
                r, i.label = 5;

              case 5:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * If not yet initialized, registers the WatchStream and its network state
 * callback with `remoteStoreImpl`. Returns the existing stream if one is
 * already available.
 *
 * PORTING NOTE: On iOS and Android, the WatchStream gets registered on startup.
 * This is not done on Web to allow it to be tree-shaken.
 */ function rs(t) {
    var e = this;
    return t.Ur || (
    // Create stream (but note that it is not started yet).
    t.Ur = function(t, e, n) {
        var r = O(t);
        return r.br(), new ko(e, r.Hi, r.credentials, r.R, n);
    }(t.datastore, t.asyncQueue, {
        Ii: Go.bind(null, t),
        Ri: zo.bind(null, t),
        _r: Qo.bind(null, t)
    }), t.Mr.push((function(n) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(e, void 0, void 0, (function() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return n ? (t.Ur.sr(), Bo(t) ? Uo(t) : t.Br.set("Unknown" /* Unknown */), [ 3 /*break*/ , 3 ]) : [ 3 /*break*/ , 1 ];

                  case 1:
                    return [ 4 /*yield*/ , t.Ur.stop() ];

                  case 2:
                    e.sent(), Ko(t), e.label = 3;

                  case 3:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }))), t.Ur
    /**
 * If not yet initialized, registers the WriteStream and its network state
 * callback with `remoteStoreImpl`. Returns the existing stream if one is
 * already available.
 *
 * PORTING NOTE: On iOS and Android, the WriteStream gets registered on startup.
 * This is not done on Web to allow it to be tree-shaken.
 */;
}

function is(t) {
    var e = this;
    return t.Qr || (
    // Create stream (but note that it is not started yet).
    t.Qr = function(t, e, n) {
        var r = O(t);
        return r.br(), new xo(e, r.Hi, r.credentials, r.R, n);
    }(t.datastore, t.asyncQueue, {
        Ii: $o.bind(null, t),
        Ri: es.bind(null, t),
        Ir: Zo.bind(null, t),
        Tr: ts.bind(null, t)
    }), t.Mr.push((function(n) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(e, void 0, void 0, (function() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return n ? (t.Qr.sr(), [ 4 /*yield*/ , Yo(t) ]) : [ 3 /*break*/ , 2 ];

                  case 1:
                    // This will start the write stream if necessary.
                    return e.sent(), [ 3 /*break*/ , 4 ];

                  case 2:
                    return [ 4 /*yield*/ , t.Qr.stop() ];

                  case 3:
                    e.sent(), t.kr.length > 0 && (D("RemoteStore", "Stopping write stream with " + t.kr.length + " pending writes"), 
                    t.kr = []), e.label = 4;

                  case 4:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }))), t.Qr
    /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    /**
 * Represents an operation scheduled to be run in the future on an AsyncQueue.
 *
 * It is created via DelayedOperation.createAndSchedule().
 *
 * Supports cancellation (via cancel()) and early execution (via skipDelay()).
 *
 * Note: We implement `PromiseLike` instead of `Promise`, as the `Promise` type
 * in newer versions of TypeScript defines `finally`, which is not available in
 * IE.
 */;
}

var os = /** @class */ function() {
    function t(t, e, n, r, i) {
        this.asyncQueue = t, this.timerId = e, this.targetTimeMs = n, this.op = r, this.removalCallback = i, 
        this.deferred = new vr, this.then = this.deferred.promise.then.bind(this.deferred.promise), 
        // It's normal for the deferred promise to be canceled (due to cancellation)
        // and so we attach a dummy catch callback to avoid
        // 'UnhandledPromiseRejectionWarning' log spam.
        this.deferred.promise.catch((function(t) {}))
        /**
     * Creates and returns a DelayedOperation that has been scheduled to be
     * executed on the provided asyncQueue after the provided delayMs.
     *
     * @param asyncQueue - The queue to schedule the operation on.
     * @param id - A Timer ID identifying the type of operation this is.
     * @param delayMs - The delay (ms) before the operation should be scheduled.
     * @param op - The operation to run.
     * @param removalCallback - A callback to be called synchronously once the
     *   operation is executed or canceled, notifying the AsyncQueue to remove it
     *   from its delayedOperations list.
     *   PORTING NOTE: This exists to prevent making removeDelayedOperation() and
     *   the DelayedOperation class public.
     */;
    }
    return t.createAndSchedule = function(e, n, r, i, o) {
        var s = new t(e, n, Date.now() + r, i, o);
        return s.start(r), s;
    }, 
    /**
     * Starts the timer. This is called immediately after construction by
     * createAndSchedule().
     */
    t.prototype.start = function(t) {
        var e = this;
        this.timerHandle = setTimeout((function() {
            return e.handleDelayElapsed();
        }), t);
    }, 
    /**
     * Queues the operation to run immediately (if it hasn't already been run or
     * canceled).
     */
    t.prototype.skipDelay = function() {
        return this.handleDelayElapsed();
    }, 
    /**
     * Cancels the operation if it hasn't already been executed or canceled. The
     * promise will be rejected.
     *
     * As long as the operation has not yet been run, calling cancel() provides a
     * guarantee that the operation will not be run.
     */
    t.prototype.cancel = function(t) {
        null !== this.timerHandle && (this.clearTimeout(), this.deferred.reject(new T(E.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))));
    }, t.prototype.handleDelayElapsed = function() {
        var t = this;
        this.asyncQueue.enqueueAndForget((function() {
            return null !== t.timerHandle ? (t.clearTimeout(), t.op().then((function(e) {
                return t.deferred.resolve(e);
            }))) : Promise.resolve();
        }));
    }, t.prototype.clearTimeout = function() {
        null !== this.timerHandle && (this.removalCallback(this), clearTimeout(this.timerHandle), 
        this.timerHandle = null);
    }, t;
}();

/**
 * Returns a FirestoreError that can be surfaced to the user if the provided
 * error is an IndexedDbTransactionError. Re-throws the error otherwise.
 */ function ss(t, e) {
    if (A("AsyncQueue", e + ": " + t), _r(t)) return new T(E.UNAVAILABLE, e + ": " + t);
    throw t;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * DocumentSet is an immutable (copy-on-write) collection that holds documents
 * in order specified by the provided comparator. We always add a document key
 * comparator on top of what is provided to guarantee document equality based on
 * the key.
 */ var us = /** @class */ function() {
    /** The default ordering is by key if the comparator is omitted */
    function t(t) {
        // We are adding document key comparator to the end as it's the only
        // guaranteed unique property of a document.
        this.comparator = t ? function(e, n) {
            return t(e, n) || st.comparator(e.key, n.key);
        } : function(t, e) {
            return st.comparator(t.key, e.key);
        }, this.keyedMap = Je(), this.sortedSet = new Ke(this.comparator)
        /**
     * Returns an empty copy of the existing DocumentSet, using the same
     * comparator.
     */;
    }
    return t.emptySet = function(e) {
        return new t(e.comparator);
    }, t.prototype.has = function(t) {
        return null != this.keyedMap.get(t);
    }, t.prototype.get = function(t) {
        return this.keyedMap.get(t);
    }, t.prototype.first = function() {
        return this.sortedSet.minKey();
    }, t.prototype.last = function() {
        return this.sortedSet.maxKey();
    }, t.prototype.isEmpty = function() {
        return this.sortedSet.isEmpty();
    }, 
    /**
     * Returns the index of the provided key in the document set, or -1 if the
     * document key is not present in the set;
     */
    t.prototype.indexOf = function(t) {
        var e = this.keyedMap.get(t);
        return e ? this.sortedSet.indexOf(e) : -1;
    }, Object.defineProperty(t.prototype, "size", {
        get: function() {
            return this.sortedSet.size;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /** Iterates documents in order defined by "comparator" */ t.prototype.forEach = function(t) {
        this.sortedSet.inorderTraversal((function(e, n) {
            return t(e), !1;
        }));
    }, 
    /** Inserts or updates a document with the same key */ t.prototype.add = function(t) {
        // First remove the element if we have it.
        var e = this.delete(t.key);
        return e.copy(e.keyedMap.insert(t.key, t), e.sortedSet.insert(t, null));
    }, 
    /** Deletes a document with a given key */ t.prototype.delete = function(t) {
        var e = this.get(t);
        return e ? this.copy(this.keyedMap.remove(t), this.sortedSet.remove(e)) : this;
    }, t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) return !1;
        if (this.size !== e.size) return !1;
        for (var n = this.sortedSet.getIterator(), r = e.sortedSet.getIterator(); n.hasNext(); ) {
            var i = n.getNext().key, o = r.getNext().key;
            if (!i.isEqual(o)) return !1;
        }
        return !0;
    }, t.prototype.toString = function() {
        var t = [];
        return this.forEach((function(e) {
            t.push(e.toString());
        })), 0 === t.length ? "DocumentSet ()" : "DocumentSet (\n  " + t.join("  \n") + "\n)";
    }, t.prototype.copy = function(e, n) {
        var r = new t;
        return r.comparator = this.comparator, r.keyedMap = e, r.sortedSet = n, r;
    }, t;
}(), as = /** @class */ function() {
    function t() {
        this.Kr = new Ke(st.comparator);
    }
    return t.prototype.track = function(t) {
        var e = t.doc.key, n = this.Kr.get(e);
        n ? 
        // Merge the new change with the existing change.
        0 /* Added */ !== t.type && 3 /* Metadata */ === n.type ? this.Kr = this.Kr.insert(e, t) : 3 /* Metadata */ === t.type && 1 /* Removed */ !== n.type ? this.Kr = this.Kr.insert(e, {
            type: n.type,
            doc: t.doc
        }) : 2 /* Modified */ === t.type && 2 /* Modified */ === n.type ? this.Kr = this.Kr.insert(e, {
            type: 2 /* Modified */ ,
            doc: t.doc
        }) : 2 /* Modified */ === t.type && 0 /* Added */ === n.type ? this.Kr = this.Kr.insert(e, {
            type: 0 /* Added */ ,
            doc: t.doc
        }) : 1 /* Removed */ === t.type && 0 /* Added */ === n.type ? this.Kr = this.Kr.remove(e) : 1 /* Removed */ === t.type && 2 /* Modified */ === n.type ? this.Kr = this.Kr.insert(e, {
            type: 1 /* Removed */ ,
            doc: n.doc
        }) : 0 /* Added */ === t.type && 1 /* Removed */ === n.type ? this.Kr = this.Kr.insert(e, {
            type: 2 /* Modified */ ,
            doc: t.doc
        }) : 
        // This includes these cases, which don't make sense:
        // Added->Added
        // Removed->Removed
        // Modified->Added
        // Removed->Modified
        // Metadata->Added
        // Removed->Metadata
        C() : this.Kr = this.Kr.insert(e, t);
    }, t.prototype.jr = function() {
        var t = [];
        return this.Kr.inorderTraversal((function(e, n) {
            t.push(n);
        })), t;
    }, t;
}(), cs = /** @class */ function() {
    function t(t, e, n, r, i, o, s, u) {
        this.query = t, this.docs = e, this.oldDocs = n, this.docChanges = r, this.mutatedKeys = i, 
        this.fromCache = o, this.syncStateChanged = s, this.excludesMetadataChanges = u
        /** Returns a view snapshot as if all documents in the snapshot were added. */;
    }
    return t.fromInitialDocuments = function(e, n, r, i) {
        var o = [];
        return n.forEach((function(t) {
            o.push({
                type: 0 /* Added */ ,
                doc: t
            });
        })), new t(e, n, us.emptySet(n), o, r, i, 
        /* syncStateChanged= */ !0, 
        /* excludesMetadataChanges= */ !1);
    }, Object.defineProperty(t.prototype, "hasPendingWrites", {
        get: function() {
            return !this.mutatedKeys.isEmpty();
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.isEqual = function(t) {
        if (!(this.fromCache === t.fromCache && this.syncStateChanged === t.syncStateChanged && this.mutatedKeys.isEqual(t.mutatedKeys) && te(this.query, t.query) && this.docs.isEqual(t.docs) && this.oldDocs.isEqual(t.oldDocs))) return !1;
        var e = this.docChanges, n = t.docChanges;
        if (e.length !== n.length) return !1;
        for (var r = 0; r < e.length; r++) if (e[r].type !== n[r].type || !e[r].doc.isEqual(n[r].doc)) return !1;
        return !0;
    }, t;
}(), hs = function() {
    this.Wr = void 0, this.listeners = [];
}, fs = function() {
    this.queries = new mi((function(t) {
        return ee(t);
    }), te), this.onlineState = "Unknown" /* Unknown */ , this.Gr = new Set;
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * DocumentChangeSet keeps track of a set of changes to docs in a query, merging
 * duplicate events for the same doc.
 */ function ls(t, e) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var n, r, i, o, s, u, a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(c) {
            switch (c.label) {
              case 0:
                if (n = O(t), r = e.query, i = !1, (o = n.queries.get(r)) || (i = !0, o = new hs), 
                !i) return [ 3 /*break*/ , 4 ];
                c.label = 1;

              case 1:
                return c.trys.push([ 1, 3, , 4 ]), s = o, [ 4 /*yield*/ , n.onListen(r) ];

              case 2:
                return s.Wr = c.sent(), [ 3 /*break*/ , 4 ];

              case 3:
                return u = c.sent(), a = ss(u, "Initialization of query '" + ne(e.query) + "' failed"), 
                [ 2 /*return*/ , void e.onError(a) ];

              case 4:
                return n.queries.set(r, o), o.listeners.push(e), 
                // Run global snapshot listeners if a consistent snapshot has been emitted.
                e.zr(n.onlineState), o.Wr && e.Hr(o.Wr) && vs(n), [ 2 /*return*/ ];
            }
        }));
    }));
}

function ds(t, e) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var n, r, i, o, s;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(u) {
            return n = O(t), r = e.query, i = !1, (o = n.queries.get(r)) && (s = o.listeners.indexOf(e)) >= 0 && (o.listeners.splice(s, 1), 
            i = 0 === o.listeners.length), i ? [ 2 /*return*/ , (n.queries.delete(r), n.onUnlisten(r)) ] : [ 2 /*return*/ ];
        }));
    }));
}

function ps(t, e) {
    for (var n = O(t), r = !1, i = 0, o = e; i < o.length; i++) {
        var s = o[i], u = s.query, a = n.queries.get(u);
        if (a) {
            for (var c = 0, h = a.listeners; c < h.length; c++) {
                h[c].Hr(s) && (r = !0);
            }
            a.Wr = s;
        }
    }
    r && vs(n);
}

function ys(t, e, n) {
    var r = O(t), i = r.queries.get(e);
    if (i) for (var o = 0, s = i.listeners; o < s.length; o++) {
        s[o].onError(n);
    }
    // Remove all listeners. NOTE: We don't need to call syncEngine.unlisten()
    // after an error.
        r.queries.delete(e);
}

// Call all global snapshot listeners that have been set.
function vs(t) {
    t.Gr.forEach((function(t) {
        t.next();
    }));
}

/**
 * QueryListener takes a series of internal view snapshots and determines
 * when to raise the event.
 *
 * It uses an Observer to dispatch events.
 */ var ms = /** @class */ function() {
    function t(t, e, n) {
        this.query = t, this.Jr = e, 
        /**
             * Initial snapshots (e.g. from cache) may not be propagated to the wrapped
             * observer. This flag is set to true once we've actually raised an event.
             */
        this.Yr = !1, this.Xr = null, this.onlineState = "Unknown" /* Unknown */ , this.options = n || {}
        /**
     * Applies the new ViewSnapshot to this listener, raising a user-facing event
     * if applicable (depending on what changed, whether the user has opted into
     * metadata-only changes, etc.). Returns true if a user-facing event was
     * indeed raised.
     */;
    }
    return t.prototype.Hr = function(t) {
        if (!this.options.includeMetadataChanges) {
            for (
            // Remove the metadata only changes.
            var e = [], n = 0, r = t.docChanges; n < r.length; n++) {
                var i = r[n];
                3 /* Metadata */ !== i.type && e.push(i);
            }
            t = new cs(t.query, t.docs, t.oldDocs, e, t.mutatedKeys, t.fromCache, t.syncStateChanged, 
            /* excludesMetadataChanges= */ !0);
        }
        var o = !1;
        return this.Yr ? this.Zr(t) && (this.Jr.next(t), o = !0) : this.eo(t, this.onlineState) && (this.no(t), 
        o = !0), this.Xr = t, o;
    }, t.prototype.onError = function(t) {
        this.Jr.error(t);
    }, 
    /** Returns whether a snapshot was raised. */ t.prototype.zr = function(t) {
        this.onlineState = t;
        var e = !1;
        return this.Xr && !this.Yr && this.eo(this.Xr, t) && (this.no(this.Xr), e = !0), 
        e;
    }, t.prototype.eo = function(t, e) {
        // Always raise the first event when we're synced
        if (!t.fromCache) return !0;
        // NOTE: We consider OnlineState.Unknown as online (it should become Offline
        // or Online if we wait long enough).
                var n = "Offline" /* Offline */ !== e;
        // Don't raise the event if we're online, aren't synced yet (checked
        // above) and are waiting for a sync.
                return !(this.options.so && n || t.docs.isEmpty() && "Offline" /* Offline */ !== e);
        // Raise data from cache if we have any documents or we are offline
        }, t.prototype.Zr = function(t) {
        // We don't need to handle includeDocumentMetadataChanges here because
        // the Metadata only changes have already been stripped out if needed.
        // At this point the only changes we will see are the ones we should
        // propagate.
        if (t.docChanges.length > 0) return !0;
        var e = this.Xr && this.Xr.hasPendingWrites !== t.hasPendingWrites;
        return !(!t.syncStateChanged && !e) && !0 === this.options.includeMetadataChanges;
        // Generally we should have hit one of the cases above, but it's possible
        // to get here if there were only metadata docChanges and they got
        // stripped out.
        }, t.prototype.no = function(t) {
        t = cs.fromInitialDocuments(t.query, t.docs, t.mutatedKeys, t.fromCache), this.Yr = !0, 
        this.Jr.next(t);
    }, t;
}(), gs = /** @class */ function() {
    function t(t, 
    // How many bytes this element takes to store in the bundle.
    e) {
        this.payload = t, this.byteLength = e;
    }
    return t.prototype.io = function() {
        return "metadata" in this.payload;
    }, t;
}(), ws = /** @class */ function() {
    function t(t) {
        this.R = t;
    }
    return t.prototype.qn = function(t) {
        return Tn(this.R, t);
    }, 
    /**
     * Converts a BundleDocument to a MutableDocument.
     */
    t.prototype.Un = function(t) {
        return t.metadata.exists ? xn(this.R, t.document, !1) : _t.newNoDocument(this.qn(t.metadata.name), this.Qn(t.metadata.readTime));
    }, t.prototype.Qn = function(t) {
        return bn(t);
    }, t;
}(), bs = /** @class */ function() {
    function t(t, e, n) {
        this.ro = t, this.localStore = e, this.R = n, 
        /** Batched queries to be saved into storage */
        this.queries = [], 
        /** Batched documents to be saved into storage */
        this.documents = [], this.progress = Is(t)
        /**
     * Adds an element from the bundle to the loader.
     *
     * Returns a new progress if adding the element leads to a new progress,
     * otherwise returns null.
     */;
    }
    return t.prototype.oo = function(t) {
        this.progress.bytesLoaded += t.byteLength;
        var e = this.progress.documentsLoaded;
        return t.payload.namedQuery ? this.queries.push(t.payload.namedQuery) : t.payload.documentMetadata ? (this.documents.push({
            metadata: t.payload.documentMetadata
        }), t.payload.documentMetadata.exists || ++e) : t.payload.document && (this.documents[this.documents.length - 1].document = t.payload.document, 
        ++e), e !== this.progress.documentsLoaded ? (this.progress.documentsLoaded = e, 
        Object.assign({}, this.progress)) : null;
    }, t.prototype.co = function(t) {
        for (var e = new Map, n = new ws(this.R), r = 0, i = t; r < i.length; r++) {
            var o = i[r];
            if (o.metadata.queries) for (var s = n.qn(o.metadata.name), u = 0, a = o.metadata.queries; u < a.length; u++) {
                var c = a[u], h = (e.get(c) || en()).add(s);
                e.set(c, h);
            }
        }
        return e;
    }, 
    /**
     * Update the progress to 'Success' and return the updated progress.
     */
    t.prototype.complete = function() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
            var t, e, n, r, i;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(o) {
                switch (o.label) {
                  case 0:
                    return [ 4 /*yield*/ , Yi(this.localStore, new ws(this.R), this.documents, this.ro.id) ];

                  case 1:
                    t = o.sent(), e = this.co(this.documents), n = 0, r = this.queries, o.label = 2;

                  case 2:
                    return n < r.length ? (i = r[n], [ 4 /*yield*/ , Xi(this.localStore, i, e.get(i.name)) ]) : [ 3 /*break*/ , 5 ];

                  case 3:
                    o.sent(), o.label = 4;

                  case 4:
                    return n++, [ 3 /*break*/ , 2 ];

                  case 5:
                    return [ 2 /*return*/ , (this.progress.taskState = "Success", new Ci(Object.assign({}, this.progress), t)) ];
                }
            }));
        }));
    }, t;
}();

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A complete element in the bundle stream, together with the byte length it
 * occupies in the stream.
 */
/**
 * Returns a `LoadBundleTaskProgress` representing the initial progress of
 * loading a bundle.
 */
function Is(t) {
    return {
        taskState: "Running",
        documentsLoaded: 0,
        bytesLoaded: 0,
        totalDocuments: t.totalDocuments,
        totalBytes: t.totalBytes
    };
}

/**
 * Returns a `LoadBundleTaskProgress` representing the progress that the loading
 * has succeeded.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _s = function(t) {
    this.key = t;
}, Es = function(t) {
    this.key = t;
}, Ts = /** @class */ function() {
    function t(t, 
    /** Documents included in the remote target */
    e) {
        this.query = t, this.uo = e, this.ao = null, 
        /**
             * A flag whether the view is current with the backend. A view is considered
             * current after it has seen the current flag from the backend and did not
             * lose consistency within the watch stream (e.g. because of an existence
             * filter mismatch).
             */
        this.current = !1, 
        /** Documents in the view but not in the remote target */
        this.ho = en(), 
        /** Document Keys that have local changes */
        this.mutatedKeys = en(), this.lo = ie(t), this.fo = new us(this.lo);
    }
    return Object.defineProperty(t.prototype, "wo", {
        /**
         * The set of remote documents that the server has told us belongs to the target associated with
         * this view.
         */
        get: function() {
            return this.uo;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Iterates over a set of doc changes, applies the query limit, and computes
     * what the new results should be, what the changes were, and whether we may
     * need to go back to the local cache for more results. Does not make any
     * changes to the view.
     * @param docChanges - The doc changes to apply to this view.
     * @param previousChanges - If this is being called with a refill, then start
     *        with this set of docs and changes instead of the current view.
     * @returns a new set of docs, changes, and refill flag.
     */
    t.prototype._o = function(t, e) {
        var n = this, r = e ? e.mo : new as, i = e ? e.fo : this.fo, o = e ? e.mutatedKeys : this.mutatedKeys, s = i, u = !1, a = Qt(this.query) && i.size === this.query.limit ? i.last() : null, c = Wt(this.query) && i.size === this.query.limit ? i.first() : null;
        // Drop documents out to meet limit/limitToLast requirement.
        if (t.inorderTraversal((function(t, e) {
            var h = i.get(t), f = re(n.query, e) ? e : null, l = !!h && n.mutatedKeys.has(h.key), d = !!f && (f.hasLocalMutations || 
            // We only consider committed mutations for documents that were
            // mutated during the lifetime of the view.
            n.mutatedKeys.has(f.key) && f.hasCommittedMutations), p = !1;
            // Calculate change
            h && f ? h.data.isEqual(f.data) ? l !== d && (r.track({
                type: 3 /* Metadata */ ,
                doc: f
            }), p = !0) : n.yo(h, f) || (r.track({
                type: 2 /* Modified */ ,
                doc: f
            }), p = !0, (a && n.lo(f, a) > 0 || c && n.lo(f, c) < 0) && (
            // This doc moved from inside the limit to outside the limit.
            // That means there may be some other doc in the local cache
            // that should be included instead.
            u = !0)) : !h && f ? (r.track({
                type: 0 /* Added */ ,
                doc: f
            }), p = !0) : h && !f && (r.track({
                type: 1 /* Removed */ ,
                doc: h
            }), p = !0, (a || c) && (
            // A doc was removed from a full limit query. We'll need to
            // requery from the local cache to see if we know about some other
            // doc that should be in the results.
            u = !0)), p && (f ? (s = s.add(f), o = d ? o.add(t) : o.delete(t)) : (s = s.delete(t), 
            o = o.delete(t)));
        })), Qt(this.query) || Wt(this.query)) for (;s.size > this.query.limit; ) {
            var h = Qt(this.query) ? s.last() : s.first();
            s = s.delete(h.key), o = o.delete(h.key), r.track({
                type: 1 /* Removed */ ,
                doc: h
            });
        }
        return {
            fo: s,
            mo: r,
            Nn: u,
            mutatedKeys: o
        };
    }, t.prototype.yo = function(t, e) {
        // We suppress the initial change event for documents that were modified as
        // part of a write acknowledgment (e.g. when the value of a server transform
        // is applied) as Watch will send us the same document again.
        // By suppressing the event, we only raise two user visible events (one with
        // `hasPendingWrites` and the final state of the document) instead of three
        // (one with `hasPendingWrites`, the modified document with
        // `hasPendingWrites` and the final state of the document).
        return t.hasLocalMutations && e.hasCommittedMutations && !e.hasLocalMutations;
    }, 
    /**
     * Updates the view with the given ViewDocumentChanges and optionally updates
     * limbo docs and sync state from the provided target change.
     * @param docChanges - The set of changes to make to the view's docs.
     * @param updateLimboDocuments - Whether to update limbo documents based on
     *        this change.
     * @param targetChange - A target change to apply for computing limbo docs and
     *        sync state.
     * @returns A new ViewChange with the given docs, changes, and sync state.
     */
    // PORTING NOTE: The iOS/Android clients always compute limbo document changes.
    t.prototype.applyChanges = function(t, e, n) {
        var r = this, i = this.fo;
        this.fo = t.fo, this.mutatedKeys = t.mutatedKeys;
        // Sort changes based on type and query comparator
        var o = t.mo.jr();
        o.sort((function(t, e) {
            return function(t, e) {
                var n = function(t) {
                    switch (t) {
                      case 0 /* Added */ :
                        return 1;

                      case 2 /* Modified */ :
                      case 3 /* Metadata */ :
                        // A metadata change is converted to a modified change at the public
                        // api layer.  Since we sort by document key and then change type,
                        // metadata and modified changes must be sorted equivalently.
                        return 2;

                      case 1 /* Removed */ :
                        return 0;

                      default:
                        return C();
                    }
                };
                return n(t) - n(e);
            }(t.type, e.type) || r.lo(t.doc, e.doc);
        })), this.po(n);
        var s = e ? this.Eo() : [], u = 0 === this.ho.size && this.current ? 1 /* Synced */ : 0 /* Local */ , a = u !== this.ao;
        return this.ao = u, 0 !== o.length || a ? {
            snapshot: new cs(this.query, t.fo, i, o, t.mutatedKeys, 0 /* Local */ === u, a, 
            /* excludesMetadataChanges= */ !1),
            To: s
        } : {
            To: s
        };
        // no changes
        }, 
    /**
     * Applies an OnlineState change to the view, potentially generating a
     * ViewChange if the view's syncState changes as a result.
     */
    t.prototype.zr = function(t) {
        return this.current && "Offline" /* Offline */ === t ? (
        // If we're offline, set `current` to false and then call applyChanges()
        // to refresh our syncState and generate a ViewChange as appropriate. We
        // are guaranteed to get a new TargetChange that sets `current` back to
        // true once the client is back online.
        this.current = !1, this.applyChanges({
            fo: this.fo,
            mo: new as,
            mutatedKeys: this.mutatedKeys,
            Nn: !1
        }, 
        /* updateLimboDocuments= */ !1)) : {
            To: []
        };
    }, 
    /**
     * Returns whether the doc for the given key should be in limbo.
     */
    t.prototype.Io = function(t) {
        // If the remote end says it's part of this query, it's not in limbo.
        return !this.uo.has(t) && 
        // The local store doesn't think it's a result, so it shouldn't be in limbo.
        !!this.fo.has(t) && !this.fo.get(t).hasLocalMutations;
    }, 
    /**
     * Updates syncedDocuments, current, and limbo docs based on the given change.
     * Returns the list of changes to which docs are in limbo.
     */
    t.prototype.po = function(t) {
        var e = this;
        t && (t.addedDocuments.forEach((function(t) {
            return e.uo = e.uo.add(t);
        })), t.modifiedDocuments.forEach((function(t) {})), t.removedDocuments.forEach((function(t) {
            return e.uo = e.uo.delete(t);
        })), this.current = t.current);
    }, t.prototype.Eo = function() {
        var t = this;
        // We can only determine limbo documents when we're in-sync with the server.
                if (!this.current) return [];
        // TODO(klimt): Do this incrementally so that it's not quadratic when
        // updating many documents.
                var e = this.ho;
        this.ho = en(), this.fo.forEach((function(e) {
            t.Io(e.key) && (t.ho = t.ho.add(e.key));
        }));
        // Diff the new limbo docs with the old limbo docs.
        var n = [];
        return e.forEach((function(e) {
            t.ho.has(e) || n.push(new Es(e));
        })), this.ho.forEach((function(t) {
            e.has(t) || n.push(new _s(t));
        })), n;
    }, 
    /**
     * Update the in-memory state of the current view with the state read from
     * persistence.
     *
     * We update the query view whenever a client's primary status changes:
     * - When a client transitions from primary to secondary, it can miss
     *   LocalStorage updates and its query views may temporarily not be
     *   synchronized with the state on disk.
     * - For secondary to primary transitions, the client needs to update the list
     *   of `syncedDocuments` since secondary clients update their query views
     *   based purely on synthesized RemoteEvents.
     *
     * @param queryResult.documents - The documents that match the query according
     * to the LocalStore.
     * @param queryResult.remoteKeys - The keys of the documents that match the
     * query according to the backend.
     *
     * @returns The ViewChange that resulted from this synchronization.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.Ao = function(t) {
        this.uo = t.Bn, this.ho = en();
        var e = this._o(t.documents);
        return this.applyChanges(e, /*updateLimboDocuments=*/ !0);
    }, 
    /**
     * Returns a view snapshot as if this query was just listened to. Contains
     * a document add for every existing document and the `fromCache` and
     * `hasPendingWrites` status of the already established view.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.Ro = function() {
        return cs.fromInitialDocuments(this.query, this.fo, this.mutatedKeys, 0 /* Local */ === this.ao);
    }, t;
}(), Ss = function(
/**
     * The query itself.
     */
t, 
/**
     * The target number created by the client that is used in the watch
     * stream to identify this query.
     */
e, 
/**
     * The view is responsible for computing the final merged truth of what
     * docs are in the query. It gets notified of local and remote changes,
     * and applies the query filters and limits to determine the most correct
     * possible results.
     */
n) {
    this.query = t, this.targetId = e, this.view = n;
}, Ns = function(t) {
    this.key = t, 
    /**
             * Set to true once we've received a document. This is used in
             * getRemoteKeysForTarget() and ultimately used by WatchChangeAggregator to
             * decide whether it needs to manufacture a delete event for the target once
             * the target is CURRENT.
             */
    this.bo = !1;
}, Ds = /** @class */ function() {
    function t(t, e, n, 
    // PORTING NOTE: Manages state synchronization in multi-tab environments.
    r, i, o) {
        this.localStore = t, this.remoteStore = e, this.eventManager = n, this.sharedClientState = r, 
        this.currentUser = i, this.maxConcurrentLimboResolutions = o, this.vo = {}, this.Po = new mi((function(t) {
            return ee(t);
        }), te), this.Vo = new Map, 
        /**
             * The keys of documents that are in limbo for which we haven't yet started a
             * limbo resolution query. The strings in this set are the result of calling
             * `key.path.canonicalString()` where `key` is a `DocumentKey` object.
             *
             * The `Set` type was chosen because it provides efficient lookup and removal
             * of arbitrary elements and it also maintains insertion order, providing the
             * desired queue-like FIFO semantics.
             */
        this.So = new Set, 
        /**
             * Keeps track of the target ID for each document that is in limbo with an
             * active target.
             */
        this.Do = new Ke(st.comparator), 
        /**
             * Keeps track of the information about an active limbo resolution for each
             * active target ID that was started for the purpose of limbo resolution.
             */
        this.Co = new Map, this.No = new $i, 
        /** Stores user completion handlers, indexed by User and BatchId. */
        this.xo = {}, 
        /** Stores user callbacks waiting for all pending writes to be acknowledged. */
        this.Fo = new Map, this.ko = oi.Yt(), this.onlineState = "Unknown" /* Unknown */ , 
        // The primary state is set to `true` or `false` immediately after Firestore
        // startup. In the interim, a client should only be considered primary if
        // `isPrimary` is true.
        this.Oo = void 0;
    }
    return Object.defineProperty(t.prototype, "isPrimaryClient", {
        get: function() {
            return !0 === this.Oo;
        },
        enumerable: !1,
        configurable: !0
    }), t;
}();

/**
 * Initiates the new listen, resolves promise when listen enqueued to the
 * server. All the subsequent view snapshots or errors are sent to the
 * subscribed handlers. Returns the initial snapshot.
 */
function As(t, e) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var n, r, i, o, s, u;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(a) {
            switch (a.label) {
              case 0:
                return n = ru(t), (o = n.Po.get(e)) ? (
                // PORTING NOTE: With Multi-Tab Web, it is possible that a query view
                // already exists when EventManager calls us for the first time. This
                // happens when the primary tab is already listening to this query on
                // behalf of another tab and the user of the primary also starts listening
                // to the query. EventManager will not have an assigned target ID in this
                // case and calls `listen` to obtain this ID.
                r = o.targetId, n.sharedClientState.addLocalQueryTarget(r), i = o.view.Ro(), [ 3 /*break*/ , 4 ]) : [ 3 /*break*/ , 1 ];

              case 1:
                return [ 4 /*yield*/ , Ki(n.localStore, $t(e)) ];

              case 2:
                return s = a.sent(), u = n.sharedClientState.addLocalQueryTarget(s.targetId), r = s.targetId, 
                [ 4 /*yield*/ , ks(n, e, r, "current" === u) ];

              case 3:
                i = a.sent(), n.isPrimaryClient && Mo(n.remoteStore, s), a.label = 4;

              case 4:
                return [ 2 /*return*/ , i ];
            }
        }));
    }));
}

/**
 * Registers a view for a previously unknown query and computes its initial
 * snapshot.
 */ function ks(t, e, n, r) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var i, o, s, u, a, c;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(h) {
            switch (h.label) {
              case 0:
                // PORTING NOTE: On Web only, we inject the code that registers new Limbo
                // targets based on view changes. This allows us to only depend on Limbo
                // changes when user code includes queries.
                return t.$o = function(e, n, r) {
                    return function(t, e, n, r) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
                            var i, o, s;
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(u) {
                                switch (u.label) {
                                  case 0:
                                    return i = e.view._o(n), i.Nn ? [ 4 /*yield*/ , zi(t.localStore, e.query, 
                                    /* usePreviousResults= */ !1).then((function(t) {
                                        var n = t.documents;
                                        return e.view._o(n, i);
                                    })) ] : [ 3 /*break*/ , 2 ];

                                  case 1:
                                    // The query has a limit and some docs were removed, so we need
                                    // to re-run the query against the local store to make sure we
                                    // didn't lose any good docs that had been past the limit.
                                    i = u.sent(), u.label = 2;

                                  case 2:
                                    return o = r && r.targetChanges.get(e.targetId), s = e.view.applyChanges(i, 
                                    /* updateLimboDocuments= */ t.isPrimaryClient, o), [ 2 /*return*/ , (js(t, e.targetId, s.To), 
                                    s.snapshot) ];
                                }
                            }));
                        }));
                    }(t, e, n, r);
                }, [ 4 /*yield*/ , zi(t.localStore, e, 
                /* usePreviousResults= */ !0) ];

              case 1:
                return i = h.sent(), o = new Ts(e, i.Bn), s = o._o(i.documents), u = sn.createSynthesizedTargetChangeForCurrentChange(n, r && "Offline" /* Offline */ !== t.onlineState), 
                a = o.applyChanges(s, 
                /* updateLimboDocuments= */ t.isPrimaryClient, u), js(t, n, a.To), c = new Ss(e, n, o), 
                [ 2 /*return*/ , (t.Po.set(e, c), t.Vo.has(n) ? t.Vo.get(n).push(e) : t.Vo.set(n, [ e ]), 
                a.snapshot) ];
            }
        }));
    }));
}

/** Stops listening to the query. */ function xs(t, e) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var n, r, i;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(o) {
            switch (o.label) {
              case 0:
                return n = O(t), r = n.Po.get(e), (i = n.Vo.get(r.targetId)).length > 1 ? [ 2 /*return*/ , (n.Vo.set(r.targetId, i.filter((function(t) {
                    return !te(t, e);
                }))), void n.Po.delete(e)) ] : n.isPrimaryClient ? (
                // We need to remove the local query target first to allow us to verify
                // whether any other client is still interested in this target.
                n.sharedClientState.removeLocalQueryTarget(r.targetId), n.sharedClientState.isActiveQueryTarget(r.targetId) ? [ 3 /*break*/ , 2 ] : [ 4 /*yield*/ , Gi(n.localStore, r.targetId, 
                /*keepPersistedTargetData=*/ !1).then((function() {
                    n.sharedClientState.clearQueryState(r.targetId), Fo(n.remoteStore, r.targetId), 
                    Us(n, r.targetId);
                })).catch(hi) ]) : [ 3 /*break*/ , 3 ];

              case 1:
                o.sent(), o.label = 2;

              case 2:
                return [ 3 /*break*/ , 5 ];

              case 3:
                return Us(n, r.targetId), [ 4 /*yield*/ , Gi(n.localStore, r.targetId, 
                /*keepPersistedTargetData=*/ !0) ];

              case 4:
                o.sent(), o.label = 5;

              case 5:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Initiates the write of local mutation batch which involves adding the
 * writes to the mutation queue, notifying the remote store about new
 * mutations and raising events for any changes this write caused.
 *
 * The promise returned by this call is resolved when the above steps
 * have completed, *not* when the write was acked by the backend. The
 * userCallback is resolved once the write was acked/rejected by the
 * backend (or failed locally for any other reason).
 */ function Cs(t, e, n) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var r, i, o, s;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(u) {
            switch (u.label) {
              case 0:
                r = iu(t), u.label = 1;

              case 1:
                return u.trys.push([ 1, 5, , 6 ]), [ 4 /*yield*/ , function(t, e) {
                    var n, r = O(t), i = q.now(), o = e.reduce((function(t, e) {
                        return t.add(e.key);
                    }), en());
                    return r.persistence.runTransaction("Locally write mutations", "readwrite", (function(t) {
                        return r.Mn.pn(t, o).next((function(o) {
                            n = o;
                            for (
                            // For non-idempotent mutations (such as `FieldValue.increment()`),
                            // we record the base state in a separate patch mutation. This is
                            // later used to guarantee consistent values and prevents flicker
                            // even if the backend sends us an update that already includes our
                            // transform.
                            var s = [], u = 0, a = e; u < a.length; u++) {
                                var c = a[u], h = Ae(c, n.get(c.key));
                                null != h && 
                                // NOTE: The base state should only be applied if there's some
                                // existing document to override, so use a Precondition of
                                // exists=true
                                s.push(new Re(c.key, h, It(h.toProto().mapValue), Ee.exists(!0)));
                            }
                            return r._n.addMutationBatch(t, i, s, e);
                        }));
                    })).then((function(t) {
                        return t.applyToLocalDocumentSet(n), {
                            batchId: t.batchId,
                            changes: n
                        };
                    }));
                }(r.localStore, e) ];

              case 2:
                return i = u.sent(), r.sharedClientState.addPendingMutation(i.batchId), function(t, e, n) {
                    var r = t.xo[t.currentUser.toKey()];
                    r || (r = new Ke(M)), r = r.insert(e, n), t.xo[t.currentUser.toKey()] = r;
                }(r, i.batchId, n), [ 4 /*yield*/ , zs(r, i.changes) ];

              case 3:
                return u.sent(), [ 4 /*yield*/ , Yo(r.remoteStore) ];

              case 4:
                return u.sent(), [ 3 /*break*/ , 6 ];

              case 5:
                return o = u.sent(), s = ss(o, "Failed to persist write"), n.reject(s), [ 3 /*break*/ , 6 ];

              case 6:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Applies one remote event to the sync engine, notifying any views of the
 * changes, and releasing any pending mutation batches that would become
 * visible because of the snapshot version the remote event contains.
 */ function Rs(t, e) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var n, r;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(i) {
            switch (i.label) {
              case 0:
                n = O(t), i.label = 1;

              case 1:
                return i.trys.push([ 1, 4, , 6 ]), [ 4 /*yield*/ , Ui(n.localStore, e) ];

              case 2:
                return r = i.sent(), 
                // Update `receivedDocument` as appropriate for any limbo targets.
                e.targetChanges.forEach((function(t, e) {
                    var r = n.Co.get(e);
                    r && (
                    // Since this is a limbo resolution lookup, it's for a single document
                    // and it could be added, modified, or removed, but not a combination.
                    R(t.addedDocuments.size + t.modifiedDocuments.size + t.removedDocuments.size <= 1), 
                    t.addedDocuments.size > 0 ? r.bo = !0 : t.modifiedDocuments.size > 0 ? R(r.bo) : t.removedDocuments.size > 0 && (R(r.bo), 
                    r.bo = !1));
                })), [ 4 /*yield*/ , zs(n, r, e) ];

              case 3:
                // Update `receivedDocument` as appropriate for any limbo targets.
                return i.sent(), [ 3 /*break*/ , 6 ];

              case 4:
                return [ 4 /*yield*/ , hi(i.sent()) ];

              case 5:
                return i.sent(), [ 3 /*break*/ , 6 ];

              case 6:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Applies an OnlineState change to the sync engine and notifies any views of
 * the change.
 */ function Os(t, e, n) {
    var r = O(t);
    // If we are the secondary client, we explicitly ignore the remote store's
    // online state (the local client may go offline, even though the primary
    // tab remains online) and only apply the primary tab's online state from
    // SharedClientState.
        if (r.isPrimaryClient && 0 /* RemoteStore */ === n || !r.isPrimaryClient && 1 /* SharedClientState */ === n) {
        var i = [];
        r.Po.forEach((function(t, n) {
            var r = n.view.zr(e);
            r.snapshot && i.push(r.snapshot);
        })), function(t, e) {
            var n = O(t);
            n.onlineState = e;
            var r = !1;
            n.queries.forEach((function(t, n) {
                for (var i = 0, o = n.listeners; i < o.length; i++) {
                    // Run global snapshot listeners if a consistent snapshot has been emitted.
                    o[i].zr(e) && (r = !0);
                }
            })), r && vs(n);
        }(r.eventManager, e), i.length && r.vo._r(i), r.onlineState = e, r.isPrimaryClient && r.sharedClientState.setOnlineState(e);
    }
}

/**
 * Rejects the listen for the given targetID. This can be triggered by the
 * backend for any active target.
 *
 * @param syncEngine - The sync engine implementation.
 * @param targetId - The targetID corresponds to one previously initiated by the
 * user as part of TargetData passed to listen() on RemoteStore.
 * @param err - A description of the condition that has forced the rejection.
 * Nearly always this will be an indication that the user is no longer
 * authorized to see the data matching the target.
 */ function Ls(t, e, n) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var r, i, o, s, u, a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(c) {
            switch (c.label) {
              case 0:
                // PORTING NOTE: Multi-tab only.
                return (r = O(t)).sharedClientState.updateQueryState(e, "rejected", n), i = r.Co.get(e), 
                (o = i && i.key) ? (s = (s = new Ke(st.comparator)).insert(o, _t.newNoDocument(o, U.min())), 
                u = en().add(o), a = new on(U.min(), 
                /* targetChanges= */ new Map, 
                /* targetMismatches= */ new Qe(M), s, u), [ 4 /*yield*/ , Rs(r, a) ]) : [ 3 /*break*/ , 2 ];

              case 1:
                return c.sent(), 
                // Since this query failed, we won't want to manually unlisten to it.
                // We only remove it from bookkeeping after we successfully applied the
                // RemoteEvent. If `applyRemoteEvent()` throws, we want to re-listen to
                // this query when the RemoteStore restarts the Watch stream, which should
                // re-trigger the target failure.
                r.Do = r.Do.remove(o), r.Co.delete(e), Gs(r), [ 3 /*break*/ , 4 ];

              case 2:
                return [ 4 /*yield*/ , Gi(r.localStore, e, 
                /* keepPersistedTargetData */ !1).then((function() {
                    return Us(r, e, n);
                })).catch(hi) ];

              case 3:
                c.sent(), c.label = 4;

              case 4:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

function Ps(t, e) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var n, r, i;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(o) {
            switch (o.label) {
              case 0:
                n = O(t), r = e.batch.batchId, o.label = 1;

              case 1:
                return o.trys.push([ 1, 4, , 6 ]), [ 4 /*yield*/ , Vi(n.localStore, e) ];

              case 2:
                return i = o.sent(), 
                // The local store may or may not be able to apply the write result and
                // raise events immediately (depending on whether the watcher is caught
                // up), so we raise user callbacks first so that they consistently happen
                // before listen events.
                qs(n, r, /*error=*/ null), Vs(n, r), n.sharedClientState.updateMutationState(r, "acknowledged"), 
                [ 4 /*yield*/ , zs(n, i) ];

              case 3:
                // The local store may or may not be able to apply the write result and
                // raise events immediately (depending on whether the watcher is caught
                // up), so we raise user callbacks first so that they consistently happen
                // before listen events.
                return o.sent(), [ 3 /*break*/ , 6 ];

              case 4:
                return [ 4 /*yield*/ , hi(o.sent()) ];

              case 5:
                return o.sent(), [ 3 /*break*/ , 6 ];

              case 6:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

function Ms(t, e, n) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var r, i;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(o) {
            switch (o.label) {
              case 0:
                r = O(t), o.label = 1;

              case 1:
                return o.trys.push([ 1, 4, , 6 ]), [ 4 /*yield*/ , function(t, e) {
                    var n = O(t);
                    return n.persistence.runTransaction("Reject batch", "readwrite-primary", (function(t) {
                        var r;
                        return n._n.lookupMutationBatch(t, e).next((function(e) {
                            return R(null !== e), r = e.keys(), n._n.removeMutationBatch(t, e);
                        })).next((function() {
                            return n._n.performConsistencyCheck(t);
                        })).next((function() {
                            return n.Mn.pn(t, r);
                        }));
                    }));
                }(r.localStore, e) ];

              case 2:
                return i = o.sent(), 
                // The local store may or may not be able to apply the write result and
                // raise events immediately (depending on whether the watcher is caught up),
                // so we raise user callbacks first so that they consistently happen before
                // listen events.
                qs(r, e, n), Vs(r, e), r.sharedClientState.updateMutationState(e, "rejected", n), 
                [ 4 /*yield*/ , zs(r, i) ];

              case 3:
                // The local store may or may not be able to apply the write result and
                // raise events immediately (depending on whether the watcher is caught up),
                // so we raise user callbacks first so that they consistently happen before
                // listen events.
                return o.sent(), [ 3 /*break*/ , 6 ];

              case 4:
                return [ 4 /*yield*/ , hi(o.sent()) ];

              case 5:
                return o.sent(), [ 3 /*break*/ , 6 ];

              case 6:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Registers a user callback that resolves when all pending mutations at the moment of calling
 * are acknowledged .
 */ function Fs(t, e) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var n, r, i, o, s;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(u) {
            switch (u.label) {
              case 0:
                jo((n = O(t)).remoteStore) || D("SyncEngine", "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."), 
                u.label = 1;

              case 1:
                return u.trys.push([ 1, 3, , 4 ]), [ 4 /*yield*/ , function(t) {
                    var e = O(t);
                    return e.persistence.runTransaction("Get highest unacknowledged batch id", "readonly", (function(t) {
                        return e._n.getHighestUnacknowledgedBatchId(t);
                    }));
                }(n.localStore) ];

              case 2:
                return -1 === (r = u.sent()) ? [ 2 /*return*/ , void e.resolve() ] : ((i = n.Fo.get(r) || []).push(e), 
                n.Fo.set(r, i), [ 3 /*break*/ , 4 ]);

              case 3:
                return o = u.sent(), s = ss(o, "Initialization of waitForPendingWrites() operation failed"), 
                e.reject(s), [ 3 /*break*/ , 4 ];

              case 4:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Triggers the callbacks that are waiting for this batch id to get acknowledged by server,
 * if there are any.
 */ function Vs(t, e) {
    (t.Fo.get(e) || []).forEach((function(t) {
        t.resolve();
    })), t.Fo.delete(e)
    /** Reject all outstanding callbacks waiting for pending writes to complete. */;
}

function qs(t, e, n) {
    var r = O(t), i = r.xo[r.currentUser.toKey()];
    // NOTE: Mutations restored from persistence won't have callbacks, so it's
    // okay for there to be no callback for this ID.
    if (i) {
        var o = i.get(e);
        o && (n ? o.reject(n) : o.resolve(), i = i.remove(e)), r.xo[r.currentUser.toKey()] = i;
    }
}

function Us(t, e, n) {
    void 0 === n && (n = null), t.sharedClientState.removeLocalQueryTarget(e);
    for (var r = 0, i = t.Vo.get(e); r < i.length; r++) {
        var o = i[r];
        t.Po.delete(o), n && t.vo.Mo(o, n);
    }
    t.Vo.delete(e), t.isPrimaryClient && t.No.Zn(e).forEach((function(e) {
        t.No.containsKey(e) || 
        // We removed the last reference for this key
        Bs(t, e);
    }));
}

function Bs(t, e) {
    t.So.delete(e.path.canonicalString());
    // It's possible that the target already got removed because the query failed. In that case,
    // the key won't exist in `limboTargetsByKey`. Only do the cleanup if we still have the target.
    var n = t.Do.get(e);
    null !== n && (Fo(t.remoteStore, n), t.Do = t.Do.remove(e), t.Co.delete(n), Gs(t));
}

function js(t, e, n) {
    for (var r = 0, i = n; r < i.length; r++) {
        var o = i[r];
        o instanceof _s ? (t.No.addReference(o.key, e), Ks(t, o)) : o instanceof Es ? (D("SyncEngine", "Document no longer in limbo: " + o.key), 
        t.No.removeReference(o.key, e), t.No.containsKey(o.key) || 
        // We removed the last reference for this key
        Bs(t, o.key)) : C();
    }
}

function Ks(t, e) {
    var n = e.key, r = n.path.canonicalString();
    t.Do.get(n) || t.So.has(r) || (D("SyncEngine", "New document in limbo: " + n), t.So.add(r), 
    Gs(t));
}

/**
 * Starts listens for documents in limbo that are enqueued for resolution,
 * subject to a maximum number of concurrent resolutions.
 *
 * Without bounding the number of concurrent resolutions, the server can fail
 * with "resource exhausted" errors which can lead to pathological client
 * behavior as seen in https://github.com/firebase/firebase-js-sdk/issues/2683.
 */ function Gs(t) {
    for (;t.So.size > 0 && t.Do.size < t.maxConcurrentLimboResolutions; ) {
        var e = t.So.values().next().value;
        t.So.delete(e);
        var n = new st(z.fromString(e)), r = t.ko.next();
        t.Co.set(r, new Ns(n)), t.Do = t.Do.insert(n, r), Mo(t.remoteStore, new Cr($t(zt(n.path)), r, 2 /* LimboResolution */ , _.o));
    }
}

function zs(t, e, n) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var r, i, o, s;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(u) {
            switch (u.label) {
              case 0:
                return r = O(t), i = [], o = [], s = [], r.Po.isEmpty() ? [ 3 /*break*/ , 3 ] : (r.Po.forEach((function(t, u) {
                    s.push(r.$o(u, e, n).then((function(t) {
                        if (t) {
                            r.isPrimaryClient && r.sharedClientState.updateQueryState(u.targetId, t.fromCache ? "not-current" : "current"), 
                            i.push(t);
                            var e = Oi.Pn(u.targetId, t);
                            o.push(e);
                        }
                    })));
                })), [ 4 /*yield*/ , Promise.all(s) ]);

              case 1:
                return u.sent(), r.vo._r(i), [ 4 /*yield*/ , function(t, e) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
                        var n, r, i, o, s, u, a, c, h;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(f) {
                            switch (f.label) {
                              case 0:
                                n = O(t), f.label = 1;

                              case 1:
                                return f.trys.push([ 1, 3, , 4 ]), [ 4 /*yield*/ , n.persistence.runTransaction("notifyLocalViewChanges", "readwrite", (function(t) {
                                    return mr.forEach(e, (function(e) {
                                        return mr.forEach(e.bn, (function(r) {
                                            return n.persistence.referenceDelegate.addReference(t, e.targetId, r);
                                        })).next((function() {
                                            return mr.forEach(e.vn, (function(r) {
                                                return n.persistence.referenceDelegate.removeReference(t, e.targetId, r);
                                            }));
                                        }));
                                    }));
                                })) ];

                              case 2:
                                return f.sent(), [ 3 /*break*/ , 4 ];

                              case 3:
                                if (!_r(r = f.sent())) throw r;
                                // If `notifyLocalViewChanges` fails, we did not advance the sequence
                                // number for the documents that were included in this transaction.
                                // This might trigger them to be deleted earlier than they otherwise
                                // would have, but it should not invalidate the integrity of the data.
                                                                return D("LocalStore", "Failed to update sequence numbers: " + r), 
                                [ 3 /*break*/ , 4 ];

                              case 4:
                                for (i = 0, o = e; i < o.length; i++) s = o[i], u = s.targetId, s.fromCache || (a = n.Fn.get(u), 
                                c = a.snapshotVersion, h = a.withLastLimboFreeSnapshotVersion(c), 
                                // Advance the last limbo free snapshot version
                                n.Fn = n.Fn.insert(u, h));
                                return [ 2 /*return*/ ];
                            }
                        }));
                    }));
                }(r.localStore, o) ];

              case 2:
                u.sent(), u.label = 3;

              case 3:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

function Qs(t, e) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var n, r;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(i) {
            switch (i.label) {
              case 0:
                return (n = O(t)).currentUser.isEqual(e) ? [ 3 /*break*/ , 3 ] : (D("SyncEngine", "User change. New user:", e.toKey()), 
                [ 4 /*yield*/ , Fi(n.localStore, e) ]);

              case 1:
                return r = i.sent(), n.currentUser = e, 
                // Fails tasks waiting for pending writes requested by previous user.
                function(t, e) {
                    t.Fo.forEach((function(t) {
                        t.forEach((function(t) {
                            t.reject(new T(E.CANCELLED, "'waitForPendingWrites' promise is rejected due to a user change."));
                        }));
                    })), t.Fo.clear();
                }(n), 
                // TODO(b/114226417): Consider calling this only in the primary tab.
                n.sharedClientState.handleUserChange(e, r.removedBatchIds, r.addedBatchIds), [ 4 /*yield*/ , zs(n, r.Ln) ];

              case 2:
                i.sent(), i.label = 3;

              case 3:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

function Ws(t, e) {
    var n = O(t), r = n.Co.get(e);
    if (r && r.bo) return en().add(r.key);
    var i = en(), o = n.Vo.get(e);
    if (!o) return i;
    for (var s = 0, u = o; s < u.length; s++) {
        var a = u[s], c = n.Po.get(a);
        i = i.unionWith(c.view.wo);
    }
    return i;
}

/**
 * Reconcile the list of synced documents in an existing view with those
 * from persistence.
 */ function Hs(t, e) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var n, r, i;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(o) {
            switch (o.label) {
              case 0:
                return [ 4 /*yield*/ , zi((n = O(t)).localStore, e.query, 
                /* usePreviousResults= */ !0) ];

              case 1:
                return r = o.sent(), i = e.view.Ao(r), [ 2 /*return*/ , (n.isPrimaryClient && js(n, e.targetId, i.To), 
                i) ];
            }
        }));
    }));
}

/**
 * Retrieves newly changed documents from remote document cache and raises
 * snapshots if needed.
 */
// PORTING NOTE: Multi-Tab only.
function Ys(t) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var e;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(n) {
            return [ 2 /*return*/ , Wi((e = O(t)).localStore).then((function(t) {
                return zs(e, t);
            })) ];
        }));
    }));
}

/** Applies a mutation state to an existing batch.  */
// PORTING NOTE: Multi-Tab only.
function Xs(t, e, n, r) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var i, o;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(s) {
            switch (s.label) {
              case 0:
                return [ 4 /*yield*/ , function(t, e) {
                    var n = O(t), r = O(n._n);
                    return n.persistence.runTransaction("Lookup mutation documents", "readonly", (function(t) {
                        return r.jt(t, e).next((function(e) {
                            return e ? n.Mn.pn(t, e) : mr.resolve(null);
                        }));
                    }));
                }((i = O(t)).localStore, e) ];

              case 1:
                return null === (o = s.sent()) ? [ 3 /*break*/ , 6 ] : "pending" !== n ? [ 3 /*break*/ , 3 ] : [ 4 /*yield*/ , Yo(i.remoteStore) ];

              case 2:
                // If we are the primary client, we need to send this write to the
                // backend. Secondary clients will ignore these writes since their remote
                // connection is disabled.
                return s.sent(), [ 3 /*break*/ , 4 ];

              case 3:
                "acknowledged" === n || "rejected" === n ? (
                // NOTE: Both these methods are no-ops for batches that originated from
                // other clients.
                qs(i, e, r || null), Vs(i, e), function(t, e) {
                    O(O(t)._n).Gt(e);
                }(i.localStore, e)) : C(), s.label = 4;

              case 4:
                return [ 4 /*yield*/ , zs(i, o) ];

              case 5:
                return s.sent(), [ 3 /*break*/ , 7 ];

              case 6:
                // A throttled tab may not have seen the mutation before it was completed
                // and removed from the mutation queue, in which case we won't have cached
                // the affected documents. In this case we can safely ignore the update
                // since that means we didn't apply the mutation locally at all (if we
                // had, we would have cached the affected documents), and so we will just
                // see any resulting document changes via normal remote document updates
                // as applicable.
                D("SyncEngine", "Cannot apply mutation batch with id: " + e), s.label = 7;

              case 7:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/** Applies a query target change from a different tab. */
// PORTING NOTE: Multi-Tab only.
function Js(t, e) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var n, r, i, o, s, u, a, c;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(h) {
            switch (h.label) {
              case 0:
                return ru(n = O(t)), iu(n), !0 !== e || !0 === n.Oo ? [ 3 /*break*/ , 3 ] : (r = n.sharedClientState.getAllActiveQueryTargets(), 
                [ 4 /*yield*/ , $s(n, r.toArray()) ]);

              case 1:
                return i = h.sent(), n.Oo = !0, [ 4 /*yield*/ , ns(n.remoteStore, !0) ];

              case 2:
                for (h.sent(), o = 0, s = i; o < s.length; o++) u = s[o], Mo(n.remoteStore, u);
                return [ 3 /*break*/ , 7 ];

              case 3:
                return !1 !== e || !1 === n.Oo ? [ 3 /*break*/ , 7 ] : (a = [], c = Promise.resolve(), 
                n.Vo.forEach((function(t, e) {
                    n.sharedClientState.isLocalQueryTarget(e) ? a.push(e) : c = c.then((function() {
                        return Us(n, e), Gi(n.localStore, e, 
                        /*keepPersistedTargetData=*/ !0);
                    })), Fo(n.remoteStore, e);
                })), [ 4 /*yield*/ , c ]);

              case 4:
                return h.sent(), [ 4 /*yield*/ , $s(n, a) ];

              case 5:
                return h.sent(), 
                // PORTING NOTE: Multi-Tab only.
                function(t) {
                    var e = O(t);
                    e.Co.forEach((function(t, n) {
                        Fo(e.remoteStore, n);
                    })), e.No.ts(), e.Co = new Map, e.Do = new Ke(st.comparator);
                }(n), n.Oo = !1, [ 4 /*yield*/ , ns(n.remoteStore, !1) ];

              case 6:
                h.sent(), h.label = 7;

              case 7:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

function $s(t, e, n) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var n, r, i, o, s, u, a, c, h, f, l, d, p, y;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(v) {
            switch (v.label) {
              case 0:
                n = O(t), r = [], i = [], o = 0, s = e, v.label = 1;

              case 1:
                return o < s.length ? (u = s[o], a = void 0, (c = n.Vo.get(u)) && 0 !== c.length ? [ 4 /*yield*/ , Ki(n.localStore, $t(c[0])) ] : [ 3 /*break*/ , 7 ]) : [ 3 /*break*/ , 13 ];

              case 2:
                // For queries that have a local View, we fetch their current state
                // from LocalStore (as the resume token and the snapshot version
                // might have changed) and reconcile their views with the persisted
                // state (the list of syncedDocuments may have gotten out of sync).
                a = v.sent(), h = 0, f = c, v.label = 3;

              case 3:
                return h < f.length ? (l = f[h], d = n.Po.get(l), [ 4 /*yield*/ , Hs(n, d) ]) : [ 3 /*break*/ , 6 ];

              case 4:
                (p = v.sent()).snapshot && i.push(p.snapshot), v.label = 5;

              case 5:
                return h++, [ 3 /*break*/ , 3 ];

              case 6:
                return [ 3 /*break*/ , 11 ];

              case 7:
                return [ 4 /*yield*/ , Qi(n.localStore, u) ];

              case 8:
                return y = v.sent(), [ 4 /*yield*/ , Ki(n.localStore, y) ];

              case 9:
                return a = v.sent(), [ 4 /*yield*/ , ks(n, Zs(y), u, 
                /*current=*/ !1) ];

              case 10:
                v.sent(), v.label = 11;

              case 11:
                r.push(a), v.label = 12;

              case 12:
                return o++, [ 3 /*break*/ , 1 ];

              case 13:
                return [ 2 /*return*/ , (n.vo._r(i), r) ];
            }
        }));
    }));
}

/**
 * Creates a `Query` object from the specified `Target`. There is no way to
 * obtain the original `Query`, so we synthesize a `Query` from the `Target`
 * object.
 *
 * The synthesized result might be different from the original `Query`, but
 * since the synthesized `Query` should return the same results as the
 * original one (only the presentation of results might differ), the potential
 * difference will not cause issues.
 */
// PORTING NOTE: Multi-Tab only.
function Zs(t) {
    return Gt(t.path, t.collectionGroup, t.orderBy, t.filters, t.limit, "F" /* First */ , t.startAt, t.endAt);
}

/** Returns the IDs of the clients that are currently active. */
// PORTING NOTE: Multi-Tab only.
function tu(t) {
    var e = O(t);
    return O(O(e.localStore).persistence).fn();
}

/** Applies a query target change from a different tab. */
// PORTING NOTE: Multi-Tab only.
function eu(t, e, n, r) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var i, o, s;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(u) {
            switch (u.label) {
              case 0:
                return (i = O(t)).Oo ? (
                // If we receive a target state notification via WebStorage, we are
                // either already secondary or another tab has taken the primary lease.
                D("SyncEngine", "Ignoring unexpected query state notification."), [ 3 /*break*/ , 8 ]) : [ 3 /*break*/ , 1 ];

              case 1:
                if (!i.Vo.has(e)) return [ 3 /*break*/ , 8 ];
                switch (n) {
                  case "current":
                  case "not-current":
                    return [ 3 /*break*/ , 2 ];

                  case "rejected":
                    return [ 3 /*break*/ , 5 ];
                }
                return [ 3 /*break*/ , 7 ];

              case 2:
                return [ 4 /*yield*/ , Wi(i.localStore) ];

              case 3:
                return o = u.sent(), s = on.createSynthesizedRemoteEventForCurrentChange(e, "current" === n), 
                [ 4 /*yield*/ , zs(i, o, s) ];

              case 4:
                return u.sent(), [ 3 /*break*/ , 8 ];

              case 5:
                return [ 4 /*yield*/ , Gi(i.localStore, e, 
                /* keepPersistedTargetData */ !0) ];

              case 6:
                return u.sent(), Us(i, e, r), [ 3 /*break*/ , 8 ];

              case 7:
                C(), u.label = 8;

              case 8:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/** Adds or removes Watch targets for queries from different tabs. */ function nu(t, e, n) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var r, i, o, s, u, a, c, h, f, l;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(d) {
            switch (d.label) {
              case 0:
                if (!(r = ru(t)).Oo) return [ 3 /*break*/ , 10 ];
                i = 0, o = e, d.label = 1;

              case 1:
                return i < o.length ? (s = o[i], r.Vo.has(s) ? (
                // A target might have been added in a previous attempt
                D("SyncEngine", "Adding an already active target " + s), [ 3 /*break*/ , 5 ]) : [ 4 /*yield*/ , Qi(r.localStore, s) ]) : [ 3 /*break*/ , 6 ];

              case 2:
                return u = d.sent(), [ 4 /*yield*/ , Ki(r.localStore, u) ];

              case 3:
                return a = d.sent(), [ 4 /*yield*/ , ks(r, Zs(u), a.targetId, 
                /*current=*/ !1) ];

              case 4:
                d.sent(), Mo(r.remoteStore, a), d.label = 5;

              case 5:
                return i++, [ 3 /*break*/ , 1 ];

              case 6:
                c = function(t) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(e) {
                        switch (e.label) {
                          case 0:
                            return r.Vo.has(t) ? [ 4 /*yield*/ , Gi(r.localStore, t, 
                            /* keepPersistedTargetData */ !1).then((function() {
                                Fo(r.remoteStore, t), Us(r, t);
                            })).catch(hi) ] : [ 3 /*break*/ , 2 ];

                            // Release queries that are still active.
                                                      case 1:
                            // Release queries that are still active.
                            e.sent(), e.label = 2;

                          case 2:
                            return [ 2 /*return*/ ];
                        }
                    }));
                }, h = 0, f = n, d.label = 7;

              case 7:
                return h < f.length ? (l = f[h], [ 5 /*yield**/ , c(l) ]) : [ 3 /*break*/ , 10 ];

              case 8:
                d.sent(), d.label = 9;

              case 9:
                return h++, [ 3 /*break*/ , 7 ];

              case 10:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

function ru(t) {
    var e = O(t);
    return e.remoteStore.remoteSyncer.applyRemoteEvent = Rs.bind(null, e), e.remoteStore.remoteSyncer.getRemoteKeysForTarget = Ws.bind(null, e), 
    e.remoteStore.remoteSyncer.rejectListen = Ls.bind(null, e), e.vo._r = ps.bind(null, e.eventManager), 
    e.vo.Mo = ys.bind(null, e.eventManager), e;
}

function iu(t) {
    var e = O(t);
    return e.remoteStore.remoteSyncer.applySuccessfulWrite = Ps.bind(null, e), e.remoteStore.remoteSyncer.rejectFailedWrite = Ms.bind(null, e), 
    e
    /**
 * Loads a Firestore bundle into the SDK. The returned promise resolves when
 * the bundle finished loading.
 *
 * @param syncEngine - SyncEngine to use.
 * @param bundleReader - Bundle to load into the SDK.
 * @param task - LoadBundleTask used to update the loading progress to public API.
 */;
}

function ou(t, e, n) {
    var r = O(t);
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
        (function(t, e, n) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
            var r, i, o, s, u, a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(c) {
                switch (c.label) {
                  case 0:
                    return c.trys.push([ 0, 14, , 15 ]), [ 4 /*yield*/ , e.getMetadata() ];

                  case 1:
                    return r = c.sent(), [ 4 /*yield*/ , function(t, e) {
                        var n = O(t), r = bn(e.createTime);
                        return n.persistence.runTransaction("hasNewerBundle", "readonly", (function(t) {
                            return n.Qe.getBundleMetadata(t, e.id);
                        })).then((function(t) {
                            return !!t && t.createTime.compareTo(r) >= 0;
                        }));
                    }(t.localStore, r) ];

                  case 2:
                    return c.sent() ? [ 4 /*yield*/ , e.close() ] : [ 3 /*break*/ , 4 ];

                  case 3:
                    return [ 2 /*return*/ , (c.sent(), void n._completeWith(function(t) {
                        return {
                            taskState: "Success",
                            documentsLoaded: t.totalDocuments,
                            bytesLoaded: t.totalBytes,
                            totalDocuments: t.totalDocuments,
                            totalBytes: t.totalBytes
                        };
                    }(r))) ];

                  case 4:
                    return n._updateProgress(Is(r)), i = new bs(r, t.localStore, e.R), [ 4 /*yield*/ , e.Lo() ];

                  case 5:
                    o = c.sent(), c.label = 6;

                  case 6:
                    return o ? [ 4 /*yield*/ , i.oo(o) ] : [ 3 /*break*/ , 10 ];

                  case 7:
                    return (s = c.sent()) && n._updateProgress(s), [ 4 /*yield*/ , e.Lo() ];

                  case 8:
                    o = c.sent(), c.label = 9;

                  case 9:
                    return [ 3 /*break*/ , 6 ];

                  case 10:
                    return [ 4 /*yield*/ , i.complete() ];

                  case 11:
                    // TODO(b/160876443): This currently raises snapshots with
                    // `fromCache=false` if users already listen to some queries and bundles
                    // has newer version.
                    return u = c.sent(), [ 4 /*yield*/ , zs(t, u.wn, 
                    /* remoteEvent */ void 0) ];

                  case 12:
                    // Save metadata, so loading the same bundle will skip.
                    // TODO(b/160876443): This currently raises snapshots with
                    // `fromCache=false` if users already listen to some queries and bundles
                    // has newer version.
                    return c.sent(), [ 4 /*yield*/ , function(t, e) {
                        var n = O(t);
                        return n.persistence.runTransaction("Save bundle", "readwrite", (function(t) {
                            return n.Qe.saveBundleMetadata(t, e);
                        }));
                    }(t.localStore, r) ];

                  case 13:
                    // TODO(b/160876443): This currently raises snapshots with
                    // `fromCache=false` if users already listen to some queries and bundles
                    // has newer version.
                    // Save metadata, so loading the same bundle will skip.
                    return c.sent(), n._completeWith(u.progress), [ 3 /*break*/ , 15 ];

                  case 14:
                    return k("SyncEngine", "Loading bundle failed with " + (a = c.sent())), n._failWith(a), 
                    [ 3 /*break*/ , 15 ];

                  case 15:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }
    /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    /**
 * Provides all components needed for Firestore with in-memory persistence.
 * Uses EagerGC garbage collection.
 */)(r, e, n).then((function() {
        r.sharedClientState.notifyBundleLoaded();
    }));
}

var su = /** @class */ function() {
    function t() {
        this.synchronizeTabs = !1;
    }
    return t.prototype.initialize = function(t) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return this.R = No(t.databaseInfo.databaseId), this.sharedClientState = this.Bo(t), 
                    this.persistence = this.qo(t), [ 4 /*yield*/ , this.persistence.start() ];

                  case 1:
                    return e.sent(), this.gcScheduler = this.Uo(t), this.localStore = this.Qo(t), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Uo = function(t) {
        return null;
    }, t.prototype.Qo = function(t) {
        return Mi(this.persistence, new Li, t.initialUser, this.R);
    }, t.prototype.qo = function(t) {
        return new io(so.bs, this.R);
    }, t.prototype.Bo = function(t) {
        return new go;
    }, t.prototype.terminate = function() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.gcScheduler && this.gcScheduler.stop(), [ 4 /*yield*/ , this.sharedClientState.shutdown() ];

                  case 1:
                    return t.sent(), [ 4 /*yield*/ , this.persistence.shutdown() ];

                  case 2:
                    return t.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t;
}(), uu = /** @class */ function(t) {
    function e(e, n, r) {
        var i = this;
        return (i = t.call(this) || this).Ko = e, i.cacheSizeBytes = n, i.forceOwnership = r, 
        i.synchronizeTabs = !1, i;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.initialize = function(e) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return [ 4 /*yield*/ , t.prototype.initialize.call(this, e) ];

                  case 1:
                    return n.sent(), [ 4 /*yield*/ , Hi(this.localStore) ];

                  case 2:
                    return n.sent(), [ 4 /*yield*/ , this.Ko.initialize(this, e) ];

                  case 3:
                    // Enqueue writes from a previous session
                    return n.sent(), [ 4 /*yield*/ , iu(this.Ko.syncEngine) ];

                  case 4:
                    // Enqueue writes from a previous session
                    return n.sent(), [ 4 /*yield*/ , Yo(this.Ko.remoteStore) ];

                  case 5:
                    return n.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, e.prototype.Qo = function(t) {
        return Mi(this.persistence, new Li, t.initialUser, this.R);
    }, e.prototype.Uo = function(t) {
        var e = this.persistence.referenceDelegate.garbageCollector;
        return new di(e, t.asyncQueue);
    }, e.prototype.qo = function(t) {
        var e = xi(t.databaseInfo.databaseId, t.databaseInfo.persistenceKey), n = void 0 !== this.cacheSizeBytes ? Jr.withCacheSize(this.cacheSizeBytes) : Jr.DEFAULT;
        return new Di(this.synchronizeTabs, e, t.clientId, n, t.asyncQueue, To(), So(), this.R, this.sharedClientState, !!this.forceOwnership);
    }, e.prototype.Bo = function(t) {
        return new go;
    }, e;
}(su), au = /** @class */ function(t) {
    function e(e, n) {
        var r = this;
        return (r = t.call(this, e, n, /* forceOwnership= */ !1) || this).Ko = e, r.cacheSizeBytes = n, 
        r.synchronizeTabs = !0, r;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.initialize = function(e) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
            var n, r = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(i) {
                switch (i.label) {
                  case 0:
                    return [ 4 /*yield*/ , t.prototype.initialize.call(this, e) ];

                  case 1:
                    return i.sent(), n = this.Ko.syncEngine, this.sharedClientState instanceof mo ? (this.sharedClientState.syncEngine = {
                        ui: Xs.bind(null, n),
                        ai: eu.bind(null, n),
                        hi: nu.bind(null, n),
                        fn: tu.bind(null, n),
                        ci: Ys.bind(null, n)
                    }, [ 4 /*yield*/ , this.sharedClientState.start() ]) : [ 3 /*break*/ , 3 ];

                  case 2:
                    i.sent(), i.label = 3;

                  case 3:
                    // NOTE: This will immediately call the listener, so we make sure to
                    // set it after localStore / remoteStore are started.
                    return [ 4 /*yield*/ , this.persistence.He((function(t) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(r, void 0, void 0, (function() {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(e) {
                                switch (e.label) {
                                  case 0:
                                    return [ 4 /*yield*/ , Js(this.Ko.syncEngine, t) ];

                                  case 1:
                                    return e.sent(), this.gcScheduler && (t && !this.gcScheduler.started ? this.gcScheduler.start(this.localStore) : t || this.gcScheduler.stop()), 
                                    [ 2 /*return*/ ];
                                }
                            }));
                        }));
                    })) ];

                  case 4:
                    // NOTE: This will immediately call the listener, so we make sure to
                    // set it after localStore / remoteStore are started.
                    return i.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, e.prototype.Bo = function(t) {
        var e = To();
        if (!mo.yt(e)) throw new T(E.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
        var n = xi(t.databaseInfo.databaseId, t.databaseInfo.persistenceKey);
        return new mo(e, t.asyncQueue, n, t.clientId, t.initialUser);
    }, e;
}(uu), cu = /** @class */ function() {
    function t() {}
    return t.prototype.initialize = function(t, e) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
            var n = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(r) {
                switch (r.label) {
                  case 0:
                    return this.localStore ? [ 3 /*break*/ , 2 ] : (this.localStore = t.localStore, 
                    this.sharedClientState = t.sharedClientState, this.datastore = this.createDatastore(e), 
                    this.remoteStore = this.createRemoteStore(e), this.eventManager = this.createEventManager(e), 
                    this.syncEngine = this.createSyncEngine(e, 
                    /* startAsPrimary=*/ !t.synchronizeTabs), this.sharedClientState.onlineStateHandler = function(t) {
                        return Os(n.syncEngine, t, 1 /* SharedClientState */);
                    }, this.remoteStore.remoteSyncer.handleCredentialChange = Qs.bind(null, this.syncEngine), 
                    [ 4 /*yield*/ , ns(this.remoteStore, this.syncEngine.isPrimaryClient) ]);

                  case 1:
                    r.sent(), r.label = 2;

                  case 2:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.createEventManager = function(t) {
        return new fs;
    }, t.prototype.createDatastore = function(t) {
        var e, n = No(t.databaseInfo.databaseId), r = (e = t.databaseInfo, new Eo(e));
        /** Return the Platform-specific connectivity monitor. */ return function(t, e, n) {
            return new Co(t, e, n);
        }(t.credentials, r, n);
    }, t.prototype.createRemoteStore = function(t) {
        var e, n, r, i, o, s = this;
        return e = this.localStore, n = this.datastore, r = t.asyncQueue, i = function(t) {
            return Os(s.syncEngine, t, 0 /* RemoteStore */);
        }, o = bo.yt() ? new bo : new wo, new Oo(e, n, r, i, o);
    }, t.prototype.createSyncEngine = function(t, e) {
        return function(t, e, n, 
        // PORTING NOTE: Manages state synchronization in multi-tab environments.
        r, i, o, s) {
            var u = new Ds(t, e, n, r, i, o);
            return s && (u.Oo = !0), u;
        }(this.localStore, this.remoteStore, this.eventManager, this.sharedClientState, t.initialUser, t.maxConcurrentLimboResolutions, e);
    }, t.prototype.terminate = function() {
        return function(t) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
                var e;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(n) {
                    switch (n.label) {
                      case 0:
                        return e = O(t), D("RemoteStore", "RemoteStore shutting down."), e.$r.add(5 /* Shutdown */), 
                        [ 4 /*yield*/ , Po(e) ];

                      case 1:
                        return n.sent(), e.Lr.shutdown(), 
                        // Set the OnlineState to Unknown (rather than Offline) to avoid potentially
                        // triggering spurious listener events with cached data, etc.
                        e.Br.set("Unknown" /* Unknown */), [ 2 /*return*/ ];
                    }
                }));
            }));
        }(this.remoteStore);
    }, t;
}();

/**
 * Provides all components needed for Firestore with IndexedDB persistence.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * How many bytes to read each time when `ReadableStreamReader.read()` is
 * called. Only applicable for byte streams that we control (e.g. those backed
 * by an UInt8Array).
 */
/**
 * Builds a `ByteStreamReader` from a UInt8Array.
 * @param source - The data source to use.
 * @param bytesPerRead - How many bytes each `read()` from the returned reader
 *        will read.
 */
function hu(t, e) {
    void 0 === e && (e = 10240);
    var n = 0;
    return {
        read: function() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
                var r;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(i) {
                    return n < t.byteLength ? (r = {
                        value: t.slice(n, n + e),
                        done: !1
                    }, [ 2 /*return*/ , (n += e, r) ]) : [ 2 /*return*/ , {
                        done: !0
                    } ];
                }));
            }));
        },
        cancel: function() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(t) {
                    return [ 2 /*return*/ ];
                }));
            }));
        },
        releaseLock: function() {},
        closed: Promise.reject("unimplemented")
    };
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * On web, a `ReadableStream` is wrapped around by a `ByteStreamReader`.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*
 * A wrapper implementation of Observer<T> that will dispatch events
 * asynchronously. To allow immediate silencing, a mute call is added which
 * causes events scheduled to no longer be raised.
 */ var fu = /** @class */ function() {
    function t(t) {
        this.observer = t, 
        /**
             * When set to true, will not raise future events. Necessary to deal with
             * async detachment of listener.
             */
        this.muted = !1;
    }
    return t.prototype.next = function(t) {
        this.observer.next && this.jo(this.observer.next, t);
    }, t.prototype.error = function(t) {
        this.observer.error ? this.jo(this.observer.error, t) : console.error("Uncaught Error in snapshot listener:", t);
    }, t.prototype.Wo = function() {
        this.muted = !0;
    }, t.prototype.jo = function(t, e) {
        var n = this;
        this.muted || setTimeout((function() {
            n.muted || t(e);
        }), 0);
    }, t;
}(), lu = /** @class */ function() {
    function t(
    /** The reader to read from underlying binary bundle data source. */
    t, e) {
        var n = this;
        this.Go = t, this.R = e, 
        /** Cached bundle metadata. */
        this.metadata = new vr, 
        /**
             * Internal buffer to hold bundle content, accumulating incomplete element
             * content.
             */
        this.buffer = new Uint8Array, this.zo = new TextDecoder("utf-8"), 
        // Read the metadata (which is the first element).
        this.Ho().then((function(t) {
            t && t.io() ? n.metadata.resolve(t.payload.metadata) : n.metadata.reject(new Error("The first element of the bundle is not a metadata, it is\n             " + JSON.stringify(null == t ? void 0 : t.payload)));
        }), (function(t) {
            return n.metadata.reject(t);
        }));
    }
    return t.prototype.close = function() {
        return this.Go.cancel();
    }, t.prototype.getMetadata = function() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(t) {
                return [ 2 /*return*/ , this.metadata.promise ];
            }));
        }));
    }, t.prototype.Lo = function() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return [ 4 /*yield*/ , this.getMetadata() ];

                  case 1:
                    // Makes sure metadata is read before proceeding.
                    return [ 2 /*return*/ , (t.sent(), this.Ho()) ];
                }
            }));
        }));
    }, 
    /**
     * Reads from the head of internal buffer, and pulling more data from
     * underlying stream if a complete element cannot be found, until an
     * element(including the prefixed length and the JSON string) is found.
     *
     * Once a complete element is read, it is dropped from internal buffer.
     *
     * Returns either the bundled element, or null if we have reached the end of
     * the stream.
     */
    t.prototype.Ho = function() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
            var t, e, n, r;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(i) {
                switch (i.label) {
                  case 0:
                    return [ 4 /*yield*/ , this.Jo() ];

                  case 1:
                    return null === (t = i.sent()) ? [ 2 /*return*/ , null ] : (e = this.zo.decode(t), 
                    n = Number(e), isNaN(n) && this.Yo("length string (" + e + ") is not valid number"), 
                    [ 4 /*yield*/ , this.Xo(n) ]);

                  case 2:
                    return r = i.sent(), [ 2 /*return*/ , new gs(JSON.parse(r), t.length + n) ];
                }
            }));
        }));
    }, 
    /** First index of '{' from the underlying buffer. */ t.prototype.Zo = function() {
        return this.buffer.findIndex((function(t) {
            return t === "{".charCodeAt(0);
        }));
    }, 
    /**
     * Reads from the beginning of the internal buffer, until the first '{', and
     * return the content.
     *
     * If reached end of the stream, returns a null.
     */
    t.prototype.Jo = function() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
            var t, e;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return this.Zo() < 0 ? [ 4 /*yield*/ , this.tc() ] : [ 3 /*break*/ , 3 ];

                  case 1:
                    if (n.sent()) return [ 3 /*break*/ , 3 ];
                    n.label = 2;

                  case 2:
                    return [ 3 /*break*/ , 0 ];

                  case 3:
                    // Broke out of the loop because underlying stream is closed, and there
                    // happens to be no more data to process.
                    return 0 === this.buffer.length ? [ 2 /*return*/ , null ] : (
                    // Broke out of the loop because underlying stream is closed, but still
                    // cannot find an open bracket.
                    (t = this.Zo()) < 0 && this.Yo("Reached the end of bundle when a length string is expected."), 
                    e = this.buffer.slice(0, t), [ 2 /*return*/ , (this.buffer = this.buffer.slice(t), 
                    e) ]);
                }
            }));
        }));
    }, 
    /**
     * Reads from a specified position from the internal buffer, for a specified
     * number of bytes, pulling more data from the underlying stream if needed.
     *
     * Returns a string decoded from the read bytes.
     */
    t.prototype.Xo = function(t) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
            var e;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return this.buffer.length < t ? [ 4 /*yield*/ , this.tc() ] : [ 3 /*break*/ , 3 ];

                  case 1:
                    n.sent() && this.Yo("Reached the end of bundle when more is expected."), n.label = 2;

                  case 2:
                    return [ 3 /*break*/ , 0 ];

                  case 3:
                    // Update the internal buffer to drop the read json string.
                    return e = this.zo.decode(this.buffer.slice(0, t)), [ 2 /*return*/ , (this.buffer = this.buffer.slice(t), 
                    e) ];
                }
            }));
        }));
    }, t.prototype.Yo = function(t) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        throw this.Go.cancel(), new Error("Invalid bundle format: " + t);
    }, 
    /**
     * Pulls more data from underlying stream to internal buffer.
     * Returns a boolean indicating whether the stream is finished.
     */
    t.prototype.tc = function() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
            var t, e;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return [ 4 /*yield*/ , this.Go.read() ];

                  case 1:
                    return (t = n.sent()).done || ((e = new Uint8Array(this.buffer.length + t.value.length)).set(this.buffer), 
                    e.set(t.value, this.buffer.length), this.buffer = e), [ 2 /*return*/ , t.done ];
                }
            }));
        }));
    }, t;
}(), du = /** @class */ function() {
    function t(t) {
        this.datastore = t, 
        // The version of each document that was read during this transaction.
        this.readVersions = new Map, this.mutations = [], this.committed = !1, 
        /**
             * A deferred usage error that occurred previously in this transaction that
             * will cause the transaction to fail once it actually commits.
             */
        this.lastWriteError = null, 
        /**
             * Set of documents that have been written in the transaction.
             *
             * When there's more than one write to the same key in a transaction, any
             * writes after the first are handled differently.
             */
        this.writtenDocs = new Set;
    }
    return t.prototype.lookup = function(t) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
            var e, n = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(r) {
                switch (r.label) {
                  case 0:
                    if (this.ensureCommitNotCalled(), this.mutations.length > 0) throw new T(E.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes.");
                    return [ 4 /*yield*/ , function(t, e) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
                            var n, r, i, o, s, u;
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(a) {
                                switch (a.label) {
                                  case 0:
                                    return n = O(t), r = Dn(n.R) + "/documents", i = {
                                        documents: e.map((function(t) {
                                            return En(n.R, t);
                                        }))
                                    }, [ 4 /*yield*/ , n.Oi("BatchGetDocuments", r, i) ];

                                  case 1:
                                    return o = a.sent(), s = new Map, o.forEach((function(t) {
                                        var e = function(t, e) {
                                            return "found" in e ? function(t, e) {
                                                R(!!e.found), e.found.name, e.found.updateTime;
                                                var n = Tn(t, e.found.name), r = bn(e.found.updateTime), i = new bt({
                                                    mapValue: {
                                                        fields: e.found.fields
                                                    }
                                                });
                                                return _t.newFoundDocument(n, r, i);
                                            }(t, e) : "missing" in e ? function(t, e) {
                                                R(!!e.missing), R(!!e.readTime);
                                                var n = Tn(t, e.missing), r = bn(e.readTime);
                                                return _t.newNoDocument(n, r);
                                            }(t, e) : C();
                                        }(n.R, t);
                                        s.set(e.key.toString(), e);
                                    })), u = [], [ 2 /*return*/ , (e.forEach((function(t) {
                                        var e = s.get(t.toString());
                                        R(!!e), u.push(e);
                                    })), u) ];
                                }
                            }));
                        }));
                    }(this.datastore, t) ];

                  case 1:
                    return [ 2 /*return*/ , ((e = r.sent()).forEach((function(t) {
                        return n.recordVersion(t);
                    })), e) ];
                }
            }));
        }));
    }, t.prototype.set = function(t, e) {
        this.write(e.toMutation(t, this.precondition(t))), this.writtenDocs.add(t.toString());
    }, t.prototype.update = function(t, e) {
        try {
            this.write(e.toMutation(t, this.preconditionForUpdate(t)));
        } catch (t) {
            this.lastWriteError = t;
        }
        this.writtenDocs.add(t.toString());
    }, t.prototype.delete = function(t) {
        this.write(new Ve(t, this.precondition(t))), this.writtenDocs.add(t.toString());
    }, t.prototype.commit = function() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
            var t, e = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(n) {
                switch (n.label) {
                  case 0:
                    if (this.ensureCommitNotCalled(), this.lastWriteError) throw this.lastWriteError;
                    return t = this.readVersions, 
                    // For each mutation, note that the doc was written.
                    this.mutations.forEach((function(e) {
                        t.delete(e.key.toString());
                    })), 
                    // For each document that was read but not written to, we want to perform
                    // a `verify` operation.
                    t.forEach((function(t, n) {
                        var r = st.fromPath(n);
                        e.mutations.push(new qe(r, e.precondition(r)));
                    })), [ 4 /*yield*/ , function(t, e) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
                            var n, r, i;
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(o) {
                                switch (o.label) {
                                  case 0:
                                    return n = O(t), r = Dn(n.R) + "/documents", i = {
                                        writes: e.map((function(t) {
                                            return Cn(n.R, t);
                                        }))
                                    }, [ 4 /*yield*/ , n.Ni("Commit", r, i) ];

                                  case 1:
                                    return o.sent(), [ 2 /*return*/ ];
                                }
                            }));
                        }));
                    }(this.datastore, this.mutations) ];

                  case 1:
                    // For each mutation, note that the doc was written.
                    return n.sent(), this.committed = !0, [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.recordVersion = function(t) {
        var e;
        if (t.isFoundDocument()) e = t.version; else {
            if (!t.isNoDocument()) throw C();
            // For deleted docs, we must use baseVersion 0 when we overwrite them.
                        e = U.min();
        }
        var n = this.readVersions.get(t.key.toString());
        if (n) {
            if (!e.isEqual(n)) 
            // This transaction will fail no matter what.
            throw new T(E.ABORTED, "Document version changed between two reads.");
        } else this.readVersions.set(t.key.toString(), e);
    }, 
    /**
     * Returns the version of this document when it was read in this transaction,
     * as a precondition, or no precondition if it was not read.
     */
    t.prototype.precondition = function(t) {
        var e = this.readVersions.get(t.toString());
        return !this.writtenDocs.has(t.toString()) && e ? Ee.updateTime(e) : Ee.none();
    }, 
    /**
     * Returns the precondition for a document if the operation is an update.
     */
    t.prototype.preconditionForUpdate = function(t) {
        var e = this.readVersions.get(t.toString());
        // The first time a document is written, we want to take into account the
        // read time and existence
                if (!this.writtenDocs.has(t.toString()) && e) {
            if (e.isEqual(U.min())) 
            // The document doesn't exist, so fail the transaction.
            // This has to be validated locally because you can't send a
            // precondition that a document does not exist without changing the
            // semantics of the backend write to be an insert. This is the reverse
            // of what we want, since we want to assert that the document doesn't
            // exist but then send the update and have it fail. Since we can't
            // express that to the backend, we have to validate locally.
            // Note: this can change once we can send separate verify writes in the
            // transaction.
            throw new T(E.INVALID_ARGUMENT, "Can't update a document that doesn't exist.");
            // Document exists, base precondition on document update time.
                        return Ee.updateTime(e);
        }
        // Document was not read, so we just use the preconditions for a blind
        // update.
                return Ee.exists(!0);
    }, t.prototype.write = function(t) {
        this.ensureCommitNotCalled(), this.mutations.push(t);
    }, t.prototype.ensureCommitNotCalled = function() {}, t;
}(), pu = /** @class */ function() {
    function t(t, e, n, r) {
        this.asyncQueue = t, this.datastore = e, this.updateFunction = n, this.deferred = r, 
        this.ec = 5, this.Zi = new Do(this.asyncQueue, "transaction_retry" /* TransactionRetry */)
        /** Runs the transaction and sets the result on deferred. */;
    }
    return t.prototype.run = function() {
        this.nc();
    }, t.prototype.nc = function() {
        var t = this;
        this.Zi.ji((function() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(t, void 0, void 0, (function() {
                var t, e, n = this;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(r) {
                    return t = new du(this.datastore), (e = this.sc(t)) && e.then((function(e) {
                        n.asyncQueue.enqueueAndForget((function() {
                            return t.commit().then((function() {
                                n.deferred.resolve(e);
                            })).catch((function(t) {
                                n.ic(t);
                            }));
                        }));
                    })).catch((function(t) {
                        n.ic(t);
                    })), [ 2 /*return*/ ];
                }));
            }));
        }));
    }, t.prototype.sc = function(t) {
        try {
            var e = this.updateFunction(t);
            return !rt(e) && e.catch && e.then ? e : (this.deferred.reject(Error("Transaction callback must return a Promise")), 
            null);
        } catch (t) {
            // Do not retry errors thrown by user provided updateFunction.
            return this.deferred.reject(t), null;
        }
    }, t.prototype.ic = function(t) {
        var e = this;
        this.ec > 0 && this.rc(t) ? (this.ec -= 1, this.asyncQueue.enqueueAndForget((function() {
            return e.nc(), Promise.resolve();
        }))) : this.deferred.reject(t);
    }, t.prototype.rc = function(t) {
        if ("FirebaseError" === t.name) {
            // In transactions, the backend will fail outdated reads with FAILED_PRECONDITION and
            // non-matching document versions with ABORTED. These errors should be retried.
            var e = t.code;
            return "aborted" === e || "failed-precondition" === e || !Be(e);
        }
        return !1;
    }, t;
}(), yu = /** @class */ function() {
    function t(t, 
    /**
     * Asynchronous queue responsible for all of our internal processing. When
     * we get incoming work from the user (via public API) or the network
     * (incoming GRPC messages), we should always schedule onto this queue.
     * This ensures all of our work is properly serialized (e.g. we don't
     * start processing a new operation while the previous one is waiting for
     * an async I/O to complete).
     */
    e, n) {
        var r = this;
        this.credentials = t, this.asyncQueue = e, this.databaseInfo = n, this.user = uo.UNAUTHENTICATED, 
        this.clientId = P.u(), this.credentialListener = function() {}, this.receivedInitialUser = new vr, 
        this.credentials.setChangeListener((function(t) {
            D("FirestoreClient", "Received user=", t.uid), r.user = t, r.credentialListener(t), 
            r.receivedInitialUser.resolve();
        }));
    }
    return t.prototype.getConfiguration = function() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return [ 4 /*yield*/ , this.receivedInitialUser.promise ];

                  case 1:
                    return [ 2 /*return*/ , (t.sent(), {
                        asyncQueue: this.asyncQueue,
                        databaseInfo: this.databaseInfo,
                        clientId: this.clientId,
                        credentials: this.credentials,
                        initialUser: this.user,
                        maxConcurrentLimboResolutions: 100
                    }) ];
                }
            }));
        }));
    }, t.prototype.setCredentialChangeListener = function(t) {
        var e = this;
        this.credentialListener = t, 
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.receivedInitialUser.promise.then((function() {
            return e.credentialListener(e.user);
        }));
    }, 
    /**
     * Checks that the client has not been terminated. Ensures that other methods on
     * this class cannot be called after the client is terminated.
     */
    t.prototype.verifyNotTerminated = function() {
        if (this.asyncQueue.isShuttingDown) throw new T(E.FAILED_PRECONDITION, "The client has already been terminated.");
    }, t.prototype.terminate = function() {
        var t = this;
        this.asyncQueue.enterRestrictedMode();
        var e = new vr;
        return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((function() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(t, void 0, void 0, (function() {
                var t, n;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(r) {
                    switch (r.label) {
                      case 0:
                        return r.trys.push([ 0, 5, , 6 ]), this.onlineComponents ? [ 4 /*yield*/ , this.onlineComponents.terminate() ] : [ 3 /*break*/ , 2 ];

                      case 1:
                        r.sent(), r.label = 2;

                      case 2:
                        return this.offlineComponents ? [ 4 /*yield*/ , this.offlineComponents.terminate() ] : [ 3 /*break*/ , 4 ];

                      case 3:
                        r.sent(), r.label = 4;

                      case 4:
                        // `removeChangeListener` must be called after shutting down the
                        // RemoteStore as it will prevent the RemoteStore from retrieving
                        // auth tokens.
                        return this.credentials.removeChangeListener(), e.resolve(), [ 3 /*break*/ , 6 ];

                      case 5:
                        return t = r.sent(), n = ss(t, "Failed to shutdown persistence"), e.reject(n), [ 3 /*break*/ , 6 ];

                      case 6:
                        return [ 2 /*return*/ ];
                    }
                }));
            }));
        })), e.promise;
    }, t;
}();

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A class representing a bundle.
 *
 * Takes a bundle stream or buffer, and presents abstractions to read bundled
 * elements out of the underlying content.
 */ function vu(t, e) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var n, r, i = this;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(o) {
            switch (o.label) {
              case 0:
                return t.asyncQueue.verifyOperationInProgress(), D("FirestoreClient", "Initializing OfflineComponentProvider"), 
                [ 4 /*yield*/ , t.getConfiguration() ];

              case 1:
                return n = o.sent(), [ 4 /*yield*/ , e.initialize(n) ];

              case 2:
                return o.sent(), r = n.initialUser, t.setCredentialChangeListener((function(n) {
                    r.isEqual(n) || (r = n, t.asyncQueue.enqueueRetryable((function() {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(i, void 0, void 0, (function() {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(t) {
                                switch (t.label) {
                                  case 0:
                                    return [ 4 /*yield*/ , Fi(e.localStore, n) ];

                                  case 1:
                                    return t.sent(), [ 2 /*return*/ ];
                                }
                            }));
                        }));
                    })));
                })), 
                // When a user calls clearPersistence() in one client, all other clients
                // need to be terminated to allow the delete to succeed.
                e.persistence.setDatabaseDeletedListener((function() {
                    return t.terminate();
                })), t.offlineComponents = e, [ 2 /*return*/ ];
            }
        }));
    }));
}

function mu(t, e) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var n, r;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(i) {
            switch (i.label) {
              case 0:
                return t.asyncQueue.verifyOperationInProgress(), [ 4 /*yield*/ , gu(t) ];

              case 1:
                return n = i.sent(), D("FirestoreClient", "Initializing OnlineComponentProvider"), 
                [ 4 /*yield*/ , t.getConfiguration() ];

              case 2:
                return r = i.sent(), [ 4 /*yield*/ , e.initialize(n, r) ];

              case 3:
                return i.sent(), 
                // The CredentialChangeListener of the online component provider takes
                // precedence over the offline component provider.
                t.setCredentialChangeListener((function(n) {
                    return t.asyncQueue.enqueueRetryable((function() {
                        return function(t, e) {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
                                var n, r;
                                return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(i) {
                                    switch (i.label) {
                                      case 0:
                                        return (n = O(t)).asyncQueue.verifyOperationInProgress(), D("RemoteStore", "RemoteStore received new credentials"), 
                                        r = jo(n), 
                                        // Tear down and re-create our network streams. This will ensure we get a
                                        // fresh auth token for the new user and re-fill the write pipeline with
                                        // new mutations from the LocalStore (since mutations are per-user).
                                        n.$r.add(3 /* CredentialChange */), [ 4 /*yield*/ , Po(n) ];

                                      case 1:
                                        return i.sent(), r && 
                                        // Don't set the network status to Unknown if we are offline.
                                        n.Br.set("Unknown" /* Unknown */), [ 4 /*yield*/ , n.remoteSyncer.handleCredentialChange(e) ];

                                      case 2:
                                        return i.sent(), n.$r.delete(3 /* CredentialChange */), [ 4 /*yield*/ , Lo(n) ];

                                      case 3:
                                        // Tear down and re-create our network streams. This will ensure we get a
                                        // fresh auth token for the new user and re-fill the write pipeline with
                                        // new mutations from the LocalStore (since mutations are per-user).
                                        return i.sent(), [ 2 /*return*/ ];
                                    }
                                }));
                            }));
                        }(e.remoteStore, n);
                    }));
                })), t.onlineComponents = e, [ 2 /*return*/ ];
            }
        }));
    }));
}

function gu(t) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(e) {
            switch (e.label) {
              case 0:
                return t.offlineComponents ? [ 3 /*break*/ , 2 ] : (D("FirestoreClient", "Using default OfflineComponentProvider"), 
                [ 4 /*yield*/ , vu(t, new su) ]);

              case 1:
                e.sent(), e.label = 2;

              case 2:
                return [ 2 /*return*/ , t.offlineComponents ];
            }
        }));
    }));
}

function wu(t) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(e) {
            switch (e.label) {
              case 0:
                return t.onlineComponents ? [ 3 /*break*/ , 2 ] : (D("FirestoreClient", "Using default OnlineComponentProvider"), 
                [ 4 /*yield*/ , mu(t, new cu) ]);

              case 1:
                e.sent(), e.label = 2;

              case 2:
                return [ 2 /*return*/ , t.onlineComponents ];
            }
        }));
    }));
}

function bu(t) {
    return gu(t).then((function(t) {
        return t.persistence;
    }));
}

function Iu(t) {
    return gu(t).then((function(t) {
        return t.localStore;
    }));
}

function _u(t) {
    return wu(t).then((function(t) {
        return t.remoteStore;
    }));
}

function Eu(t) {
    return wu(t).then((function(t) {
        return t.syncEngine;
    }));
}

function Tu(t) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var e, n;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(r) {
            switch (r.label) {
              case 0:
                return [ 4 /*yield*/ , wu(t) ];

              case 1:
                return e = r.sent(), [ 2 /*return*/ , ((n = e.eventManager).onListen = As.bind(null, e.syncEngine), 
                n.onUnlisten = xs.bind(null, e.syncEngine), n) ];
            }
        }));
    }));
}

/** Enables the network connection and re-enqueues all pending operations. */ function Su(t, e, n) {
    var r = this;
    void 0 === n && (n = {});
    var i = new vr;
    return t.asyncQueue.enqueueAndForget((function() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(r, void 0, void 0, (function() {
            var r;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(o) {
                switch (o.label) {
                  case 0:
                    return r = function(t, e, n, r, i) {
                        var o = new fu({
                            next: function(o) {
                                // Remove query first before passing event to user to avoid
                                // user actions affecting the now stale query.
                                e.enqueueAndForget((function() {
                                    return ds(t, s);
                                }));
                                var u = o.docs.has(n);
                                !u && o.fromCache ? 
                                // TODO(dimond): If we're online and the document doesn't
                                // exist then we resolve with a doc.exists set to false. If
                                // we're offline however, we reject the Promise in this
                                // case. Two options: 1) Cache the negative response from
                                // the server so we can deliver that even when you're
                                // offline 2) Actually reject the Promise in the online case
                                // if the document doesn't exist.
                                i.reject(new T(E.UNAVAILABLE, "Failed to get document because the client is offline.")) : u && o.fromCache && r && "server" === r.source ? i.reject(new T(E.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : i.resolve(o);
                            },
                            error: function(t) {
                                return i.reject(t);
                            }
                        }), s = new ms(zt(n.path), o, {
                            includeMetadataChanges: !0,
                            so: !0
                        });
                        return ls(t, s);
                    }, [ 4 /*yield*/ , Tu(t) ];

                  case 1:
                    return [ 2 /*return*/ , r.apply(void 0, [ o.sent(), t.asyncQueue, e, n, i ]) ];
                }
            }));
        }));
    })), i.promise;
}

function Nu(t, e, n) {
    var r = this;
    void 0 === n && (n = {});
    var i = new vr;
    return t.asyncQueue.enqueueAndForget((function() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(r, void 0, void 0, (function() {
            var r;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(o) {
                switch (o.label) {
                  case 0:
                    return r = function(t, e, n, r, i) {
                        var o = new fu({
                            next: function(n) {
                                // Remove query first before passing event to user to avoid
                                // user actions affecting the now stale query.
                                e.enqueueAndForget((function() {
                                    return ds(t, s);
                                })), n.fromCache && "server" === r.source ? i.reject(new T(E.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : i.resolve(n);
                            },
                            error: function(t) {
                                return i.reject(t);
                            }
                        }), s = new ms(n, o, {
                            includeMetadataChanges: !0,
                            so: !0
                        });
                        return ls(t, s);
                    }, [ 4 /*yield*/ , Tu(t) ];

                  case 1:
                    return [ 2 /*return*/ , r.apply(void 0, [ o.sent(), t.asyncQueue, e, n, i ]) ];
                }
            }));
        }));
    })), i.promise;
}

var Du = 
/**
     * Constructs a DatabaseInfo using the provided host, databaseId and
     * persistenceKey.
     *
     * @param databaseId - The database to use.
     * @param appId - The Firebase App Id.
     * @param persistenceKey - A unique identifier for this Firestore's local
     * storage (used in conjunction with the databaseId).
     * @param host - The Firestore backend host to connect to.
     * @param ssl - Whether to use SSL when connecting.
     * @param forceLongPolling - Whether to use the forceLongPolling option
     * when using WebChannel as the network transport.
     * @param autoDetectLongPolling - Whether to use the detectBufferingProxy
     * option when using WebChannel as the network transport.
     */
function(t, e, n, r, i, o, s) {
    this.databaseId = t, this.appId = e, this.persistenceKey = n, this.host = r, this.ssl = i, 
    this.forceLongPolling = o, this.autoDetectLongPolling = s;
}, Au = /** @class */ function() {
    function t(t, e) {
        this.projectId = t, this.database = e || "(default)";
    }
    return Object.defineProperty(t.prototype, "isDefaultDatabase", {
        get: function() {
            return "(default)" === this.database;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.isEqual = function(e) {
        return e instanceof t && e.projectId === this.projectId && e.database === this.database;
    }, t;
}(), ku = new Map, xu = function(t, e) {
    this.user = e, this.type = "OAuth", this.authHeaders = {}, 
    // Set the headers using Object Literal notation to avoid minification
    this.authHeaders.Authorization = "Bearer " + t;
}, Cu = /** @class */ function() {
    function t() {
        /**
         * Stores the listener registered with setChangeListener()
         * This isn't actually necessary since the UID never changes, but we use this
         * to verify the listen contract is adhered to in tests.
         */
        this.changeListener = null;
    }
    return t.prototype.getToken = function() {
        return Promise.resolve(null);
    }, t.prototype.invalidateToken = function() {}, t.prototype.setChangeListener = function(t) {
        this.changeListener = t, 
        // Fire with initial user.
        t(uo.UNAUTHENTICATED);
    }, t.prototype.removeChangeListener = function() {
        this.changeListener = null;
    }, t;
}(), Ru = /** @class */ function() {
    function t(t) {
        var e = this;
        /**
         * The auth token listener registered with FirebaseApp, retained here so we
         * can unregister it.
         */        this.oc = null, 
        /** Tracks the current User. */
        this.currentUser = uo.UNAUTHENTICATED, this.receivedInitialUser = !1, 
        /**
             * Counter used to detect if the token changed while a getToken request was
             * outstanding.
             */
        this.cc = 0, 
        /** The listener registered with setChangeListener(). */
        this.changeListener = null, this.forceRefresh = !1, this.oc = function() {
            e.cc++, e.currentUser = e.uc(), e.receivedInitialUser = !0, e.changeListener && e.changeListener(e.currentUser);
        }, this.cc = 0, this.auth = t.getImmediate({
            optional: !0
        }), this.auth ? this.auth.addAuthTokenListener(this.oc) : (
        // if auth is not available, invoke tokenListener once with null token
        this.oc(null), t.get().then((function(t) {
            e.auth = t, e.oc && 
            // tokenListener can be removed by removeChangeListener()
            e.auth.addAuthTokenListener(e.oc);
        }), (function() {})));
    }
    return t.prototype.getToken = function() {
        var t = this, e = this.cc, n = this.forceRefresh;
        // Take note of the current value of the tokenCounter so that this method
        // can fail (with an ABORTED error) if there is a token change while the
        // request is outstanding.
                return this.forceRefresh = !1, this.auth ? this.auth.getToken(n).then((function(n) {
            // Cancel the request since the token changed while the request was
            // outstanding so the response is potentially for a previous user (which
            // user, we can't be sure).
            return t.cc !== e ? (D("FirebaseCredentialsProvider", "getToken aborted due to token change."), 
            t.getToken()) : n ? (R("string" == typeof n.accessToken), new xu(n.accessToken, t.currentUser)) : null;
        })) : Promise.resolve(null);
    }, t.prototype.invalidateToken = function() {
        this.forceRefresh = !0;
    }, t.prototype.setChangeListener = function(t) {
        this.changeListener = t, 
        // Fire the initial event
        this.receivedInitialUser && t(this.currentUser);
    }, t.prototype.removeChangeListener = function() {
        this.auth && this.auth.removeAuthTokenListener(this.oc), this.oc = null, this.changeListener = null;
    }, 
    // Auth.getUid() can return null even with a user logged in. It is because
    // getUid() is synchronous, but the auth code populating Uid is asynchronous.
    // This method should only be called in the AuthTokenListener callback
    // to guarantee to get the actual user.
    t.prototype.uc = function() {
        var t = this.auth && this.auth.getUid();
        return R(null === t || "string" == typeof t), new uo(t);
    }, t;
}(), Ou = /** @class */ function() {
    function t(t, e) {
        this.ac = t, this.hc = e, this.type = "FirstParty", this.user = uo.FIRST_PARTY;
    }
    return Object.defineProperty(t.prototype, "authHeaders", {
        get: function() {
            var t = {
                "X-Goog-AuthUser": this.hc
            }, e = this.ac.auth.getAuthHeaderValueForFirstParty([]);
            // Use array notation to prevent minification
                        return e && (t.Authorization = e), t;
        },
        enumerable: !1,
        configurable: !0
    }), t;
}(), Lu = /** @class */ function() {
    function t(t, e) {
        this.ac = t, this.hc = e;
    }
    return t.prototype.getToken = function() {
        return Promise.resolve(new Ou(this.ac, this.hc));
    }, t.prototype.setChangeListener = function(t) {
        // Fire with initial uid.
        t(uo.FIRST_PARTY);
    }, t.prototype.removeChangeListener = function() {}, t.prototype.invalidateToken = function() {}, 
    t;
}();

/** The default database name for a project. */
/** Represents the database ID a Firestore client is associated with. */
/**
 * Builds a CredentialsProvider depending on the type of
 * the credentials passed in.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Pu(t, e, n) {
    if (!n) throw new T(E.INVALID_ARGUMENT, "Function " + t + "() cannot be called with an empty " + e + ".");
}

function Mu(t, e) {
    if (void 0 === e) return {
        merge: !1
    };
    if (void 0 !== e.mergeFields && void 0 !== e.merge) throw new T(E.INVALID_ARGUMENT, "Invalid options passed to function " + t + '(): You cannot specify both "merge" and "mergeFields".');
    return e;
}

/**
 * Validates that two boolean options are not set at the same time.
 */ function Fu(t, e, n, r) {
    if (!0 === e && !0 === r) throw new T(E.INVALID_ARGUMENT, t + " and " + n + " cannot be used together.");
}

/**
 * Validates that `path` refers to a document (indicated by the fact it contains
 * an even numbers of segments).
 */ function Vu(t) {
    if (!st.isDocumentKey(t)) throw new T(E.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + t + " has " + t.length + ".");
}

/**
 * Validates that `path` refers to a collection (indicated by the fact it
 * contains an odd numbers of segments).
 */ function qu(t) {
    if (st.isDocumentKey(t)) throw new T(E.INVALID_ARGUMENT, "Invalid collection reference. Collection references must have an odd number of segments, but " + t + " has " + t.length + ".");
}

/**
 * Returns true if it's a non-null object without a custom prototype
 * (i.e. excludes Array, Date, etc.).
 */
/** Returns a string describing the type / value of the provided input. */ function Uu(t) {
    if (void 0 === t) return "undefined";
    if (null === t) return "null";
    if ("string" == typeof t) return t.length > 20 && (t = t.substring(0, 20) + "..."), 
    JSON.stringify(t);
    if ("number" == typeof t || "boolean" == typeof t) return "" + t;
    if ("object" == typeof t) {
        if (t instanceof Array) return "an array";
        var e = 
        /** Hacky method to try to get the constructor name for an object. */
        function(t) {
            if (t.constructor) {
                var e = /function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());
                if (e && e.length > 1) return e[1];
            }
            return null;
        }(t);
        return e ? "a custom " + e + " object" : "an object";
    }
    return "function" == typeof t ? "a function" : C();
}

function Bu(t, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
e) {
    if ("_delegate" in t && (
    // Unwrap Compat types
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    t = t._delegate), !(t instanceof e)) {
        if (e.name === t.constructor.name) throw new T(E.INVALID_ARGUMENT, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
        var n = Uu(t);
        throw new T(E.INVALID_ARGUMENT, "Expected type '" + e.name + "', but it was: " + n);
    }
    return t;
}

function ju(t, e) {
    if (e <= 0) throw new T(E.INVALID_ARGUMENT, "Function " + t + "() requires a positive number, but it was: " + e + ".");
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// settings() defaults:
/**
 * A concrete type describing all the values that can be applied via a
 * user-supplied firestore.Settings object. This is a separate type so that
 * defaults can be supplied and the value can be checked for equality.
 */ var Ku = /** @class */ function() {
    function t(t) {
        var e;
        if (void 0 === t.host) {
            if (void 0 !== t.ssl) throw new T(E.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
            this.host = "firestore.googleapis.com", this.ssl = !0;
        } else this.host = t.host, this.ssl = null === (e = t.ssl) || void 0 === e || e;
        if (this.credentials = t.credentials, this.ignoreUndefinedProperties = !!t.ignoreUndefinedProperties, 
        void 0 === t.cacheSizeBytes) this.cacheSizeBytes = 41943040; else {
            if (-1 !== t.cacheSizeBytes && t.cacheSizeBytes < 1048576) throw new T(E.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
            this.cacheSizeBytes = t.cacheSizeBytes;
        }
        this.experimentalForceLongPolling = !!t.experimentalForceLongPolling, this.experimentalAutoDetectLongPolling = !!t.experimentalAutoDetectLongPolling, 
        Fu("experimentalForceLongPolling", t.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", t.experimentalAutoDetectLongPolling);
    }
    return t.prototype.isEqual = function(t) {
        return this.host === t.host && this.ssl === t.ssl && this.credentials === t.credentials && this.cacheSizeBytes === t.cacheSizeBytes && this.experimentalForceLongPolling === t.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === t.experimentalAutoDetectLongPolling && this.ignoreUndefinedProperties === t.ignoreUndefinedProperties;
    }, t;
}(), Gu = /** @class */ function() {
    /** @hideconstructor */
    function t(t, e) {
        this._persistenceKey = "(lite)", this._settings = new Ku({}), this._settingsFrozen = !1, 
        t instanceof Au ? (this._databaseId = t, this._credentials = new Cu) : (this._app = t, 
        this._databaseId = function(t) {
            if (!Object.prototype.hasOwnProperty.apply(t.options, [ "projectId" ])) throw new T(E.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
            return new Au(t.options.projectId);
        }(t), this._credentials = new Ru(e));
    }
    return Object.defineProperty(t.prototype, "app", {
        /**
         * The {@link FirebaseApp} associated with this `Firestore` service
         * instance.
         */
        get: function() {
            if (!this._app) throw new T(E.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
            return this._app;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "_initialized", {
        get: function() {
            return this._settingsFrozen;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "_terminated", {
        get: function() {
            return void 0 !== this._terminateTask;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype._setSettings = function(t) {
        if (this._settingsFrozen) throw new T(E.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
        this._settings = new Ku(t), void 0 !== t.credentials && (this._credentials = function(t) {
            if (!t) return new Cu;
            switch (t.type) {
              case "gapi":
                var e = t.client;
                // Make sure this really is a Gapi client.
                                return R(!("object" != typeof e || null === e || !e.auth || !e.auth.getAuthHeaderValueForFirstParty)), 
                new Lu(e, t.sessionIndex || "0");

              case "provider":
                return t.client;

              default:
                throw new T(E.INVALID_ARGUMENT, "makeCredentialsProvider failed due to invalid credential type");
            }
        }(t.credentials));
    }, t.prototype._getSettings = function() {
        return this._settings;
    }, t.prototype._freezeSettings = function() {
        return this._settingsFrozen = !0, this._settings;
    }, t.prototype._delete = function() {
        return this._terminateTask || (this._terminateTask = this._terminate()), this._terminateTask;
    }, t.prototype.toJSON = function() {
        return {
            app: this._app,
            databaseId: this._databaseId,
            settings: this._settings
        };
    }, 
    /**
     * Terminates all components used by this client. Subclasses can override
     * this method to clean up their own dependencies, but must also call this
     * method.
     *
     * Only ever called once.
     */
    t.prototype._terminate = function() {
        /**
 * Removes all components associated with the provided instance. Must be called
 * when the `Firestore` instance is terminated.
 */
        return t = this, (e = ku.get(t)) && (D("ComponentProvider", "Removing Datastore"), 
        ku.delete(t), e.terminate()), Promise.resolve();
        var t, e;
    }, t;
}(), zu = /** @class */ function() {
    /** @hideconstructor */
    function t(t, e, n) {
        this._converter = e, this._key = n, 
        /** The type of this Firestore reference. */
        this.type = "document", this.firestore = t;
    }
    return Object.defineProperty(t.prototype, "_path", {
        get: function() {
            return this._key.path;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "id", {
        /**
         * The document's identifier within its collection.
         */
        get: function() {
            return this._key.path.lastSegment();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "path", {
        /**
         * A string representing the path of the referenced document (relative
         * to the root of the database).
         */
        get: function() {
            return this._key.path.canonicalString();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "parent", {
        /**
         * The collection this `DocumentReference` belongs to.
         */
        get: function() {
            return new Wu(this.firestore, this._converter, this._key.path.popLast());
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.withConverter = function(e) {
        return new t(this.firestore, e, this._key);
    }, t;
}(), Qu = /** @class */ function() {
    // This is the lite version of the Query class in the main SDK.
    /** @hideconstructor protected */
    function t(t, e, n) {
        this._converter = e, this._query = n, 
        /** The type of this Firestore reference. */
        this.type = "query", this.firestore = t;
    }
    return t.prototype.withConverter = function(e) {
        return new t(this.firestore, e, this._query);
    }, t;
}(), Wu = /** @class */ function(t) {
    /** @hideconstructor */
    function e(e, n, r) {
        var i = this;
        return (i = t.call(this, e, n, zt(r)) || this).firestore = e, i._path = r, i.type = "collection", 
        i;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), Object.defineProperty(e.prototype, "id", {
        /** The collection's identifier. */ get: function() {
            return this._query.path.lastSegment();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "path", {
        /**
         * A string representing the path of the referenced collection (relative
         * to the root of the database).
         */
        get: function() {
            return this._query.path.canonicalString();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "parent", {
        /**
         * A reference to the containing `DocumentReference` if this is a
         * subcollection. If this isn't a subcollection, the reference is null.
         */
        get: function() {
            var t = this._path.popLast();
            return t.isEmpty() ? null : new zu(this.firestore, 
            /* converter= */ null, new st(t));
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.withConverter = function(t) {
        return new e(this.firestore, t, this._path);
    }, e;
}(Qu);

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The Cloud Firestore service interface.
 *
 * Do not call this constructor directly. Instead, use {@link getFirestore}.
 */ function Hu(t, e) {
    for (var n, r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
    if (t = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_0__["getModularInstance"])(t), Pu("collection", "path", e), t instanceof Gu) return qu(n = z.fromString.apply(z, Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__spreadArray"])([ e ], r))), 
    new Wu(t, /* converter= */ null, n);
    if (!(t instanceof zu || t instanceof Wu)) throw new T(E.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
    return qu(n = z.fromString.apply(z, Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__spreadArray"])([ t.path ], r)).child(z.fromString(e))), new Wu(t.firestore, 
    /* converter= */ null, n);
}

// TODO(firestorelite): Consider using ErrorFactory -
// https://github.com/firebase/firebase-js-sdk/blob/0131e1f/packages/util/src/errors.ts#L106
/**
 * Creates and returns a new `Query` instance that includes all documents in the
 * database that are contained in a collection or subcollection with the
 * given `collectionId`.
 *
 * @param firestore - A reference to the root Firestore instance.
 * @param collectionId - Identifies the collections to query over. Every
 * collection or subcollection with this ID as the last segment of its path
 * will be included. Cannot contain a slash.
 * @returns The created `Query`.
 */ function Yu(t, e) {
    for (var n, r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
    if (t = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_0__["getModularInstance"])(t), 
    // We allow omission of 'pathString' but explicitly prohibit passing in both
    // 'undefined' and 'null'.
    1 === arguments.length && (e = P.u()), Pu("doc", "path", e), t instanceof Gu) return Vu(n = z.fromString.apply(z, Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__spreadArray"])([ e ], r))), 
    new zu(t, 
    /* converter= */ null, new st(n));
    if (!(t instanceof zu || t instanceof Wu)) throw new T(E.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
    return Vu(n = t._path.child(z.fromString.apply(z, Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__spreadArray"])([ e ], r)))), new zu(t.firestore, t instanceof Wu ? t._converter : null, new st(n));
}

/**
 * Returns true if the provided references are equal.
 *
 * @param left - A reference to compare.
 * @param right - A reference to compare.
 * @returns true if the references point to the same location in the same
 * Firestore database.
 */ function Xu(t, e) {
    return t = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_0__["getModularInstance"])(t), e = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_0__["getModularInstance"])(e), (t instanceof zu || t instanceof Wu) && (e instanceof zu || e instanceof Wu) && t.firestore === e.firestore && t.path === e.path && t._converter === e._converter
    /**
 * Returns true if the provided queries point to the same collection and apply
 * the same constraints.
 *
 * @param left - A `Query` to compare.
 * @param right - A `Query` to compare.
 * @returns true if the references point to the same location in the same
 * Firestore database.
 */;
}

function Ju(t, e) {
    return t = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_0__["getModularInstance"])(t), e = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_0__["getModularInstance"])(e), t instanceof Qu && e instanceof Qu && t.firestore === e.firestore && te(t._query, e._query) && t._converter === e._converter
    /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */;
}

var $u = /** @class */ function() {
    function t() {
        var t = this;
        // The last promise in the queue.
                this.lc = Promise.resolve(), 
        // A list of retryable operations. Retryable operations are run in order and
        // retried with backoff.
        this.fc = [], 
        // Is this AsyncQueue being shut down? Once it is set to true, it will not
        // be changed again.
        this.dc = !1, 
        // Operations scheduled to be queued in the future. Operations are
        // automatically removed after they are run or canceled.
        this.wc = [], 
        // visible for testing
        this._c = null, 
        // Flag set while there's an outstanding AsyncQueue operation, used for
        // assertion sanity-checks.
        this.mc = !1, 
        // List of TimerIds to fast-forward delays for.
        this.yc = [], 
        // Backoff timer used to schedule retries for retryable operations
        this.Zi = new Do(this, "async_queue_retry" /* AsyncQueueRetry */), 
        // Visibility handler that triggers an immediate retry of all retryable
        // operations. Meant to speed up recovery when we regain file system access
        // after page comes into foreground.
        this.gc = function() {
            var e = So();
            e && D("AsyncQueue", "Visibility state changed to " + e.visibilityState), t.Zi.Gi();
        };
        var e = So();
        e && "function" == typeof e.addEventListener && e.addEventListener("visibilitychange", this.gc);
    }
    return Object.defineProperty(t.prototype, "isShuttingDown", {
        get: function() {
            return this.dc;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Adds a new operation to the queue without waiting for it to complete (i.e.
     * we ignore the Promise result).
     */
    t.prototype.enqueueAndForget = function(t) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.enqueue(t);
    }, t.prototype.enqueueAndForgetEvenWhileRestricted = function(t) {
        this.Ec(), 
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.Tc(t);
    }, t.prototype.enterRestrictedMode = function() {
        if (!this.dc) {
            this.dc = !0;
            var t = So();
            t && "function" == typeof t.removeEventListener && t.removeEventListener("visibilitychange", this.gc);
        }
    }, t.prototype.enqueue = function(t) {
        return this.Ec(), this.dc ? new Promise((function(t) {})) : this.Tc(t);
    }, t.prototype.enqueueRetryable = function(t) {
        var e = this;
        this.enqueueAndForget((function() {
            return e.fc.push(t), e.Ic();
        }));
    }, 
    /**
     * Runs the next operation from the retryable queue. If the operation fails,
     * reschedules with backoff.
     */
    t.prototype.Ic = function() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
            var t, e = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(n) {
                switch (n.label) {
                  case 0:
                    if (0 === this.fc.length) return [ 3 /*break*/ , 5 ];
                    n.label = 1;

                  case 1:
                    return n.trys.push([ 1, 3, , 4 ]), [ 4 /*yield*/ , this.fc[0]() ];

                  case 2:
                    return n.sent(), this.fc.shift(), this.Zi.reset(), [ 3 /*break*/ , 4 ];

                  case 3:
                    if (!_r(t = n.sent())) throw t;
                    // Failure will be handled by AsyncQueue
                                        return D("AsyncQueue", "Operation failed with retryable error: " + t), 
                    [ 3 /*break*/ , 4 ];

                  case 4:
                    this.fc.length > 0 && 
                    // If there are additional operations, we re-schedule `retryNextOp()`.
                    // This is necessary to run retryable operations that failed during
                    // their initial attempt since we don't know whether they are already
                    // enqueued. If, for example, `op1`, `op2`, `op3` are enqueued and `op1`
                    // needs to  be re-run, we will run `op1`, `op1`, `op2` using the
                    // already enqueued calls to `retryNextOp()`. `op3()` will then run in the
                    // call scheduled here.
                    // Since `backoffAndRun()` cancels an existing backoff and schedules a
                    // new backoff on every call, there is only ever a single additional
                    // operation in the queue.
                    this.Zi.ji((function() {
                        return e.Ic();
                    })), n.label = 5;

                  case 5:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Tc = function(t) {
        var e = this, n = this.lc.then((function() {
            return e.mc = !0, t().catch((function(t) {
                // Re-throw the error so that this.tail becomes a rejected Promise and
                // all further attempts to chain (via .then) will just short-circuit
                // and return the rejected Promise.
                throw e._c = t, e.mc = !1, A("INTERNAL UNHANDLED ERROR: ", 
                /**
 * Chrome includes Error.message in Error.stack. Other browsers do not.
 * This returns expected output of message + stack when available.
 * @param error - Error or FirestoreError
 */
                function(t) {
                    var e = t.message || "";
                    return t.stack && (e = t.stack.includes(t.message) ? t.stack : t.message + "\n" + t.stack), 
                    e;
                }(t)), t;
            })).then((function(t) {
                return e.mc = !1, t;
            }));
        }));
        return this.lc = n, n;
    }, t.prototype.enqueueAfterDelay = function(t, e, n) {
        var r = this;
        this.Ec(), 
        // Fast-forward delays for timerIds that have been overriden.
        this.yc.indexOf(t) > -1 && (e = 0);
        var i = os.createAndSchedule(this, t, e, n, (function(t) {
            return r.Ac(t);
        }));
        return this.wc.push(i), i;
    }, t.prototype.Ec = function() {
        this._c && C();
    }, t.prototype.verifyOperationInProgress = function() {}, 
    /**
     * Waits until all currently queued tasks are finished executing. Delayed
     * operations are not run.
     */
    t.prototype.Rc = function() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
            var t;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return [ 4 /*yield*/ , t = this.lc ];

                  case 1:
                    e.sent(), e.label = 2;

                  case 2:
                    if (t !== this.lc) return [ 3 /*break*/ , 0 ];
                    e.label = 3;

                  case 3:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * For Tests: Determine if a delayed operation with a particular TimerId
     * exists.
     */
    t.prototype.bc = function(t) {
        for (var e = 0, n = this.wc; e < n.length; e++) {
            if (n[e].timerId === t) return !0;
        }
        return !1;
    }, 
    /**
     * For Tests: Runs some or all delayed operations early.
     *
     * @param lastTimerId - Delayed operations up to and including this TimerId
     * will be drained. Pass TimerId.All to run all delayed operations.
     * @returns a Promise that resolves once all operations have been run.
     */
    t.prototype.vc = function(t) {
        var e = this;
        // Note that draining may generate more delayed ops, so we do that first.
                return this.Rc().then((function() {
            // Run ops in the same order they'd run if they ran naturally.
            e.wc.sort((function(t, e) {
                return t.targetTimeMs - e.targetTimeMs;
            }));
            for (var n = 0, r = e.wc; n < r.length; n++) {
                var i = r[n];
                if (i.skipDelay(), "all" /* All */ !== t && i.timerId === t) break;
            }
            return e.Rc();
        }));
    }, 
    /**
     * For Tests: Skip all subsequent delays for a timer id.
     */
    t.prototype.Pc = function(t) {
        this.yc.push(t);
    }, 
    /** Called once a DelayedOperation is run or canceled. */ t.prototype.Ac = function(t) {
        // NOTE: indexOf / slice are O(n), but delayedOperations is expected to be small.
        var e = this.wc.indexOf(t);
        this.wc.splice(e, 1);
    }, t;
}();

function Zu(t) {
    /**
 * Returns true if obj is an object and contains at least one of the specified
 * methods.
 */
    return function(t, e) {
        if ("object" != typeof t || null === t) return !1;
        for (var n = t, r = 0, i = [ "next", "error", "complete" ]; r < i.length; r++) {
            var o = i[r];
            if (o in n && "function" == typeof n[o]) return !0;
        }
        return !1;
    }(t);
}

var ta = /** @class */ function() {
    function t() {
        this._progressObserver = {}, this._taskCompletionResolver = new vr, this._lastProgress = {
            taskState: "Running",
            totalBytes: 0,
            totalDocuments: 0,
            bytesLoaded: 0,
            documentsLoaded: 0
        }
        /**
     * Registers functions to listen to bundle loading progress events.
     * @param next - Called when there is a progress update from bundle loading. Typically `next` calls occur
     *   each time a Firestore document is loaded from the bundle.
     * @param error - Called when an error occurs during bundle loading. The task aborts after reporting the
     *   error, and there should be no more updates after this.
     * @param complete - Called when the loading task is complete.
     */;
    }
    return t.prototype.onProgress = function(t, e, n) {
        this._progressObserver = {
            next: t,
            error: e,
            complete: n
        };
    }, 
    /**
     * Implements the `Promise<LoadBundleTaskProgress>.catch` interface.
     *
     * @param onRejected - Called when an error occurs during bundle loading.
     */
    t.prototype.catch = function(t) {
        return this._taskCompletionResolver.promise.catch(t);
    }, 
    /**
     * Implements the `Promise<LoadBundleTaskProgress>.then` interface.
     *
     * @param onFulfilled - Called on the completion of the loading task with a final `LoadBundleTaskProgress` update.
     *   The update will always have its `taskState` set to `"Success"`.
     * @param onRejected - Called when an error occurs during bundle loading.
     */
    t.prototype.then = function(t, e) {
        return this._taskCompletionResolver.promise.then(t, e);
    }, 
    /**
     * Notifies all observers that bundle loading has completed, with a provided
     * `LoadBundleTaskProgress` object.
     *
     * @private
     */
    t.prototype._completeWith = function(t) {
        this._updateProgress(t), this._progressObserver.complete && this._progressObserver.complete(), 
        this._taskCompletionResolver.resolve(t);
    }, 
    /**
     * Notifies all observers that bundle loading has failed, with a provided
     * `Error` as the reason.
     *
     * @private
     */
    t.prototype._failWith = function(t) {
        this._lastProgress.taskState = "Error", this._progressObserver.next && this._progressObserver.next(this._lastProgress), 
        this._progressObserver.error && this._progressObserver.error(t), this._taskCompletionResolver.reject(t);
    }, 
    /**
     * Notifies a progress update of loading a bundle.
     * @param progress - The new progress.
     *
     * @private
     */
    t.prototype._updateProgress = function(t) {
        this._lastProgress = t, this._progressObserver.next && this._progressObserver.next(t);
    }, t;
}(), ea = -1, na = /** @class */ function(t) {
    /** @hideconstructor */
    function e(e, n) {
        var r = this;
        return (r = t.call(this, e, n) || this)._queue = new $u, r._persistenceKey = "name" in e ? e.name : "[DEFAULT]", 
        r;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype._terminate = function() {
        return this._firestoreClient || 
        // The client must be initialized to ensure that all subsequent API
        // usage throws an exception.
        ia(this), this._firestoreClient.terminate();
    }, e;
}(Gu);

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** DOMException error code constants. */
/**
 * @internal
 */
function ra(t) {
    return t._firestoreClient || ia(t), t._firestoreClient.verifyNotTerminated(), t._firestoreClient;
}

function ia(t) {
    var e, n = t._freezeSettings(), r = function(t, e, n, r) {
        return new Du(t, e, n, r.host, r.ssl, r.experimentalForceLongPolling, r.experimentalAutoDetectLongPolling);
    }(t._databaseId, (null === (e = t._app) || void 0 === e ? void 0 : e.options.appId) || "", t._persistenceKey, n);
    t._firestoreClient = new yu(t._credentials, t._queue, r);
}

/**
 * Attempts to enable persistent storage, if possible.
 *
 * Must be called before any other functions (other than
 * {@link initializeFirestore}, {@link getFirestore} or
 * {@link clearIndexedDbPersistence}.
 *
 * If this fails, `enableIndexedDbPersistence()` will reject the promise it
 * returns. Note that even after this failure, the `Firestore` instance will
 * remain usable, however offline persistence will be disabled.
 *
 * There are several reasons why this can fail, which can be identified by
 * the `code` on the error.
 *
 *   * failed-precondition: The app is already open in another browser tab.
 *   * unimplemented: The browser is incompatible with the offline
 *     persistence implementation.
 *
 * @param firestore - The `Firestore` instance to enable persistence for.
 * @param persistenceSettings - Optional settings object to configure
 * persistence.
 * @returns A promise that represents successfully enabling persistent storage.
 */
/**
 * Registers both the `OfflineComponentProvider` and `OnlineComponentProvider`.
 * If the operation fails with a recoverable error (see
 * `canRecoverFromIndexedDbError()` below), the returned Promise is rejected
 * but the client remains usable.
 */ function oa(t, e, n) {
    var r = this, i = new vr;
    return t.asyncQueue.enqueue((function() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(r, void 0, void 0, (function() {
            var r;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(o) {
                switch (o.label) {
                  case 0:
                    return o.trys.push([ 0, 3, , 4 ]), [ 4 /*yield*/ , vu(t, n) ];

                  case 1:
                    return o.sent(), [ 4 /*yield*/ , mu(t, e) ];

                  case 2:
                    return o.sent(), i.resolve(), [ 3 /*break*/ , 4 ];

                  case 3:
                    if (!
                    /**
         * Decides whether the provided error allows us to gracefully disable
         * persistence (as opposed to crashing the client).
         */
                    function(t) {
                        return "FirebaseError" === t.name ? t.code === E.FAILED_PRECONDITION || t.code === E.UNIMPLEMENTED : !("undefined" != typeof DOMException && t instanceof DOMException) || (22 === t.code || 20 === t.code || 
                        // Firefox Private Browsing mode disables IndexedDb and returns
                        // INVALID_STATE for any usage.
                        11 === t.code);
                    }(r = o.sent())) throw r;
                    return console.warn("Error enabling offline persistence. Falling back to persistence disabled: " + r), 
                    i.reject(r), [ 3 /*break*/ , 4 ];

                  case 4:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    })).then((function() {
        return i.promise;
    }));
}

/**
 * Re-enables use of the network for this Firestore instance after a prior
 * call to {@link disableNetwork}.
 *
 * @returns A promise that is resolved once the network has been enabled.
 */
function sa(t) {
    if (t._initialized || t._terminated) throw new T(E.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A `FieldPath` refers to a field in a document. The path may consist of a
 * single field name (referring to a top-level field in the document), or a
 * list of field names (referring to a nested field in the document).
 *
 * Create a `FieldPath` by providing field names. If more than one field
 * name is provided, the path will point to a nested field in a document.
 */ var ua = /** @class */ function() {
    /**
     * Creates a FieldPath from the provided field names. If more than one field
     * name is provided, the path will point to a nested field in a document.
     *
     * @param fieldNames - A list of field names.
     */
    function t() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        for (var n = 0; n < t.length; ++n) if (0 === t[n].length) throw new T(E.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
        this._internalPath = new W(t);
    }
    /**
     * Returns true if this `FieldPath` is equal to the provided one.
     *
     * @param other - The `FieldPath` to compare against.
     * @returns true if this `FieldPath` is equal to the provided one.
     */    return t.prototype.isEqual = function(t) {
        return this._internalPath.isEqual(t._internalPath);
    }, t;
}(), aa = /** @class */ function() {
    /** @hideconstructor */
    function t(t) {
        this._byteString = t;
    }
    /**
     * Creates a new `Bytes` object from the given Base64 string, converting it to
     * bytes.
     *
     * @param base64 - The Base64 string used to create the `Bytes` object.
     */    return t.fromBase64String = function(e) {
        try {
            return new t(Y.fromBase64String(e));
        } catch (e) {
            throw new T(E.INVALID_ARGUMENT, "Failed to construct data from Base64 string: " + e);
        }
    }, 
    /**
     * Creates a new `Bytes` object from the given Uint8Array.
     *
     * @param array - The Uint8Array used to create the `Bytes` object.
     */
    t.fromUint8Array = function(e) {
        return new t(Y.fromUint8Array(e));
    }, 
    /**
     * Returns the underlying bytes as a Base64-encoded string.
     *
     * @returns The Base64-encoded string created from the `Bytes` object.
     */
    t.prototype.toBase64 = function() {
        return this._byteString.toBase64();
    }, 
    /**
     * Returns the underlying bytes in a new `Uint8Array`.
     *
     * @returns The Uint8Array created from the `Bytes` object.
     */
    t.prototype.toUint8Array = function() {
        return this._byteString.toUint8Array();
    }, 
    /**
     * Returns a string representation of the `Bytes` object.
     *
     * @returns A string representation of the `Bytes` object.
     */
    t.prototype.toString = function() {
        return "Bytes(base64: " + this.toBase64() + ")";
    }, 
    /**
     * Returns true if this `Bytes` object is equal to the provided one.
     *
     * @param other - The `Bytes` object to compare against.
     * @returns true if this `Bytes` object is equal to the provided one.
     */
    t.prototype.isEqual = function(t) {
        return this._byteString.isEqual(t._byteString);
    }, t;
}(), ca = 
/**
     * @param _methodName - The public API endpoint that returns this class.
     */
function(t) {
    this._methodName = t;
}, ha = /** @class */ function() {
    /**
     * Creates a new immutable `GeoPoint` object with the provided latitude and
     * longitude values.
     * @param latitude - The latitude as number between -90 and 90.
     * @param longitude - The longitude as number between -180 and 180.
     */
    function t(t, e) {
        if (!isFinite(t) || t < -90 || t > 90) throw new T(E.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t);
        if (!isFinite(e) || e < -180 || e > 180) throw new T(E.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e);
        this._lat = t, this._long = e;
    }
    return Object.defineProperty(t.prototype, "latitude", {
        /**
         * The latitude of this `GeoPoint` instance.
         */
        get: function() {
            return this._lat;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "longitude", {
        /**
         * The longitude of this `GeoPoint` instance.
         */
        get: function() {
            return this._long;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Returns true if this `GeoPoint` is equal to the provided one.
     *
     * @param other - The `GeoPoint` to compare against.
     * @returns true if this `GeoPoint` is equal to the provided one.
     */
    t.prototype.isEqual = function(t) {
        return this._lat === t._lat && this._long === t._long;
    }, t.prototype.toJSON = function() {
        return {
            latitude: this._lat,
            longitude: this._long
        };
    }, 
    /**
     * Actually private to JS consumers of our API, so this function is prefixed
     * with an underscore.
     */
    t.prototype._compareTo = function(t) {
        return M(this._lat, t._lat) || M(this._long, t._long);
    }, t;
}(), fa = /^__.*__$/, la = /** @class */ function() {
    function t(t, e, n) {
        this.data = t, this.fieldMask = e, this.fieldTransforms = n;
    }
    return t.prototype.toMutation = function(t, e) {
        return null !== this.fieldMask ? new Re(t, this.data, this.fieldMask, e, this.fieldTransforms) : new Ce(t, this.data, e, this.fieldTransforms);
    }, t;
}(), da = /** @class */ function() {
    function t(t, 
    // The fieldMask does not include document transforms.
    e, n) {
        this.data = t, this.fieldMask = e, this.fieldTransforms = n;
    }
    return t.prototype.toMutation = function(t, e) {
        return new Re(t, this.data, this.fieldMask, e, this.fieldTransforms);
    }, t;
}();

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An immutable object representing an array of bytes.
 */ function pa(t) {
    switch (t) {
      case 0 /* Set */ :
 // fall through
              case 2 /* MergeSet */ :
 // fall through
              case 1 /* Update */ :
        return !0;

      case 3 /* Argument */ :
      case 4 /* ArrayArgument */ :
        return !1;

      default:
        throw C();
    }
}

/** A "context" object passed around while parsing user data. */ var ya = /** @class */ function() {
    /**
     * Initializes a ParseContext with the given source and path.
     *
     * @param settings - The settings for the parser.
     * @param databaseId - The database ID of the Firestore instance.
     * @param serializer - The serializer to use to generate the Value proto.
     * @param ignoreUndefinedProperties - Whether to ignore undefined properties
     * rather than throw.
     * @param fieldTransforms - A mutable list of field transforms encountered
     * while parsing the data.
     * @param fieldMask - A mutable list of field paths encountered while parsing
     * the data.
     *
     * TODO(b/34871131): We don't support array paths right now, so path can be
     * null to indicate the context represents any location within an array (in
     * which case certain features will not work and errors will be somewhat
     * compromised).
     */
    function t(t, e, n, r, i, o) {
        this.settings = t, this.databaseId = e, this.R = n, this.ignoreUndefinedProperties = r, 
        // Minor hack: If fieldTransforms is undefined, we assume this is an
        // external call and we need to validate the entire path.
        void 0 === i && this.Vc(), this.fieldTransforms = i || [], this.fieldMask = o || [];
    }
    return Object.defineProperty(t.prototype, "path", {
        get: function() {
            return this.settings.path;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "Sc", {
        get: function() {
            return this.settings.Sc;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /** Returns a new context with the specified settings overwritten. */ t.prototype.Dc = function(e) {
        return new t(Object.assign(Object.assign({}, this.settings), e), this.databaseId, this.R, this.ignoreUndefinedProperties, this.fieldTransforms, this.fieldMask);
    }, t.prototype.Cc = function(t) {
        var e, n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t), r = this.Dc({
            path: n,
            Nc: !1
        });
        return r.xc(t), r;
    }, t.prototype.Fc = function(t) {
        var e, n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t), r = this.Dc({
            path: n,
            Nc: !1
        });
        return r.Vc(), r;
    }, t.prototype.kc = function(t) {
        // TODO(b/34871131): We don't support array paths right now; so make path
        // undefined.
        return this.Dc({
            path: void 0,
            Nc: !0
        });
    }, t.prototype.Oc = function(t) {
        return Pa(t, this.settings.methodName, this.settings.$c || !1, this.path, this.settings.Mc);
    }, 
    /** Returns 'true' if 'fieldPath' was traversed when creating this context. */ t.prototype.contains = function(t) {
        return void 0 !== this.fieldMask.find((function(e) {
            return t.isPrefixOf(e);
        })) || void 0 !== this.fieldTransforms.find((function(e) {
            return t.isPrefixOf(e.field);
        }));
    }, t.prototype.Vc = function() {
        // TODO(b/34871131): Remove null check once we have proper paths for fields
        // within arrays.
        if (this.path) for (var t = 0; t < this.path.length; t++) this.xc(this.path.get(t));
    }, t.prototype.xc = function(t) {
        if (0 === t.length) throw this.Oc("Document fields must not be empty");
        if (pa(this.Sc) && fa.test(t)) throw this.Oc('Document fields cannot begin and end with "__"');
    }, t;
}(), va = /** @class */ function() {
    function t(t, e, n) {
        this.databaseId = t, this.ignoreUndefinedProperties = e, this.R = n || No(t)
        /** Creates a new top-level parse context. */;
    }
    return t.prototype.Lc = function(t, e, n, r) {
        return void 0 === r && (r = !1), new ya({
            Sc: t,
            methodName: e,
            Mc: n,
            path: W.emptyPath(),
            Nc: !1,
            $c: r
        }, this.databaseId, this.R, this.ignoreUndefinedProperties);
    }, t;
}();

/**
 * Helper for parsing raw user input (provided via the API) into internal model
 * classes.
 */ function ma(t) {
    var e = t._freezeSettings(), n = No(t._databaseId);
    return new va(t._databaseId, !!e.ignoreUndefinedProperties, n);
}

/** Parse document data from a set() call. */ function ga(t, e, n, r, i, o) {
    void 0 === o && (o = {});
    var s = t.Lc(o.merge || o.mergeFields ? 2 /* MergeSet */ : 0 /* Set */ , e, n, i);
    Ca("Data must be an object, but it was:", s, r);
    var u, a, c = ka(r, s);
    if (o.merge) u = new H(s.fieldMask), a = s.fieldTransforms; else if (o.mergeFields) {
        for (var h = [], f = 0, l = o.mergeFields; f < l.length; f++) {
            var d = Ra(e, l[f], n);
            if (!s.contains(d)) throw new T(E.INVALID_ARGUMENT, "Field '" + d + "' is specified in your field mask but missing from your input data.");
            Ma(h, d) || h.push(d);
        }
        u = new H(h), a = s.fieldTransforms.filter((function(t) {
            return u.covers(t.field);
        }));
    } else u = null, a = s.fieldTransforms;
    return new la(new bt(c), u, a);
}

var wa = /** @class */ function(t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype._toFieldTransform = function(t) {
        if (2 /* MergeSet */ !== t.Sc) throw 1 /* Update */ === t.Sc ? t.Oc(this._methodName + "() can only appear at the top level of your update data") : t.Oc(this._methodName + "() cannot be used with set() unless you pass {merge:true}");
        // No transform to add for a delete, but we need to add it to our
        // fieldMask so it gets deleted.
                return t.fieldMask.push(t.path), null;
    }, e.prototype.isEqual = function(t) {
        return t instanceof e;
    }, e;
}(ca);

/**
 * Creates a child context for parsing SerializableFieldValues.
 *
 * This is different than calling `ParseContext.contextWith` because it keeps
 * the fieldTransforms and fieldMask separate.
 *
 * The created context has its `dataSource` set to `UserDataSource.Argument`.
 * Although these values are used with writes, any elements in these FieldValues
 * are not considered writes since they cannot contain any FieldValue sentinels,
 * etc.
 *
 * @param fieldValue - The sentinel FieldValue for which to create a child
 *     context.
 * @param context - The parent context.
 * @param arrayElement - Whether or not the FieldValue has an array.
 */ function ba(t, e, n) {
    return new ya({
        Sc: 3 /* Argument */ ,
        Mc: e.settings.Mc,
        methodName: t._methodName,
        Nc: n
    }, e.databaseId, e.R, e.ignoreUndefinedProperties);
}

var Ia = /** @class */ function(t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype._toFieldTransform = function(t) {
        return new Ie(t.path, new de);
    }, e.prototype.isEqual = function(t) {
        return t instanceof e;
    }, e;
}(ca), _a = /** @class */ function(t) {
    function e(e, n) {
        var r = this;
        return (r = t.call(this, e) || this).Bc = n, r;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype._toFieldTransform = function(t) {
        var e = ba(this, t, 
        /*array=*/ !0), n = this.Bc.map((function(t) {
            return Aa(t, e);
        })), r = new pe(n);
        return new Ie(t.path, r);
    }, e.prototype.isEqual = function(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }, e;
}(ca), Ea = /** @class */ function(t) {
    function e(e, n) {
        var r = this;
        return (r = t.call(this, e) || this).Bc = n, r;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype._toFieldTransform = function(t) {
        var e = ba(this, t, 
        /*array=*/ !0), n = this.Bc.map((function(t) {
            return Aa(t, e);
        })), r = new ve(n);
        return new Ie(t.path, r);
    }, e.prototype.isEqual = function(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }, e;
}(ca), Ta = /** @class */ function(t) {
    function e(e, n) {
        var r = this;
        return (r = t.call(this, e) || this).qc = n, r;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype._toFieldTransform = function(t) {
        var e = new ge(t.R, ae(t.R, this.qc));
        return new Ie(t.path, e);
    }, e.prototype.isEqual = function(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }, e;
}(ca);

/** Parse update data from an update() call. */ function Sa(t, e, n, r) {
    var i = t.Lc(1 /* Update */ , e, n);
    Ca("Data must be an object, but it was:", i, r);
    var o = [], s = bt.empty();
    j(r, (function(t, r) {
        var a = La(e, t, n);
        // For Compat types, we have to "extract" the underlying types before
        // performing validation.
                r = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_0__["getModularInstance"])(r);
        var c = i.Fc(a);
        if (r instanceof wa) 
        // Add it to the field mask, but don't add anything to updateData.
        o.push(a); else {
            var h = Aa(r, c);
            null != h && (o.push(a), s.set(a, h));
        }
    }));
    var a = new H(o);
    return new da(s, a, i.fieldTransforms);
}

/** Parse update data from a list of field/value arguments. */ function Na(t, e, n, r, i, o) {
    var s = t.Lc(1 /* Update */ , e, n), a = [ Ra(e, r, n) ], c = [ i ];
    if (o.length % 2 != 0) throw new T(E.INVALID_ARGUMENT, "Function " + e + "() needs to be called with an even number of arguments that alternate between field names and values.");
    for (var h = 0; h < o.length; h += 2) a.push(Ra(e, o[h])), c.push(o[h + 1]);
    // We iterate in reverse order to pick the last value for a field if the
    // user specified the field multiple times.
    for (var f = [], l = bt.empty(), d = a.length - 1; d >= 0; --d) if (!Ma(f, a[d])) {
        var p = a[d], y = c[d];
        // For Compat types, we have to "extract" the underlying types before
        // performing validation.
        y = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_0__["getModularInstance"])(y);
        var v = s.Fc(p);
        if (y instanceof wa) 
        // Add it to the field mask, but don't add anything to updateData.
        f.push(p); else {
            var m = Aa(y, v);
            null != m && (f.push(p), l.set(p, m));
        }
    }
    var g = new H(f);
    return new da(l, g, s.fieldTransforms);
}

/**
 * Parse a "query value" (e.g. value in a where filter or a value in a cursor
 * bound).
 *
 * @param allowArrays - Whether the query value is an array that may directly
 * contain additional arrays (e.g. the operand of an `in` query).
 */ function Da(t, e, n, r) {
    return void 0 === r && (r = !1), Aa(n, t.Lc(r ? 4 /* ArrayArgument */ : 3 /* Argument */ , e));
}

/**
 * Parses user data to Protobuf Values.
 *
 * @param input - Data to be parsed.
 * @param context - A context object representing the current path being parsed,
 * the source of the data being parsed, etc.
 * @returns The parsed value, or null if the value was a FieldValue sentinel
 * that should not be included in the resulting parsed data.
 */ function Aa(t, e) {
    if (xa(
    // Unwrap the API type from the Compat SDK. This will return the API type
    // from firestore-exp.
    t = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_0__["getModularInstance"])(t))) return Ca("Unsupported field value:", e, t), ka(t, e);
    if (t instanceof ca) 
    // FieldValues usually parse into transforms (except FieldValue.delete())
    // in which case we do not want to include this field in our parsed data
    // (as doing so will overwrite the field directly prior to the transform
    // trying to transform it). So we don't add this location to
    // context.fieldMask and we return null as our parsing result.
    /**
     * "Parses" the provided FieldValueImpl, adding any necessary transforms to
     * context.fieldTransforms.
     */
    return function(t, e) {
        // Sentinels are only supported with writes, and not within arrays.
        if (!pa(e.Sc)) throw e.Oc(t._methodName + "() can only be used with update() and set()");
        if (!e.path) throw e.Oc(t._methodName + "() is not currently supported inside arrays");
        var n = t._toFieldTransform(e);
        n && e.fieldTransforms.push(n);
    }(t, e), null;
    if (void 0 === t && e.ignoreUndefinedProperties) 
    // If the input is undefined it can never participate in the fieldMask, so
    // don't handle this below. If `ignoreUndefinedProperties` is false,
    // `parseScalarValue` will reject an undefined value.
    return null;
    if (
    // If context.path is null we are inside an array and we don't support
    // field mask paths more granular than the top-level array.
    e.path && e.fieldMask.push(e.path), t instanceof Array) {
        // TODO(b/34871131): Include the path containing the array in the error
        // message.
        // In the case of IN queries, the parsed data is an array (representing
        // the set of values to be included for the IN query) that may directly
        // contain additional arrays (each representing an individual field
        // value), so we disable this validation.
        if (e.settings.Nc && 4 /* ArrayArgument */ !== e.Sc) throw e.Oc("Nested arrays are not supported");
        return function(t, e) {
            for (var n = [], r = 0, i = 0, o = t; i < o.length; i++) {
                var s = Aa(o[i], e.kc(r));
                null == s && (
                // Just include nulls in the array for fields being replaced with a
                // sentinel.
                s = {
                    nullValue: "NULL_VALUE"
                }), n.push(s), r++;
            }
            return {
                arrayValue: {
                    values: n
                }
            };
        }(t, e);
    }
    return function(t, e) {
        if (null === (t = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_0__["getModularInstance"])(t))) return {
            nullValue: "NULL_VALUE"
        };
        if ("number" == typeof t) return ae(e.R, t);
        if ("boolean" == typeof t) return {
            booleanValue: t
        };
        if ("string" == typeof t) return {
            stringValue: t
        };
        if (t instanceof Date) {
            var n = q.fromDate(t);
            return {
                timestampValue: mn(e.R, n)
            };
        }
        if (t instanceof q) {
            // Firestore backend truncates precision down to microseconds. To ensure
            // offline mode works the same with regards to truncation, perform the
            // truncation immediately without waiting for the backend to do that.
            n = new q(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3));
            return {
                timestampValue: mn(e.R, n)
            };
        }
        if (t instanceof ha) return {
            geoPointValue: {
                latitude: t.latitude,
                longitude: t.longitude
            }
        };
        if (t instanceof aa) return {
            bytesValue: gn(e.R, t._byteString)
        };
        if (t instanceof zu) {
            n = e.databaseId;
            var r = t.firestore._databaseId;
            if (!r.isEqual(n)) throw e.Oc("Document reference is for database " + r.projectId + "/" + r.database + " but should be for database " + n.projectId + "/" + n.database);
            return {
                referenceValue: In(t.firestore._databaseId || e.databaseId, t._key.path)
            };
        }
        throw e.Oc("Unsupported field value: " + Uu(t));
    }(t, e);
}

function ka(t, e) {
    var n = {};
    return K(t) ? 
    // If we encounter an empty object, we explicitly add it to the update
    // mask to ensure that the server creates a map entry.
    e.path && e.path.length > 0 && e.fieldMask.push(e.path) : j(t, (function(t, r) {
        var i = Aa(r, e.Cc(t));
        null != i && (n[t] = i);
    })), {
        mapValue: {
            fields: n
        }
    };
}

function xa(t) {
    return !("object" != typeof t || null === t || t instanceof Array || t instanceof Date || t instanceof q || t instanceof ha || t instanceof aa || t instanceof zu || t instanceof ca);
}

function Ca(t, e, n) {
    if (!xa(n) || !function(t) {
        return "object" == typeof t && null !== t && (Object.getPrototypeOf(t) === Object.prototype || null === Object.getPrototypeOf(t));
    }(n)) {
        var r = Uu(n);
        throw "an object" === r ? e.Oc(t + " a custom object") : e.Oc(t + " " + r);
    }
}

/**
 * Helper that calls fromDotSeparatedString() but wraps any error thrown.
 */ function Ra(t, e, n) {
    if (
    // If required, replace the FieldPath Compat class with with the firestore-exp
    // FieldPath.
    (e = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_0__["getModularInstance"])(e)) instanceof ua) return e._internalPath;
    if ("string" == typeof e) return La(t, e);
    throw Pa("Field path arguments must be of type string or FieldPath.", t, 
    /* hasConverter= */ !1, 
    /* path= */ void 0, n);
}

/**
 * Matches any characters in a field path string that are reserved.
 */ var Oa = new RegExp("[~\\*/\\[\\]]");

/**
 * Wraps fromDotSeparatedString with an error message about the method that
 * was thrown.
 * @param methodName - The publicly visible method name
 * @param path - The dot-separated string form of a field path which will be
 * split on dots.
 * @param targetDoc - The document against which the field path will be
 * evaluated.
 */ function La(t, e, n) {
    if (e.search(Oa) >= 0) throw Pa("Invalid field path (" + e + "). Paths must not contain '~', '*', '/', '[', or ']'", t, 
    /* hasConverter= */ !1, 
    /* path= */ void 0, n);
    try {
        return (new (ua.bind.apply(ua, Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__spreadArray"])([ void 0 ], e.split(".")))))._internalPath;
    } catch (r) {
        throw Pa("Invalid field path (" + e + "). Paths must not be empty, begin with '.', end with '.', or contain '..'", t, 
        /* hasConverter= */ !1, 
        /* path= */ void 0, n);
    }
}

function Pa(t, e, n, r, i) {
    var o = r && !r.isEmpty(), s = void 0 !== i, u = "Function " + e + "() called with invalid data";
    n && (u += " (via `toFirestore()`)");
    var a = "";
    return (o || s) && (a += " (found", o && (a += " in field " + r), s && (a += " in document " + i), 
    a += ")"), new T(E.INVALID_ARGUMENT, (u += ". ") + t + a)
    /** Checks `haystack` if FieldPath `needle` is present. Runs in O(n). */;
}

function Ma(t, e) {
    return t.some((function(t) {
        return t.isEqual(e);
    }));
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A `DocumentSnapshot` contains data read from a document in your Firestore
 * database. The data can be extracted with `.data()` or `.get(<field>)` to
 * get a specific field.
 *
 * For a `DocumentSnapshot` that points to a non-existing document, any data
 * access will return 'undefined'. You can use the `exists()` method to
 * explicitly verify a document's existence.
 */ var Fa = /** @class */ function() {
    // Note: This class is stripped down version of the DocumentSnapshot in
    // the legacy SDK. The changes are:
    // - No support for SnapshotMetadata.
    // - No support for SnapshotOptions.
    /** @hideconstructor protected */
    function t(t, e, n, r, i) {
        this._firestore = t, this._userDataWriter = e, this._key = n, this._document = r, 
        this._converter = i;
    }
    return Object.defineProperty(t.prototype, "id", {
        /** Property of the `DocumentSnapshot` that provides the document's ID. */ get: function() {
            return this._key.path.lastSegment();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "ref", {
        /**
         * The `DocumentReference` for the document included in the `DocumentSnapshot`.
         */
        get: function() {
            return new zu(this._firestore, this._converter, this._key);
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Signals whether or not the document at the snapshot's location exists.
     *
     * @returns true if the document exists.
     */
    t.prototype.exists = function() {
        return null !== this._document;
    }, 
    /**
     * Retrieves all fields in the document as an `Object`. Returns `undefined` if
     * the document doesn't exist.
     *
     * @returns An `Object` containing all fields in the document or `undefined`
     * if the document doesn't exist.
     */
    t.prototype.data = function() {
        if (this._document) {
            if (this._converter) {
                // We only want to use the converter and create a new DocumentSnapshot
                // if a converter has been provided.
                var t = new Va(this._firestore, this._userDataWriter, this._key, this._document, 
                /* converter= */ null);
                return this._converter.fromFirestore(t);
            }
            return this._userDataWriter.convertValue(this._document.data.toProto());
        }
    }, 
    /**
     * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
     * document or field doesn't exist.
     *
     * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
     * field.
     * @returns The data at the specified field location or undefined if no such
     * field exists in the document.
     */
    // We are using `any` here to avoid an explicit cast by our users.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    t.prototype.get = function(t) {
        if (this._document) {
            var e = this._document.data.field(qa("DocumentSnapshot.get", t));
            if (null !== e) return this._userDataWriter.convertValue(e);
        }
    }, t;
}(), Va = /** @class */ function(t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this;
    }
    /**
     * Retrieves all fields in the document as an `Object`.
     *
     * @override
     * @returns An `Object` containing all fields in the document.
     */    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.data = function() {
        return t.prototype.data.call(this);
    }, e;
}(Fa);

/**
 * A `QueryDocumentSnapshot` contains data read from a document in your
 * Firestore database as part of a query. The document is guaranteed to exist
 * and its data can be extracted with `.data()` or `.get(<field>)` to get a
 * specific field.
 *
 * A `QueryDocumentSnapshot` offers the same API surface as a
 * `DocumentSnapshot`. Since query results contain only existing documents, the
 * `exists` property will always be true and `data()` will never return
 * 'undefined'.
 */
/**
 * Helper that calls fromDotSeparatedString() but wraps any error thrown.
 */
function qa(t, e) {
    return "string" == typeof e ? La(t, e) : e instanceof ua ? e._internalPath : e._delegate._internalPath;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Metadata about a snapshot, describing the state of the snapshot.
 */ var Ua = /** @class */ function() {
    /** @hideconstructor */
    function t(t, e) {
        this.hasPendingWrites = t, this.fromCache = e
        /**
     * Returns true if this `SnapshotMetadata` is equal to the provided one.
     *
     * @param other - The `SnapshotMetadata` to compare against.
     * @returns true if this `SnapshotMetadata` is equal to the provided one.
     */;
    }
    return t.prototype.isEqual = function(t) {
        return this.hasPendingWrites === t.hasPendingWrites && this.fromCache === t.fromCache;
    }, t;
}(), Ba = /** @class */ function(t) {
    /** @hideconstructor protected */
    function e(e, n, r, i, o, s) {
        var u = this;
        return (u = t.call(this, e, n, r, i, s) || this)._firestore = e, u._firestoreImpl = e, 
        u.metadata = o, u;
    }
    /**
     * Property of the `DocumentSnapshot` that signals whether or not the data
     * exists. True if the document exists.
     */    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.exists = function() {
        return t.prototype.exists.call(this);
    }, 
    /**
     * Retrieves all fields in the document as an `Object`. Returns `undefined` if
     * the document doesn't exist.
     *
     * By default, `FieldValue.serverTimestamp()` values that have not yet been
     * set to their final value will be returned as `null`. You can override
     * this by passing an options object.
     *
     * @param options - An options object to configure how data is retrieved from
     * the snapshot (for example the desired behavior for server timestamps that
     * have not yet been set to their final value).
     * @returns An `Object` containing all fields in the document or `undefined` if
     * the document doesn't exist.
     */
    e.prototype.data = function(t) {
        if (void 0 === t && (t = {}), this._document) {
            if (this._converter) {
                // We only want to use the converter and create a new DocumentSnapshot
                // if a converter has been provided.
                var e = new ja(this._firestore, this._userDataWriter, this._key, this._document, this.metadata, 
                /* converter= */ null);
                return this._converter.fromFirestore(e, t);
            }
            return this._userDataWriter.convertValue(this._document.data.toProto(), t.serverTimestamps);
        }
    }, 
    /**
     * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
     * document or field doesn't exist.
     *
     * By default, a `FieldValue.serverTimestamp()` that has not yet been set to
     * its final value will be returned as `null`. You can override this by
     * passing an options object.
     *
     * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
     * field.
     * @param options - An options object to configure how the field is retrieved
     * from the snapshot (for example the desired behavior for server timestamps
     * that have not yet been set to their final value).
     * @returns The data at the specified field location or undefined if no such
     * field exists in the document.
     */
    // We are using `any` here to avoid an explicit cast by our users.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e.prototype.get = function(t, e) {
        if (void 0 === e && (e = {}), this._document) {
            var n = this._document.data.field(qa("DocumentSnapshot.get", t));
            if (null !== n) return this._userDataWriter.convertValue(n, e.serverTimestamps);
        }
    }, e;
}(Fa), ja = /** @class */ function(t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this;
    }
    /**
     * Retrieves all fields in the document as an `Object`.
     *
     * By default, `FieldValue.serverTimestamp()` values that have not yet been
     * set to their final value will be returned as `null`. You can override
     * this by passing an options object.
     *
     * @override
     * @param options - An options object to configure how data is retrieved from
     * the snapshot (for example the desired behavior for server timestamps that
     * have not yet been set to their final value).
     * @returns An `Object` containing all fields in the document.
     */    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.data = function(e) {
        return void 0 === e && (e = {}), t.prototype.data.call(this, e);
    }, e;
}(Ba), Ka = /** @class */ function() {
    /** @hideconstructor */
    function t(t, e, n, r) {
        this._firestore = t, this._userDataWriter = e, this._snapshot = r, this.metadata = new Ua(r.hasPendingWrites, r.fromCache), 
        this.query = n;
    }
    return Object.defineProperty(t.prototype, "docs", {
        /** An array of all the documents in the `QuerySnapshot`. */ get: function() {
            var t = [];
            return this.forEach((function(e) {
                return t.push(e);
            })), t;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "size", {
        /** The number of documents in the `QuerySnapshot`. */ get: function() {
            return this._snapshot.docs.size;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "empty", {
        /** True if there are no documents in the `QuerySnapshot`. */ get: function() {
            return 0 === this.size;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Enumerates all of the documents in the `QuerySnapshot`.
     *
     * @param callback - A callback to be called with a `QueryDocumentSnapshot` for
     * each document in the snapshot.
     * @param thisArg - The `this` binding for the callback.
     */
    t.prototype.forEach = function(t, e) {
        var n = this;
        this._snapshot.docs.forEach((function(r) {
            t.call(e, new ja(n._firestore, n._userDataWriter, r.key, r, new Ua(n._snapshot.mutatedKeys.has(r.key), n._snapshot.fromCache), n.query._converter));
        }));
    }, 
    /**
     * Returns an array of the documents changes since the last snapshot. If this
     * is the first snapshot, all documents will be in the list as 'added'
     * changes.
     *
     * @param options - `SnapshotListenOptions` that control whether metadata-only
     * changes (i.e. only `DocumentSnapshot.metadata` changed) should trigger
     * snapshot events.
     */
    t.prototype.docChanges = function(t) {
        void 0 === t && (t = {});
        var e = !!t.includeMetadataChanges;
        if (e && this._snapshot.excludesMetadataChanges) throw new T(E.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
        return this._cachedChanges && this._cachedChangesIncludeMetadataChanges === e || (this._cachedChanges = 
        /** Calculates the array of DocumentChanges for a given ViewSnapshot. */
        function(t, e) {
            if (t._snapshot.oldDocs.isEmpty()) {
                // Special case the first snapshot because index calculation is easy and
                // fast
                var n = 0;
                return t._snapshot.docChanges.map((function(e) {
                    var r = new ja(t._firestore, t._userDataWriter, e.doc.key, e.doc, new Ua(t._snapshot.mutatedKeys.has(e.doc.key), t._snapshot.fromCache), t.query._converter);
                    return e.doc, {
                        type: "added",
                        doc: r,
                        oldIndex: -1,
                        newIndex: n++
                    };
                }));
            }
            // A DocumentSet that is updated incrementally as changes are applied to use
            // to lookup the index of a document.
            var r = t._snapshot.oldDocs;
            return t._snapshot.docChanges.filter((function(t) {
                return e || 3 /* Metadata */ !== t.type;
            })).map((function(e) {
                var n = new ja(t._firestore, t._userDataWriter, e.doc.key, e.doc, new Ua(t._snapshot.mutatedKeys.has(e.doc.key), t._snapshot.fromCache), t.query._converter), i = -1, o = -1;
                return 0 /* Added */ !== e.type && (i = r.indexOf(e.doc.key), r = r.delete(e.doc.key)), 
                1 /* Removed */ !== e.type && (o = (r = r.add(e.doc)).indexOf(e.doc.key)), {
                    type: Ga(e.type),
                    doc: n,
                    oldIndex: i,
                    newIndex: o
                };
            }));
        }(this, e), this._cachedChangesIncludeMetadataChanges = e), this._cachedChanges;
    }, t;
}();

/**
 * A `DocumentSnapshot` contains data read from a document in your Firestore
 * database. The data can be extracted with `.data()` or `.get(<field>)` to
 * get a specific field.
 *
 * For a `DocumentSnapshot` that points to a non-existing document, any data
 * access will return 'undefined'. You can use the `exists()` method to
 * explicitly verify a document's existence.
 */ function Ga(t) {
    switch (t) {
      case 0 /* Added */ :
        return "added";

      case 2 /* Modified */ :
      case 3 /* Metadata */ :
        return "modified";

      case 1 /* Removed */ :
        return "removed";

      default:
        return C();
    }
}

// TODO(firestoreexp): Add tests for snapshotEqual with different snapshot
// metadata
/**
 * Returns true if the provided snapshots are equal.
 *
 * @param left - A snapshot to compare.
 * @param right - A snapshot to compare.
 * @returns true if the snapshots are equal.
 */ function za(t, e) {
    return t instanceof Ba && e instanceof Ba ? t._firestore === e._firestore && t._key.isEqual(e._key) && (null === t._document ? null === e._document : t._document.isEqual(e._document)) && t._converter === e._converter : t instanceof Ka && e instanceof Ka && t._firestore === e._firestore && Ju(t.query, e.query) && t.metadata.isEqual(e.metadata) && t._snapshot.isEqual(e._snapshot);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Qa(t) {
    if (Wt(t) && 0 === t.explicitOrderBy.length) throw new T(E.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
}

/**
 * A `QueryConstraint` is used to narrow the set of documents returned by a
 * Firestore query. `QueryConstraint`s are created by invoking {@link where},
 * {@link orderBy}, {@link startAt}, {@link startAfter}, {@link
 * endBefore}, {@link endAt}, {@link limit} or {@link limitToLast} and
 * can then be passed to {@link query} to create a new query instance that
 * also contains this `QueryConstraint`.
 */ var Wa = function() {};

/**
 * Creates a new immutable instance of `query` that is extended to also include
 * additional query constraints.
 *
 * @param query - The query instance to use as a base for the new constraints.
 * @param queryConstraints - The list of `QueryConstraint`s to apply.
 * @throws if any of the provided query constraints cannot be combined with the
 * existing or new constraints.
 */ function Ha(t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    for (var r = 0, i = e; r < i.length; r++) {
        var o = i[r];
        t = o._apply(t);
    }
    return t;
}

var Ya = /** @class */ function(t) {
    function e(e, n, r) {
        var i = this;
        return (i = t.call(this) || this).Uc = e, i.Qc = n, i.Kc = r, i.type = "where", 
        i;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype._apply = function(t) {
        var e = ma(t.firestore), n = function(t, e, n, r, i, o, s) {
            var u;
            if (i.isKeyField()) {
                if ("array-contains" /* ARRAY_CONTAINS */ === o || "array-contains-any" /* ARRAY_CONTAINS_ANY */ === o) throw new T(E.INVALID_ARGUMENT, "Invalid Query. You can't perform '" + o + "' queries on FieldPath.documentId().");
                if ("in" /* IN */ === o || "not-in" /* NOT_IN */ === o) {
                    nc(s, o);
                    for (var a = [], c = 0, h = s; c < h.length; c++) {
                        var f = h[c];
                        a.push(ec(r, t, f));
                    }
                    u = {
                        arrayValue: {
                            values: a
                        }
                    };
                } else u = ec(r, t, s);
            } else "in" /* IN */ !== o && "not-in" /* NOT_IN */ !== o && "array-contains-any" /* ARRAY_CONTAINS_ANY */ !== o || nc(s, o), 
            u = Da(n, "where", s, 
            /* allowArrays= */ "in" /* IN */ === o || "not-in" /* NOT_IN */ === o);
            var l = At.create(i, o, u);
            return function(t, e) {
                if (e.g()) {
                    var n = Yt(t);
                    if (null !== n && !n.isEqual(e.field)) throw new T(E.INVALID_ARGUMENT, "Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '" + n.toString() + "' and '" + e.field.toString() + "'");
                    var r = Ht(t);
                    null !== r && rc(t, e.field, r);
                }
                var i = function(t, e) {
                    for (var n = 0, r = t.filters; n < r.length; n++) {
                        var i = r[n];
                        if (e.indexOf(i.op) >= 0) return i.op;
                    }
                    return null;
                }(t, 
                /**
 * Given an operator, returns the set of operators that cannot be used with it.
 *
 * Operators in a query must adhere to the following set of rules:
 * 1. Only one array operator is allowed.
 * 2. Only one disjunctive operator is allowed.
 * 3. NOT_EQUAL cannot be used with another NOT_EQUAL operator.
 * 4. NOT_IN cannot be used with array, disjunctive, or NOT_EQUAL operators.
 *
 * Array operators: ARRAY_CONTAINS, ARRAY_CONTAINS_ANY
 * Disjunctive operators: IN, ARRAY_CONTAINS_ANY, NOT_IN
 */
                function(t) {
                    switch (t) {
                      case "!=" /* NOT_EQUAL */ :
                        return [ "!=" /* NOT_EQUAL */ , "not-in" /* NOT_IN */ ];

                      case "array-contains" /* ARRAY_CONTAINS */ :
                        return [ "array-contains" /* ARRAY_CONTAINS */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ , "not-in" /* NOT_IN */ ];

                      case "in" /* IN */ :
                        return [ "array-contains-any" /* ARRAY_CONTAINS_ANY */ , "in" /* IN */ , "not-in" /* NOT_IN */ ];

                      case "array-contains-any" /* ARRAY_CONTAINS_ANY */ :
                        return [ "array-contains" /* ARRAY_CONTAINS */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ , "in" /* IN */ , "not-in" /* NOT_IN */ ];

                      case "not-in" /* NOT_IN */ :
                        return [ "array-contains" /* ARRAY_CONTAINS */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ , "in" /* IN */ , "not-in" /* NOT_IN */ , "!=" /* NOT_EQUAL */ ];

                      default:
                        return [];
                    }
                }(e.op));
                if (null !== i) 
                // Special case when it's a duplicate op to give a slightly clearer error message.
                throw i === e.op ? new T(E.INVALID_ARGUMENT, "Invalid query. You cannot use more than one '" + e.op.toString() + "' filter.") : new T(E.INVALID_ARGUMENT, "Invalid query. You cannot use '" + e.op.toString() + "' filters with '" + i.toString() + "' filters.");
            }(t, l), l;
        }(t._query, 0, e, t.firestore._databaseId, this.Uc, this.Qc, this.Kc);
        return new Qu(t.firestore, t._converter, function(t, e) {
            var n = t.filters.concat([ e ]);
            return new Kt(t.path, t.collectionGroup, t.explicitOrderBy.slice(), n, t.limit, t.limitType, t.startAt, t.endAt);
        }(t._query, n));
    }, e;
}(Wa), Xa = /** @class */ function(t) {
    function e(e, n) {
        var r = this;
        return (r = t.call(this) || this).Uc = e, r.jc = n, r.type = "orderBy", r;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype._apply = function(t) {
        var e = function(t, e, n) {
            if (null !== t.startAt) throw new T(E.INVALID_ARGUMENT, "Invalid query. You must not call startAt() or startAfter() before calling orderBy().");
            if (null !== t.endAt) throw new T(E.INVALID_ARGUMENT, "Invalid query. You must not call endAt() or endBefore() before calling orderBy().");
            var r = new qt(e, n);
            return function(t, e) {
                if (null === Ht(t)) {
                    // This is the first order by. It must match any inequality.
                    var n = Yt(t);
                    null !== n && rc(t, n, e.field);
                }
            }(t, r), r;
        }(t._query, this.Uc, this.jc);
        return new Qu(t.firestore, t._converter, function(t, e) {
            // TODO(dimond): validate that orderBy does not list the same key twice.
            var n = t.explicitOrderBy.concat([ e ]);
            return new Kt(t.path, t.collectionGroup, n, t.filters.slice(), t.limit, t.limitType, t.startAt, t.endAt);
        }(t._query, e));
    }, e;
}(Wa), Ja = /** @class */ function(t) {
    function e(e, n, r) {
        var i = this;
        return (i = t.call(this) || this).type = e, i.Wc = n, i.Gc = r, i;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype._apply = function(t) {
        return new Qu(t.firestore, t._converter, Zt(t._query, this.Wc, this.Gc));
    }, e;
}(Wa), $a = /** @class */ function(t) {
    function e(e, n, r) {
        var i = this;
        return (i = t.call(this) || this).type = e, i.zc = n, i.Hc = r, i;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype._apply = function(t) {
        var e = tc(t, this.type, this.zc, this.Hc);
        return new Qu(t.firestore, t._converter, function(t, e) {
            return new Kt(t.path, t.collectionGroup, t.explicitOrderBy.slice(), t.filters.slice(), t.limit, t.limitType, e, t.endAt);
        }(t._query, e));
    }, e;
}(Wa), Za = /** @class */ function(t) {
    function e(e, n, r) {
        var i = this;
        return (i = t.call(this) || this).type = e, i.zc = n, i.Hc = r, i;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype._apply = function(t) {
        var e = tc(t, this.type, this.zc, this.Hc);
        return new Qu(t.firestore, t._converter, function(t, e) {
            return new Kt(t.path, t.collectionGroup, t.explicitOrderBy.slice(), t.filters.slice(), t.limit, t.limitType, t.startAt, e);
        }(t._query, e));
    }, e;
}(Wa);

/**
 * Creates a `QueryConstraint` that enforces that documents must contain the
 * specified field and that the value should satisfy the relation constraint
 * provided.
 *
 * @param fieldPath - The path to compare
 * @param opStr - The operation string (e.g "&lt;", "&lt;=", "==", "&lt;",
 *   "&lt;=", "!=").
 * @param value - The value for comparison
 * @returns The created `Query`.
 */
/** Helper function to create a bound from a document or fields */
function tc(t, e, n, r) {
    if (n[0] = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_0__["getModularInstance"])(n[0]), n[0] instanceof Fa) return function(t, e, n, r, i) {
        if (!r) throw new T(E.NOT_FOUND, "Can't use a DocumentSnapshot that doesn't exist for " + n + "().");
        // Because people expect to continue/end a query at the exact document
        // provided, we need to use the implicit sort order rather than the explicit
        // sort order, because it's guaranteed to contain the document key. That way
        // the position becomes unambiguous and the query continues/ends exactly at
        // the provided document. Without the key (by using the explicit sort
        // orders), multiple documents could match the position, yielding duplicate
        // results.
        for (var o = [], s = 0, u = Jt(t); s < u.length; s++) {
            var a = u[s];
            if (a.field.isKeyField()) o.push(pt(e, r.key)); else {
                var c = r.data.field(a.field);
                if (tt(c)) throw new T(E.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + a.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');
                if (null === c) {
                    var h = a.field.canonicalString();
                    throw new T(E.INVALID_ARGUMENT, "Invalid query. You are trying to start or end a query using a document for which the field '" + h + "' (used as the orderBy) does not exist.");
                }
                o.push(c);
            }
        }
        return new Ft(o, i);
    }(t._query, t.firestore._databaseId, e, n[0]._document, r);
    var i = ma(t.firestore);
    return function(t, e, n, r, i, o) {
        // Use explicit order by's because it has to match the query the user made
        var s = t.explicitOrderBy;
        if (i.length > s.length) throw new T(E.INVALID_ARGUMENT, "Too many arguments provided to " + r + "(). The number of arguments must be less than or equal to the number of orderBy() clauses");
        for (var u = [], a = 0; a < i.length; a++) {
            var c = i[a];
            if (s[a].field.isKeyField()) {
                if ("string" != typeof c) throw new T(E.INVALID_ARGUMENT, "Invalid query. Expected a string for document ID in " + r + "(), but got a " + typeof c);
                if (!Xt(t) && -1 !== c.indexOf("/")) throw new T(E.INVALID_ARGUMENT, "Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to " + r + "() must be a plain document ID, but '" + c + "' contains a slash.");
                var h = t.path.child(z.fromString(c));
                if (!st.isDocumentKey(h)) throw new T(E.INVALID_ARGUMENT, "Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to " + r + "() must result in a valid document path, but '" + h + "' is not because it contains an odd number of segments.");
                var f = new st(h);
                u.push(pt(e, f));
            } else {
                var l = Da(n, r, c);
                u.push(l);
            }
        }
        return new Ft(u, o);
    }(t._query, t.firestore._databaseId, i, e, n, r);
}

function ec(t, e, n) {
    if ("string" == typeof (n = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_0__["getModularInstance"])(n))) {
        if ("" === n) throw new T(E.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");
        if (!Xt(e) && -1 !== n.indexOf("/")) throw new T(E.INVALID_ARGUMENT, "Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '" + n + "' contains a '/' character.");
        var r = e.path.child(z.fromString(n));
        if (!st.isDocumentKey(r)) throw new T(E.INVALID_ARGUMENT, "Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '" + r + "' is not because it has an odd number of segments (" + r.length + ").");
        return pt(t, new st(r));
    }
    if (n instanceof zu) return pt(t, n._key);
    throw new T(E.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: " + Uu(n) + ".");
}

/**
 * Validates that the value passed into a disjunctive filter satisfies all
 * array requirements.
 */ function nc(t, e) {
    if (!Array.isArray(t) || 0 === t.length) throw new T(E.INVALID_ARGUMENT, "Invalid Query. A non-empty array is required for '" + e.toString() + "' filters.");
    if (t.length > 10) throw new T(E.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters support a maximum of 10 elements in the value array.");
}

function rc(t, e, n) {
    if (!n.isEqual(e)) throw new T(E.INVALID_ARGUMENT, "Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '" + e.toString() + "' and so you must also use '" + e.toString() + "' as your first argument to orderBy(), but your first orderBy() is on field '" + n.toString() + "' instead.");
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Converts Firestore's internal types to the JavaScript types that we expose
 * to the user.
 *
 * @internal
 */ var ic = /** @class */ function() {
    function t() {}
    return t.prototype.convertValue = function(t, e) {
        switch (void 0 === e && (e = "none"), ut(t)) {
          case 0 /* NullValue */ :
            return null;

          case 1 /* BooleanValue */ :
            return t.booleanValue;

          case 2 /* NumberValue */ :
            return $(t.integerValue || t.doubleValue);

          case 3 /* TimestampValue */ :
            return this.convertTimestamp(t.timestampValue);

          case 4 /* ServerTimestampValue */ :
            return this.convertServerTimestamp(t, e);

          case 5 /* StringValue */ :
            return t.stringValue;

          case 6 /* BlobValue */ :
            return this.convertBytes(Z(t.bytesValue));

          case 7 /* RefValue */ :
            return this.convertReference(t.referenceValue);

          case 8 /* GeoPointValue */ :
            return this.convertGeoPoint(t.geoPointValue);

          case 9 /* ArrayValue */ :
            return this.convertArray(t.arrayValue, e);

          case 10 /* ObjectValue */ :
            return this.convertObject(t.mapValue, e);

          default:
            throw C();
        }
    }, t.prototype.convertObject = function(t, e) {
        var n = this, r = {};
        return j(t.fields || {}, (function(t, i) {
            r[t] = n.convertValue(i, e);
        })), r;
    }, t.prototype.convertGeoPoint = function(t) {
        return new ha($(t.latitude), $(t.longitude));
    }, t.prototype.convertArray = function(t, e) {
        var n = this;
        return (t.values || []).map((function(t) {
            return n.convertValue(t, e);
        }));
    }, t.prototype.convertServerTimestamp = function(t, e) {
        switch (e) {
          case "previous":
            var n = et(t);
            return null == n ? null : this.convertValue(n, e);

          case "estimate":
            return this.convertTimestamp(nt(t));

          default:
            return null;
        }
    }, t.prototype.convertTimestamp = function(t) {
        var e = J(t);
        return new q(e.seconds, e.nanos);
    }, t.prototype.convertDocumentKey = function(t, e) {
        var n = z.fromString(t);
        R(Qn(n));
        var r = new Au(n.get(1), n.get(3)), i = new st(n.popFirst(5));
        return r.isEqual(e) || 
        // TODO(b/64130202): Somehow support foreign references.
        A("Document " + i + " contains a document reference within a different database (" + r.projectId + "/" + r.database + ") which is not supported. It will be treated as a reference in the current database (" + e.projectId + "/" + e.database + ") instead."), 
        i;
    }, t;
}();

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Converts custom model object of type T into DocumentData by applying the
 * converter if it exists.
 *
 * This function is used when converting user objects to DocumentData
 * because we want to provide the user with a more specific error message if
 * their set() or fails due to invalid data originating from a toFirestore()
 * call.
 */ function oc(t, e, n) {
    // Cast to `any` in order to satisfy the union type constraint on
    // toFirestore().
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return t ? n && (n.merge || n.mergeFields) ? t.toFirestore(e, n) : t.toFirestore(e) : e;
}

var sc = /** @class */ function(t) {
    function e(e) {
        var n = this;
        return (n = t.call(this) || this).firestore = e, n;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.convertBytes = function(t) {
        return new aa(t);
    }, e.prototype.convertReference = function(t) {
        var e = this.convertDocumentKey(t, this.firestore._databaseId);
        return new zu(this.firestore, /* converter= */ null, e);
    }, e;
}(ic), uc = /** @class */ function() {
    /** @hideconstructor */
    function t(t, e) {
        this._firestore = t, this._commitHandler = e, this._mutations = [], this._committed = !1, 
        this._dataReader = ma(t);
    }
    return t.prototype.set = function(t, e, n) {
        this._verifyNotCommitted();
        var r = ac(t, this._firestore), i = oc(r._converter, e, n), o = ga(this._dataReader, "WriteBatch.set", r._key, i, null !== r._converter, n);
        return this._mutations.push(o.toMutation(r._key, Ee.none())), this;
    }, t.prototype.update = function(t, e, n) {
        for (var r = [], i = 3; i < arguments.length; i++) r[i - 3] = arguments[i];
        this._verifyNotCommitted();
        var o, s = ac(t, this._firestore);
        // For Compat types, we have to "extract" the underlying types before
        // performing validation.
                return o = "string" == typeof (e = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_0__["getModularInstance"])(e)) || e instanceof ua ? Na(this._dataReader, "WriteBatch.update", s._key, e, n, r) : Sa(this._dataReader, "WriteBatch.update", s._key, e), 
        this._mutations.push(o.toMutation(s._key, Ee.exists(!0))), this;
    }, 
    /**
     * Deletes the document referred to by the provided {@link DocumentReference}.
     *
     * @param documentRef - A reference to the document to be deleted.
     * @returns This `WriteBatch` instance. Used for chaining method calls.
     */
    t.prototype.delete = function(t) {
        this._verifyNotCommitted();
        var e = ac(t, this._firestore);
        return this._mutations = this._mutations.concat(new Ve(e._key, Ee.none())), this;
    }, 
    /**
     * Commits all of the writes in this write batch as a single atomic unit.
     *
     * The result of these writes will only be reflected in document reads that
     * occur after the returned Promise resolves. If the client is offline, the
     * write fails. If you would like to see local modifications or buffer writes
     * until the client is online, use the full Firestore SDK.
     *
     * @returns A Promise resolved once all of the writes in the batch have been
     * successfully written to the backend as an atomic unit (note that it won't
     * resolve while you're offline).
     */
    t.prototype.commit = function() {
        return this._verifyNotCommitted(), this._committed = !0, this._mutations.length > 0 ? this._commitHandler(this._mutations) : Promise.resolve();
    }, t.prototype._verifyNotCommitted = function() {
        if (this._committed) throw new T(E.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.");
    }, t;
}();

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A write batch, used to perform multiple writes as a single atomic unit.
 *
 * A `WriteBatch` object can be acquired by calling {@link writeBatch}. It
 * provides methods for adding writes to the write batch. None of the writes
 * will be committed (or visible locally) until {@link WriteBatch#commit} is
 * called.
 */ function ac(t, e) {
    if ((t = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_0__["getModularInstance"])(t)).firestore !== e) throw new T(E.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
    return t;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// TODO(mrschmidt) Consider using `BaseTransaction` as the base class in the
// legacy SDK.
/**
 * A reference to a transaction.
 *
 * The `Transaction` object passed to a transaction's `updateFunction` provides
 * the methods to read and write data within the transaction context. See
 * {@link runTransaction}.
 */ var cc = /** @class */ function(t) {
    function e(e) {
        var n = this;
        return (n = t.call(this) || this).firestore = e, n;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.convertBytes = function(t) {
        return new aa(t);
    }, e.prototype.convertReference = function(t) {
        var e = this.convertDocumentKey(t, this.firestore._databaseId);
        return new zu(this.firestore, /* converter= */ null, e);
    }, e;
}(ic);

/**
 * Reads the document referred to by this `DocumentReference` from cache.
 * Returns an error if the document is not currently cached.
 *
 * @returns A Promise resolved with a `DocumentSnapshot` containing the
 * current document contents.
 */ function hc(t, e, n) {
    for (var r = [], i = 3; i < arguments.length; i++) r[i - 3] = arguments[i];
    t = Bu(t, zu);
    var o = Bu(t.firestore, na), s = ma(o);
    return lc(o, [ ("string" == typeof (
    // For Compat types, we have to "extract" the underlying types before
    // performing validation.
    e = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_0__["getModularInstance"])(e)) || e instanceof ua ? Na(s, "updateDoc", t._key, e, n, r) : Sa(s, "updateDoc", t._key, e)).toMutation(t._key, Ee.exists(!0)) ]);
}

/**
 * Deletes the document referred to by the specified `DocumentReference`.
 *
 * @param reference - A reference to the document to delete.
 * @returns A Promise resolved once the document has been successfully
 * deleted from the backend (note that it won't resolve while you're offline).
 */ function fc(t) {
    for (var e, n, r, i = [], o = 1; o < arguments.length; o++) i[o - 1] = arguments[o];
    t = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_0__["getModularInstance"])(t);
    var s = {
        includeMetadataChanges: !1
    }, a = 0;
    "object" != typeof i[a] || Zu(i[a]) || (s = i[a], a++);
    var c, h, f, l = {
        includeMetadataChanges: s.includeMetadataChanges
    };
    if (Zu(i[a])) {
        var d = i[a];
        i[a] = null === (e = d.next) || void 0 === e ? void 0 : e.bind(d), i[a + 1] = null === (n = d.error) || void 0 === n ? void 0 : n.bind(d), 
        i[a + 2] = null === (r = d.complete) || void 0 === r ? void 0 : r.bind(d);
    }
    if (t instanceof zu) h = Bu(t.firestore, na), f = zt(t._key.path), c = {
        next: function(e) {
            i[a] && i[a](dc(h, t, e));
        },
        error: i[a + 1],
        complete: i[a + 2]
    }; else {
        var p = Bu(t, Qu);
        h = Bu(p.firestore, na), f = p._query;
        var y = new cc(h);
        c = {
            next: function(t) {
                i[a] && i[a](new Ka(h, y, p, t));
            },
            error: i[a + 1],
            complete: i[a + 2]
        }, Qa(t._query);
    }
    return function(t, e, n, r) {
        var i = this, o = new fu(r), s = new ms(e, o, n);
        return t.asyncQueue.enqueueAndForget((function() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(i, void 0, void 0, (function() {
                var e;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(n) {
                    switch (n.label) {
                      case 0:
                        return e = ls, [ 4 /*yield*/ , Tu(t) ];

                      case 1:
                        return [ 2 /*return*/ , e.apply(void 0, [ n.sent(), s ]) ];
                    }
                }));
            }));
        })), function() {
            o.Wo(), t.asyncQueue.enqueueAndForget((function() {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(i, void 0, void 0, (function() {
                    var e;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(n) {
                        switch (n.label) {
                          case 0:
                            return e = ds, [ 4 /*yield*/ , Tu(t) ];

                          case 1:
                            return [ 2 /*return*/ , e.apply(void 0, [ n.sent(), s ]) ];
                        }
                    }));
                }));
            }));
        };
    }(ra(h), f, l, c);
}

/**
 * Locally writes `mutations` on the async queue.
 * @internal
 */ function lc(t, e) {
    return function(t, e) {
        var n = this, r = new vr;
        return t.asyncQueue.enqueueAndForget((function() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(n, void 0, void 0, (function() {
                var n;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(i) {
                    switch (i.label) {
                      case 0:
                        return n = Cs, [ 4 /*yield*/ , Eu(t) ];

                      case 1:
                        return [ 2 /*return*/ , n.apply(void 0, [ i.sent(), e, r ]) ];
                    }
                }));
            }));
        })), r.promise;
    }(ra(t), e);
}

/**
 * Converts a ViewSnapshot that contains the single document specified by `ref`
 * to a DocumentSnapshot.
 */ function dc(t, e, n) {
    var r = n.docs.get(e._key), i = new cc(t);
    return new Ba(t, i, e._key, r, new Ua(n.hasPendingWrites, n.fromCache), e._converter);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A reference to a transaction.
 *
 * The `Transaction` object passed to a transaction's `updateFunction` provides
 * the methods to read and write data within the transaction context. See
 * {@link runTransaction}.
 */ var pc = /** @class */ function(t) {
    // This class implements the same logic as the Transaction API in the Lite SDK
    // but is subclassed in order to return its own DocumentSnapshot types.
    /** @hideconstructor */
    function e(e, n) {
        var r = this;
        return (r = t.call(this, e, n) || this)._firestore = e, r;
    }
    /**
     * Reads the document referenced by the provided {@link DocumentReference}.
     *
     * @param documentRef - A reference to the document to be read.
     * @returns A `DocumentSnapshot` with the read data.
     */    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.get = function(e) {
        var n = this, r = ac(e, this._firestore), i = new cc(this._firestore);
        return t.prototype.get.call(this, e).then((function(t) {
            return new Ba(n._firestore, i, r._key, t._document, new Ua(
            /* hasPendingWrites= */ !1, 
            /* fromCache= */ !1), r._converter);
        }));
    }, e;
}(/** @class */ function() {
    /** @hideconstructor */
    function t(t, e) {
        this._firestore = t, this._transaction = e, this._dataReader = ma(t)
        /**
     * Reads the document referenced by the provided {@link DocumentReference}.
     *
     * @param documentRef - A reference to the document to be read.
     * @returns A `DocumentSnapshot` with the read data.
     */;
    }
    return t.prototype.get = function(t) {
        var e = this, n = ac(t, this._firestore), r = new sc(this._firestore);
        return this._transaction.lookup([ n._key ]).then((function(t) {
            if (!t || 1 !== t.length) return C();
            var i = t[0];
            if (i.isFoundDocument()) return new Fa(e._firestore, r, i.key, i, n._converter);
            if (i.isNoDocument()) return new Fa(e._firestore, r, n._key, null, n._converter);
            throw C();
        }));
    }, t.prototype.set = function(t, e, n) {
        var r = ac(t, this._firestore), i = oc(r._converter, e, n), o = ga(this._dataReader, "Transaction.set", r._key, i, null !== r._converter, n);
        return this._transaction.set(r._key, o), this;
    }, t.prototype.update = function(t, e, n) {
        for (var r = [], i = 3; i < arguments.length; i++) r[i - 3] = arguments[i];
        var o, s = ac(t, this._firestore);
        // For Compat types, we have to "extract" the underlying types before
        // performing validation.
                return o = "string" == typeof (e = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_0__["getModularInstance"])(e)) || e instanceof ua ? Na(this._dataReader, "Transaction.update", s._key, e, n, r) : Sa(this._dataReader, "Transaction.update", s._key, e), 
        this._transaction.update(s._key, o), this;
    }, 
    /**
     * Deletes the document referred to by the provided {@link DocumentReference}.
     *
     * @param documentRef - A reference to the document to be deleted.
     * @returns This `Transaction` instance. Used for chaining method calls.
     */
    t.prototype.delete = function(t) {
        var e = ac(t, this._firestore);
        return this._transaction.delete(e._key), this;
    }, t;
}());

/**
 * Executes the given `updateFunction` and then attempts to commit the changes
 * applied within the transaction. If any document read within the transaction
 * has changed, Cloud Firestore retries the `updateFunction`. If it fails to
 * commit after 5 attempts, the transaction fails.
 *
 * The maximum number of writes allowed in a single transaction is 500.
 *
 * @param firestore - A reference to the Firestore database to run this
 * transaction against.
 * @param updateFunction - The function to execute within the transaction
 * context.
 * @returns If the transaction completed successfully or was explicitly aborted
 * (the `updateFunction` returned a failed promise), the promise returned by the
 * `updateFunction `is returned here. Otherwise, if the transaction failed, a
 * rejected promise with the corresponding failure error is returned.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Helper function to assert Uint8Array is available at runtime. */ function yc() {
    if ("undefined" == typeof Uint8Array) throw new T(E.UNIMPLEMENTED, "Uint8Arrays are not available in this environment.");
}

/** Helper function to assert Base64 functions are available at runtime. */ function vc() {
    if ("undefined" == typeof atob) throw new T(E.UNIMPLEMENTED, "Blobs are unavailable in Firestore in this environment.");
}

/** Immutable class holding a blob (binary data) */ var mc = /** @class */ function() {
    function t(t) {
        this._delegate = t;
    }
    return t.fromBase64String = function(e) {
        return vc(), new t(aa.fromBase64String(e));
    }, t.fromUint8Array = function(e) {
        return yc(), new t(aa.fromUint8Array(e));
    }, t.prototype.toBase64 = function() {
        return vc(), this._delegate.toBase64();
    }, t.prototype.toUint8Array = function() {
        return yc(), this._delegate.toUint8Array();
    }, t.prototype.isEqual = function(t) {
        return this._delegate.isEqual(t._delegate);
    }, t.prototype.toString = function() {
        return "Blob(base64: " + this.toBase64() + ")";
    }, t;
}(), gc = /** @class */ function() {
    function t() {}
    return t.prototype.enableIndexedDbPersistence = function(t, e) {
        return function(t, e) {
            sa(t = Bu(t, na));
            var n = ra(t), r = t._freezeSettings(), i = new cu;
            return oa(n, i, new uu(i, r.cacheSizeBytes, null == e ? void 0 : e.forceOwnership));
        }(t._delegate, {
            forceOwnership: e
        });
    }, t.prototype.enableMultiTabIndexedDbPersistence = function(t) {
        return function(t) {
            sa(t = Bu(t, na));
            var e = ra(t), n = t._freezeSettings(), r = new cu;
            return oa(e, r, new au(r, n.cacheSizeBytes));
        }(t._delegate);
    }, t.prototype.clearIndexedDbPersistence = function(t) {
        return function(t) {
            var e = this;
            if (t._initialized && !t._terminated) throw new T(E.FAILED_PRECONDITION, "Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");
            var n = new vr;
            return t._queue.enqueueAndForgetEvenWhileRestricted((function() {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(e, void 0, void 0, (function() {
                    var e;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(r) {
                        switch (r.label) {
                          case 0:
                            return r.trys.push([ 0, 2, , 3 ]), [ 4 /*yield*/ , function(t) {
                                return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
                                    var e;
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(n) {
                                        switch (n.label) {
                                          case 0:
                                            return wr.yt() ? (e = t + "main", [ 4 /*yield*/ , wr.delete(e) ]) : [ 2 /*return*/ , Promise.resolve() ];

                                          case 1:
                                            return n.sent(), [ 2 /*return*/ ];
                                        }
                                    }));
                                }));
                            }(xi(t._databaseId, t._persistenceKey)) ];

                          case 1:
                            return r.sent(), n.resolve(), [ 3 /*break*/ , 3 ];

                          case 2:
                            return e = r.sent(), n.reject(e), [ 3 /*break*/ , 3 ];

                          case 3:
                            return [ 2 /*return*/ ];
                        }
                    }));
                }));
            })), n.promise
            /**
 * Waits until all currently pending writes for the active user have been
 * acknowledged by the backend.
 *
 * The returned Promise resolves immediately if there are no outstanding writes.
 * Otherwise, the Promise waits for all previously issued writes (including
 * those written in a previous app session), but it does not wait for writes
 * that were added after the function is called. If you want to wait for
 * additional writes, call `waitForPendingWrites()` again.
 *
 * Any outstanding `waitForPendingWrites()` Promises are rejected during user
 * changes.
 *
 * @returns A Promise which resolves when all currently pending writes have been
 * acknowledged by the backend.
 */;
        }(t._delegate);
    }, t;
}(), wc = /** @class */ function() {
    function t(t, e, n) {
        var r = this;
        this._delegate = e, this.Jc = n, this.INTERNAL = {
            delete: function() {
                return r.terminate();
            }
        }, t instanceof Au || (this.Yc = t);
    }
    return Object.defineProperty(t.prototype, "_databaseId", {
        get: function() {
            return this._delegate._databaseId;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.settings = function(t) {
        t.merge && 
        // Remove the property from the settings once the merge is completed
        delete (t = Object.assign(Object.assign({}, this._delegate._getSettings()), t)).merge, 
        this._delegate._setSettings(t);
    }, t.prototype.useEmulator = function(t, e) {
        !function(t, e, n) {
            var r = (t = Bu(t, Gu))._getSettings();
            "firestore.googleapis.com" !== r.host && r.host !== e && k("Host has been set in both settings() and useEmulator(), emulator host will be used"), 
            t._setSettings(Object.assign(Object.assign({}, r), {
                host: e + ":" + n,
                ssl: !1
            }));
        }(this._delegate, t, e);
    }, t.prototype.enableNetwork = function() {
        return function(t) {
            var e = this;
            return t.asyncQueue.enqueue((function() {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(e, void 0, void 0, (function() {
                    var e, n;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(r) {
                        switch (r.label) {
                          case 0:
                            return [ 4 /*yield*/ , bu(t) ];

                          case 1:
                            return e = r.sent(), [ 4 /*yield*/ , _u(t) ];

                          case 2:
                            return n = r.sent(), [ 2 /*return*/ , (e.setNetworkEnabled(!0), function(t) {
                                var e = O(t);
                                return e.$r.delete(0 /* UserDisabled */), Lo(e);
                            }(n)) ];
                        }
                    }));
                }));
            }));
        }
        /** Disables the network connection. Pending operations will not complete. */ (ra(Bu(this._delegate, na)));
    }, t.prototype.disableNetwork = function() {
        return function(t) {
            var e = this;
            return t.asyncQueue.enqueue((function() {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(e, void 0, void 0, (function() {
                    var e, n;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(r) {
                        switch (r.label) {
                          case 0:
                            return [ 4 /*yield*/ , bu(t) ];

                          case 1:
                            return e = r.sent(), [ 4 /*yield*/ , _u(t) ];

                          case 2:
                            return n = r.sent(), [ 2 /*return*/ , (e.setNetworkEnabled(!1), function(t) {
                                return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
                                    var e;
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(n) {
                                        switch (n.label) {
                                          case 0:
                                            return (e = O(t)).$r.add(0 /* UserDisabled */), [ 4 /*yield*/ , Po(e) ];

                                          case 1:
                                            return n.sent(), 
                                            // Set the OnlineState to Offline so get()s return from cache, etc.
                                            e.Br.set("Offline" /* Offline */), [ 2 /*return*/ ];
                                        }
                                    }));
                                }));
                            }(n)) ];
                        }
                    }));
                }));
            }));
        }
        /**
 * Returns a Promise that resolves when all writes that were pending at the time
 * this method was called received server acknowledgement. An acknowledgement
 * can be either acceptance or rejection.
 */ (ra(Bu(this._delegate, na)));
    }, t.prototype.enablePersistence = function(t) {
        var e = !1, n = !1;
        return t && Fu("synchronizeTabs", e = !!t.synchronizeTabs, "experimentalForceOwningTab", n = !!t.experimentalForceOwningTab), 
        e ? this.Jc.enableMultiTabIndexedDbPersistence(this) : this.Jc.enableIndexedDbPersistence(this, n);
    }, t.prototype.clearPersistence = function() {
        return this.Jc.clearIndexedDbPersistence(this);
    }, t.prototype.terminate = function() {
        return this.Yc && (this.Yc._removeServiceInstance("firestore"), this.Yc._removeServiceInstance("firestore-exp")), 
        this._delegate._delete();
    }, t.prototype.waitForPendingWrites = function() {
        return function(t) {
            var e = this, n = new vr;
            return t.asyncQueue.enqueueAndForget((function() {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(e, void 0, void 0, (function() {
                    var e;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(r) {
                        switch (r.label) {
                          case 0:
                            return e = Fs, [ 4 /*yield*/ , Eu(t) ];

                          case 1:
                            return [ 2 /*return*/ , e.apply(void 0, [ r.sent(), n ]) ];
                        }
                    }));
                }));
            })), n.promise;
        }(ra(Bu(this._delegate, na)));
    }, t.prototype.onSnapshotsInSync = function(t) {
        return function(t, e) {
            return function(t, e) {
                var n = this, r = new fu(e);
                return t.asyncQueue.enqueueAndForget((function() {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(n, void 0, void 0, (function() {
                        var e;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(n) {
                            switch (n.label) {
                              case 0:
                                return e = function(t, e) {
                                    O(t).Gr.add(e), 
                                    // Immediately fire an initial event, indicating all existing listeners
                                    // are in-sync.
                                    e.next();
                                }, [ 4 /*yield*/ , Tu(t) ];

                              case 1:
                                return [ 2 /*return*/ , e.apply(void 0, [ n.sent(), r ]) ];
                            }
                        }));
                    }));
                })), function() {
                    r.Wo(), t.asyncQueue.enqueueAndForget((function() {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(n, void 0, void 0, (function() {
                            var e;
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(n) {
                                switch (n.label) {
                                  case 0:
                                    return e = function(t, e) {
                                        O(t).Gr.delete(e);
                                    }, [ 4 /*yield*/ , Tu(t) ];

                                  case 1:
                                    return [ 2 /*return*/ , e.apply(void 0, [ n.sent(), r ]) ];
                                }
                            }));
                        }));
                    }));
                }
                /**
 * Takes an updateFunction in which a set of reads and writes can be performed
 * atomically. In the updateFunction, the client can read and write values
 * using the supplied transaction object. After the updateFunction, all
 * changes will be committed. If a retryable error occurs (ex: some other
 * client has changed any of the data referenced), then the updateFunction
 * will be called again after a backoff. If the updateFunction still fails
 * after all retries, then the transaction will be rejected.
 *
 * The transaction object passed to the updateFunction contains methods for
 * accessing documents and collections. Unlike other datastore access, data
 * accessed with the transaction will not reflect local changes that have not
 * been committed. For this reason, it is required that all reads are
 * performed before any writes. Transactions must be performed while online.
 */;
            }(ra(t = Bu(t, na)), Zu(e) ? e : {
                next: e
            });
        }(this._delegate, t);
    }, Object.defineProperty(t.prototype, "app", {
        get: function() {
            if (!this.Yc) throw new T(E.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
            return this.Yc;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.collection = function(t) {
        try {
            return new Lc(this, Hu(this._delegate, t));
        } catch (t) {
            throw Nc(t, "collection()", "Firestore.collection()");
        }
    }, t.prototype.doc = function(t) {
        try {
            return new Sc(this, Yu(this._delegate, t));
        } catch (t) {
            throw Nc(t, "doc()", "Firestore.doc()");
        }
    }, t.prototype.collectionGroup = function(t) {
        try {
            return new Cc(this, function(t, e) {
                if (t = Bu(t, Gu), Pu("collectionGroup", "collection id", e), e.indexOf("/") >= 0) throw new T(E.INVALID_ARGUMENT, "Invalid collection ID '" + e + "' passed to function collectionGroup(). Collection IDs must not contain '/'.");
                return new Qu(t, 
                /* converter= */ null, 
                /**
 * Creates a new Query for a collection group query that matches all documents
 * within the provided collection group.
 */
                function(t) {
                    return new Kt(z.emptyPath(), t);
                }(e));
            }(this._delegate, t));
        } catch (t) {
            throw Nc(t, "collectionGroup()", "Firestore.collectionGroup()");
        }
    }, t.prototype.runTransaction = function(t) {
        var e = this;
        return function(t, e) {
            return function(t, e) {
                var n = this, r = new vr;
                return t.asyncQueue.enqueueAndForget((function() {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(n, void 0, void 0, (function() {
                        var n;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(i) {
                            switch (i.label) {
                              case 0:
                                return [ 4 /*yield*/ , function(t) {
                                    return wu(t).then((function(t) {
                                        return t.datastore;
                                    }));
                                }(t) ];

                              case 1:
                                return n = i.sent(), new pu(t.asyncQueue, n, e, r).run(), [ 2 /*return*/ ];
                            }
                        }));
                    }));
                })), r.promise;
            }(ra(t), (function(n) {
                return e(new pc(t, n));
            }));
        }(this._delegate, (function(n) {
            return t(new _c(e, n));
        }));
    }, t.prototype.batch = function() {
        var t = this;
        return ra(this._delegate), new Ec(new uc(this._delegate, (function(e) {
            return lc(t._delegate, e);
        })));
    }, t.prototype.loadBundle = function(t) {
        throw new T(E.FAILED_PRECONDITION, '"loadBundle()" does not exist, have you imported "firebase/firestore/bundle"?');
    }, t.prototype.namedQuery = function(t) {
        throw new T(E.FAILED_PRECONDITION, '"namedQuery()" does not exist, have you imported "firebase/firestore/bundle"?');
    }, t;
}(), bc = /** @class */ function(t) {
    function e(e) {
        var n = this;
        return (n = t.call(this) || this).firestore = e, n;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.convertBytes = function(t) {
        return new mc(new aa(t));
    }, e.prototype.convertReference = function(t) {
        var e = this.convertDocumentKey(t, this.firestore._databaseId);
        return Sc.Xc(e, this.firestore, /* converter= */ null);
    }, e;
}(ic);

/**
 * The persistence provider included with the full Firestore SDK.
 */ function Ic(t) {
    var e;
    e = t, S.setLogLevel(e);
}

/**
 * A reference to a transaction.
 */ var _c = /** @class */ function() {
    function t(t, e) {
        this._firestore = t, this._delegate = e, this._userDataWriter = new bc(t);
    }
    return t.prototype.get = function(t) {
        var e = this, n = Pc(t);
        return this._delegate.get(n).then((function(t) {
            return new kc(e._firestore, new Ba(e._firestore._delegate, e._userDataWriter, t._key, t._document, t.metadata, n._converter));
        }));
    }, t.prototype.set = function(t, e, n) {
        var r = Pc(t);
        return n ? (Mu("Transaction.set", n), this._delegate.set(r, e, n)) : this._delegate.set(r, e), 
        this;
    }, t.prototype.update = function(t, e, n) {
        for (var r, i = [], o = 3; o < arguments.length; o++) i[o - 3] = arguments[o];
        var s = Pc(t);
        return 2 === arguments.length ? this._delegate.update(s, e) : (r = this._delegate).update.apply(r, Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__spreadArray"])([ s, e, n ], i)), 
        this;
    }, t.prototype.delete = function(t) {
        var e = Pc(t);
        return this._delegate.delete(e), this;
    }, t;
}(), Ec = /** @class */ function() {
    function t(t) {
        this._delegate = t;
    }
    return t.prototype.set = function(t, e, n) {
        var r = Pc(t);
        return n ? (Mu("WriteBatch.set", n), this._delegate.set(r, e, n)) : this._delegate.set(r, e), 
        this;
    }, t.prototype.update = function(t, e, n) {
        for (var r, i = [], o = 3; o < arguments.length; o++) i[o - 3] = arguments[o];
        var s = Pc(t);
        return 2 === arguments.length ? this._delegate.update(s, e) : (r = this._delegate).update.apply(r, Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__spreadArray"])([ s, e, n ], i)), 
        this;
    }, t.prototype.delete = function(t) {
        var e = Pc(t);
        return this._delegate.delete(e), this;
    }, t.prototype.commit = function() {
        return this._delegate.commit();
    }, t;
}(), Tc = /** @class */ function() {
    function t(t, e, n) {
        this._firestore = t, this._userDataWriter = e, this._delegate = n;
    }
    return t.prototype.fromFirestore = function(t, e) {
        var n = new ja(this._firestore._delegate, this._userDataWriter, t._key, t._document, t.metadata, 
        /* converter= */ null);
        return this._delegate.fromFirestore(new xc(this._firestore, n), null != e ? e : {});
    }, t.prototype.toFirestore = function(t, e) {
        return e ? this._delegate.toFirestore(t, e) : this._delegate.toFirestore(t);
    }, 
    // Use the same instance of `FirestoreDataConverter` for the given instances
    // of `Firestore` and `PublicFirestoreDataConverter` so that isEqual() will
    // compare equal for two objects created with the same converter instance.
    t.Zc = function(e, n) {
        var r = t.tu, i = r.get(e);
        i || (i = new WeakMap, r.set(e, i));
        var o = i.get(n);
        return o || (o = new t(e, new bc(e), n), i.set(n, o)), o;
    }, t;
}();

Tc.tu = new WeakMap;

/**
 * A reference to a particular document in a collection in the database.
 */
var Sc = /** @class */ function() {
    function t(t, e) {
        this.firestore = t, this._delegate = e, this._userDataWriter = new bc(t);
    }
    return t.eu = function(e, n, r) {
        if (e.length % 2 != 0) throw new T(E.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + e.canonicalString() + " has " + e.length);
        return new t(n, new zu(n._delegate, r, new st(e)));
    }, t.Xc = function(e, n, r) {
        return new t(n, new zu(n._delegate, r, e));
    }, Object.defineProperty(t.prototype, "id", {
        get: function() {
            return this._delegate.id;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "parent", {
        get: function() {
            return new Lc(this.firestore, this._delegate.parent);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "path", {
        get: function() {
            return this._delegate.path;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.collection = function(t) {
        try {
            return new Lc(this.firestore, Hu(this._delegate, t));
        } catch (t) {
            throw Nc(t, "collection()", "DocumentReference.collection()");
        }
    }, t.prototype.isEqual = function(t) {
        return (t = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_0__["getModularInstance"])(t)) instanceof zu && Xu(this._delegate, t);
    }, t.prototype.set = function(t, e) {
        e = Mu("DocumentReference.set", e);
        try {
            return function(t, e, n) {
                t = Bu(t, zu);
                var r = Bu(t.firestore, na), i = oc(t._converter, e, n);
                return lc(r, [ ga(ma(r), "setDoc", t._key, i, null !== t._converter, n).toMutation(t._key, Ee.none()) ]);
            }(this._delegate, t, e);
        } catch (t) {
            throw Nc(t, "setDoc()", "DocumentReference.set()");
        }
    }, t.prototype.update = function(t, e) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        try {
            return 1 === arguments.length ? hc(this._delegate, t) : hc.apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__spreadArray"])([ this._delegate, t, e ], n));
        } catch (t) {
            throw Nc(t, "updateDoc()", "DocumentReference.update()");
        }
    }, t.prototype.delete = function() {
        return lc(Bu((t = this._delegate).firestore, na), [ new Ve(t._key, Ee.none()) ]);
        var t;
        /**
 * Add a new document to specified `CollectionReference` with the given data,
 * assigning it a document ID automatically.
 *
 * @param reference - A reference to the collection to add this document to.
 * @param data - An Object containing the data for the new document.
 * @returns A Promise resolved with a `DocumentReference` pointing to the
 * newly created document after it has been written to the backend (Note that it
 * won't resolve while you're offline).
 */    }, t.prototype.onSnapshot = function() {
        for (var t = this, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        var r = Dc(e), i = Ac(e, (function(e) {
            return new kc(t.firestore, new Ba(t.firestore._delegate, t._userDataWriter, e._key, e._document, e.metadata, t._delegate._converter));
        }));
        return fc(this._delegate, r, i);
    }, t.prototype.get = function(t) {
        var e = this;
        return ("cache" === (null == t ? void 0 : t.source) ? function(t) {
            t = Bu(t, zu);
            var e = Bu(t.firestore, na), n = ra(e), r = new cc(e);
            return function(t, e) {
                var n = this, r = new vr;
                return t.asyncQueue.enqueueAndForget((function() {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(n, void 0, void 0, (function() {
                        var n;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(i) {
                            switch (i.label) {
                              case 0:
                                return n = function(t, e, n) {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
                                        var r, i;
                                        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(o) {
                                            switch (o.label) {
                                              case 0:
                                                return o.trys.push([ 0, 2, , 3 ]), [ 4 /*yield*/ , function(t, e) {
                                                    var n = O(t);
                                                    return n.persistence.runTransaction("read document", "readonly", (function(t) {
                                                        return n.Mn.mn(t, e);
                                                    }));
                                                }(t, e) ];

                                              case 1:
                                                return (i = o.sent()).isFoundDocument() ? n.resolve(i) : i.isNoDocument() ? n.resolve(null) : n.reject(new T(E.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)")), 
                                                [ 3 /*break*/ , 3 ];

                                              case 2:
                                                return r = o.sent(), i = ss(r, "Failed to get document '" + e + " from cache"), 
                                                n.reject(i), [ 3 /*break*/ , 3 ];

                                              case 3:
                                                return [ 2 /*return*/ ];
                                            }
                                        }));
                                    }));
                                }, [ 4 /*yield*/ , Iu(t) ];

                              case 1:
                                return [ 2 /*return*/ , n.apply(void 0, [ i.sent(), e, r ]) ];
                            }
                        }));
                    }));
                })), r.promise;
            }(n, t._key).then((function(n) {
                return new Ba(e, r, t._key, n, new Ua(null !== n && n.hasLocalMutations, 
                /* fromCache= */ !0), t._converter);
            }));
        }(this._delegate) : "server" === (null == t ? void 0 : t.source) ? function(t) {
            t = Bu(t, zu);
            var e = Bu(t.firestore, na);
            return Su(ra(e), t._key, {
                source: "server"
            }).then((function(n) {
                return dc(e, t, n);
            }));
        }(this._delegate) : function(t) {
            t = Bu(t, zu);
            var e = Bu(t.firestore, na);
            return Su(ra(e), t._key).then((function(n) {
                return dc(e, t, n);
            }));
        }(this._delegate)).then((function(t) {
            return new kc(e.firestore, new Ba(e.firestore._delegate, e._userDataWriter, t._key, t._document, t.metadata, e._delegate._converter));
        }));
    }, t.prototype.withConverter = function(e) {
        return new t(this.firestore, e ? this._delegate.withConverter(Tc.Zc(this.firestore, e)) : this._delegate.withConverter(null));
    }, t;
}();

/**
 * Replaces the function name in an error thrown by the firestore-exp API
 * with the function names used in the classic API.
 */ function Nc(t, e, n) {
    return t.message = t.message.replace(e, n), t
    /**
 * Iterates the list of arguments from an `onSnapshot` call and returns the
 * first argument that may be an `SnapshotListenOptions` object. Returns an
 * empty object if none is found.
 */;
}

function Dc(t) {
    for (var e = 0, n = t; e < n.length; e++) {
        var r = n[e];
        if ("object" == typeof r && !Zu(r)) return r;
    }
    return {};
}

/**
 * Creates an observer that can be passed to the firestore-exp SDK. The
 * observer converts all observed values into the format expected by the classic
 * SDK.
 *
 * @param args - The list of arguments from an `onSnapshot` call.
 * @param wrapper - The function that converts the firestore-exp type into the
 * type used by this shim.
 */ function Ac(t, e) {
    var n, r, i;
    return {
        next: function(t) {
            i.next && i.next(e(t));
        },
        error: null === (n = (i = Zu(t[0]) ? t[0] : Zu(t[1]) ? t[1] : "function" == typeof t[0] ? {
            next: t[0],
            error: t[1],
            complete: t[2]
        } : {
            next: t[1],
            error: t[2],
            complete: t[3]
        }).error) || void 0 === n ? void 0 : n.bind(i),
        complete: null === (r = i.complete) || void 0 === r ? void 0 : r.bind(i)
    };
}

var kc = /** @class */ function() {
    function t(t, e) {
        this._firestore = t, this._delegate = e;
    }
    return Object.defineProperty(t.prototype, "ref", {
        get: function() {
            return new Sc(this._firestore, this._delegate.ref);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "id", {
        get: function() {
            return this._delegate.id;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "metadata", {
        get: function() {
            return this._delegate.metadata;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "exists", {
        get: function() {
            return this._delegate.exists();
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.data = function(t) {
        return this._delegate.data(t);
    }, t.prototype.get = function(t, e) {
        return this._delegate.get(t, e);
    }, t.prototype.isEqual = function(t) {
        return za(this._delegate, t._delegate);
    }, t;
}(), xc = /** @class */ function(t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.data = function(t) {
        return this._delegate.data(t);
    }, e;
}(kc), Cc = /** @class */ function() {
    function t(t, e) {
        this.firestore = t, this._delegate = e, this._userDataWriter = new bc(t);
    }
    return t.prototype.where = function(e, n, r) {
        try {
            // The "as string" cast is a little bit of a hack. `where` accepts the
            // FieldPath Compat type as input, but is not typed as such in order to
            // not expose this via our public typings file.
            return new t(this.firestore, Ha(this._delegate, function(t, e, n) {
                var r = e, i = qa("where", t);
                return new Ya(i, r, n);
            }(e, n, r)));
        } catch (e) {
            throw Nc(e, /(orderBy|where)\(\)/, "Query.$1()");
        }
    }, t.prototype.orderBy = function(e, n) {
        try {
            // The "as string" cast is a little bit of a hack. `orderBy` accepts the
            // FieldPath Compat type as input, but is not typed as such in order to
            // not expose this via our public typings file.
            return new t(this.firestore, Ha(this._delegate, function(t, e) {
                void 0 === e && (e = "asc");
                var n = e, r = qa("orderBy", t);
                return new Xa(r, n);
            }(e, n)));
        } catch (e) {
            throw Nc(e, /(orderBy|where)\(\)/, "Query.$1()");
        }
    }, t.prototype.limit = function(e) {
        try {
            return new t(this.firestore, Ha(this._delegate, function(t) {
                return ju("limit", t), new Ja("limit", t, "F" /* First */);
            }(e)));
        } catch (e) {
            throw Nc(e, "limit()", "Query.limit()");
        }
    }, t.prototype.limitToLast = function(e) {
        try {
            return new t(this.firestore, Ha(this._delegate, function(t) {
                return ju("limitToLast", t), new Ja("limitToLast", t, "L" /* Last */);
            }(e)));
        } catch (e) {
            throw Nc(e, "limitToLast()", "Query.limitToLast()");
        }
    }, t.prototype.startAt = function() {
        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        try {
            return new t(this.firestore, Ha(this._delegate, function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return new $a("startAt", t, /*before=*/ !0);
            }.apply(void 0, e)));
        } catch (e) {
            throw Nc(e, "startAt()", "Query.startAt()");
        }
    }, t.prototype.startAfter = function() {
        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        try {
            return new t(this.firestore, Ha(this._delegate, function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return new $a("startAfter", t, 
                /*before=*/ !1);
            }.apply(void 0, e)));
        } catch (e) {
            throw Nc(e, "startAfter()", "Query.startAfter()");
        }
    }, t.prototype.endBefore = function() {
        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        try {
            return new t(this.firestore, Ha(this._delegate, function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return new Za("endBefore", t, /*before=*/ !0);
            }.apply(void 0, e)));
        } catch (e) {
            throw Nc(e, "endBefore()", "Query.endBefore()");
        }
    }, t.prototype.endAt = function() {
        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        try {
            return new t(this.firestore, Ha(this._delegate, function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return new Za("endAt", t, /*before=*/ !1);
            }.apply(void 0, e)));
        } catch (e) {
            throw Nc(e, "endAt()", "Query.endAt()");
        }
    }, t.prototype.isEqual = function(t) {
        return Ju(this._delegate, t._delegate);
    }, t.prototype.get = function(t) {
        var e = this;
        return ("cache" === (null == t ? void 0 : t.source) ? 
        /**
     * Executes the query and returns the results as a `QuerySnapshot` from cache.
     * Returns an error if the document is not currently cached.
     *
     * @returns A Promise that will be resolved with the results of the query.
     */
        function(t) {
            t = Bu(t, Qu);
            var e = Bu(t.firestore, na), n = ra(e), r = new cc(e);
            return function(t, e) {
                var n = this, r = new vr;
                return t.asyncQueue.enqueueAndForget((function() {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(n, void 0, void 0, (function() {
                        var n;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(i) {
                            switch (i.label) {
                              case 0:
                                return n = function(t, e, n) {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
                                        var r, i, o, s, u;
                                        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(a) {
                                            switch (a.label) {
                                              case 0:
                                                return a.trys.push([ 0, 2, , 3 ]), [ 4 /*yield*/ , zi(t, e, 
                                                /* usePreviousResults= */ !0) ];

                                              case 1:
                                                return u = a.sent(), r = new Ts(e, u.Bn), i = r._o(u.documents), o = r.applyChanges(i, 
                                                /* updateLimboDocuments= */ !1), n.resolve(o.snapshot), [ 3 /*break*/ , 3 ];

                                              case 2:
                                                return s = a.sent(), u = ss(s, "Failed to execute query '" + e + " against cache"), 
                                                n.reject(u), [ 3 /*break*/ , 3 ];

                                              case 3:
                                                return [ 2 /*return*/ ];
                                            }
                                        }));
                                    }));
                                }, [ 4 /*yield*/ , Iu(t) ];

                              case 1:
                                return [ 2 /*return*/ , n.apply(void 0, [ i.sent(), e, r ]) ];
                            }
                        }));
                    }));
                })), r.promise;
            }(n, t._query).then((function(n) {
                return new Ka(e, r, t, n);
            }));
        }(this._delegate) : "server" === (null == t ? void 0 : t.source) ? function(t) {
            t = Bu(t, Qu);
            var e = Bu(t.firestore, na), n = ra(e), r = new cc(e);
            return Nu(n, t._query, {
                source: "server"
            }).then((function(n) {
                return new Ka(e, r, t, n);
            }));
        }(this._delegate) : function(t) {
            t = Bu(t, Qu);
            var e = Bu(t.firestore, na), n = ra(e), r = new cc(e);
            return Qa(t._query), Nu(n, t._query).then((function(n) {
                return new Ka(e, r, t, n);
            }));
        }(this._delegate)).then((function(t) {
            return new Oc(e.firestore, new Ka(e.firestore._delegate, e._userDataWriter, e._delegate, t._snapshot));
        }));
    }, t.prototype.onSnapshot = function() {
        for (var t = this, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        var r = Dc(e), i = Ac(e, (function(e) {
            return new Oc(t.firestore, new Ka(t.firestore._delegate, t._userDataWriter, t._delegate, e._snapshot));
        }));
        return fc(this._delegate, r, i);
    }, t.prototype.withConverter = function(e) {
        return new t(this.firestore, e ? this._delegate.withConverter(Tc.Zc(this.firestore, e)) : this._delegate.withConverter(null));
    }, t;
}(), Rc = /** @class */ function() {
    function t(t, e) {
        this._firestore = t, this._delegate = e;
    }
    return Object.defineProperty(t.prototype, "type", {
        get: function() {
            return this._delegate.type;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "doc", {
        get: function() {
            return new xc(this._firestore, this._delegate.doc);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "oldIndex", {
        get: function() {
            return this._delegate.oldIndex;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "newIndex", {
        get: function() {
            return this._delegate.newIndex;
        },
        enumerable: !1,
        configurable: !0
    }), t;
}(), Oc = /** @class */ function() {
    function t(t, e) {
        this._firestore = t, this._delegate = e;
    }
    return Object.defineProperty(t.prototype, "query", {
        get: function() {
            return new Cc(this._firestore, this._delegate.query);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "metadata", {
        get: function() {
            return this._delegate.metadata;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "size", {
        get: function() {
            return this._delegate.size;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "empty", {
        get: function() {
            return this._delegate.empty;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "docs", {
        get: function() {
            var t = this;
            return this._delegate.docs.map((function(e) {
                return new xc(t._firestore, e);
            }));
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.docChanges = function(t) {
        var e = this;
        return this._delegate.docChanges(t).map((function(t) {
            return new Rc(e._firestore, t);
        }));
    }, t.prototype.forEach = function(t, e) {
        var n = this;
        this._delegate.forEach((function(r) {
            t.call(e, new xc(n._firestore, r));
        }));
    }, t.prototype.isEqual = function(t) {
        return za(this._delegate, t._delegate);
    }, t;
}(), Lc = /** @class */ function(t) {
    function e(e, n) {
        var r = this;
        return (r = t.call(this, e, n) || this).firestore = e, r._delegate = n, r;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), Object.defineProperty(e.prototype, "id", {
        get: function() {
            return this._delegate.id;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "path", {
        get: function() {
            return this._delegate.path;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "parent", {
        get: function() {
            var t = this._delegate.parent;
            return t ? new Sc(this.firestore, t) : null;
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.doc = function(t) {
        try {
            return new Sc(this.firestore, void 0 === t ? Yu(this._delegate) : Yu(this._delegate, t));
        } catch (t) {
            throw Nc(t, "doc()", "CollectionReference.doc()");
        }
    }, e.prototype.add = function(t) {
        var e = this;
        return function(t, e) {
            var n = Bu(t.firestore, na), r = Yu(t), i = oc(t._converter, e);
            return lc(n, [ ga(ma(t.firestore), "addDoc", r._key, i, null !== t._converter, {}).toMutation(r._key, Ee.exists(!1)) ]).then((function() {
                return r;
            }));
        }(this._delegate, t).then((function(t) {
            return new Sc(e.firestore, t);
        }));
    }, e.prototype.isEqual = function(t) {
        return Xu(this._delegate, t._delegate);
    }, e.prototype.withConverter = function(t) {
        return new e(this.firestore, t ? this._delegate.withConverter(Tc.Zc(this.firestore, t)) : this._delegate.withConverter(null));
    }, e;
}(Cc);

function Pc(t) {
    return Bu(t, zu);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// The objects that are a part of this API are exposed to third-parties as
// compiled javascript so we want to flag our private members with a leading
// underscore to discourage their use.
/**
 * A `FieldPath` refers to a field in a document. The path may consist of a
 * single field name (referring to a top-level field in the document), or a list
 * of field names (referring to a nested field in the document).
 */ var Mc = /** @class */ function() {
    /**
     * Creates a FieldPath from the provided field names. If more than one field
     * name is provided, the path will point to a nested field in a document.
     *
     * @param fieldNames - A list of field names.
     */
    function t() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        this._delegate = new (ua.bind.apply(ua, Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__spreadArray"])([ void 0 ], t)));
    }
    return t.documentId = function() {
        /**
         * Internal Note: The backend doesn't technically support querying by
         * document ID. Instead it queries by the entire document name (full path
         * included), but in the cases we currently support documentId(), the net
         * effect is the same.
         */
        return new t(W.keyField().canonicalString());
    }, t.prototype.isEqual = function(t) {
        return (t = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_0__["getModularInstance"])(t)) instanceof ua && this._delegate._internalPath.isEqual(t._internalPath);
    }, t;
}(), Fc = /** @class */ function() {
    function t(t) {
        this._delegate = t;
    }
    return t.serverTimestamp = function() {
        var e = new Ia("serverTimestamp");
        return e._methodName = "FieldValue.serverTimestamp", new t(e);
    }, t.delete = function() {
        var e = new wa("deleteField");
        return e._methodName = "FieldValue.delete", new t(e);
    }, t.arrayUnion = function() {
        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        var r = 
        /**
 * Returns a special value that can be used with {@link setDoc} or {@link
 * updateDoc} that tells the server to union the given elements with any array
 * value that already exists on the server. Each specified element that doesn't
 * already exist in the array will be added to the end. If the field being
 * modified is not already an array it will be overwritten with an array
 * containing exactly the specified elements.
 *
 * @param elements - The elements to union into the array.
 * @returns The `FieldValue` sentinel for use in a call to `setDoc()` or
 * `updateDoc()`.
 */
        function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            // NOTE: We don't actually parse the data until it's used in set() or
            // update() since we'd need the Firestore instance to do this.
                        return new _a("arrayUnion", t);
        }.apply(void 0, e);
        return r._methodName = "FieldValue.arrayUnion", new t(r);
    }, t.arrayRemove = function() {
        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        var r = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            // NOTE: We don't actually parse the data until it's used in set() or
            // update() since we'd need the Firestore instance to do this.
                        return new Ea("arrayRemove", t);
        }.apply(void 0, e);
        return r._methodName = "FieldValue.arrayRemove", new t(r);
    }, t.increment = function(e) {
        var n = function(t) {
            return new Ta("increment", t);
        }(e);
        return n._methodName = "FieldValue.increment", new t(n);
    }, t.prototype.isEqual = function(t) {
        return this._delegate.isEqual(t._delegate);
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Vc(t) {
    /**
 * Loads a Firestore bundle into the local cache.
 *
 * @param firestore - The `Firestore` instance to load bundles for for.
 * @param bundleData - An object representing the bundle to be loaded. Valid objects are
 *   `ArrayBuffer`, `ReadableStream<Uint8Array>` or `string`.
 *
 * @return
 *   A `LoadBundleTask` object, which notifies callers with progress updates, and completion
 *   or error events. It can be used as a `Promise<LoadBundleTaskProgress>`.
 */
    return function(t, e) {
        var n = ra(t = Bu(t, na)), r = new ta;
        return function(t, e, n, r) {
            var i = this, o = function(t, e) {
                return function(t, e) {
                    return new lu(t, e);
                }(function(t, e) {
                    if (t instanceof Uint8Array) return hu(t, e);
                    if (t instanceof ArrayBuffer) return hu(new Uint8Array(t), e);
                    if (t instanceof ReadableStream) return t.getReader();
                    throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream");
                }("string" == typeof t ? (new TextEncoder).encode(t) : t), e);
            }(n, No(e));
            t.asyncQueue.enqueueAndForget((function() {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(i, void 0, void 0, (function() {
                    var e;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(n) {
                        switch (n.label) {
                          case 0:
                            return e = ou, [ 4 /*yield*/ , Eu(t) ];

                          case 1:
                            return e.apply(void 0, [ n.sent(), o, r ]), [ 2 /*return*/ ];
                        }
                    }));
                }));
            }));
        }(n, t._databaseId, e, r), r;
    }(this._delegate, t);
}

function qc(t) {
    var e, n, r = this;
    return (e = this._delegate, n = t, function(t, e) {
        var n = this;
        return t.asyncQueue.enqueue((function() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(n, void 0, void 0, (function() {
                var n;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(r) {
                    switch (r.label) {
                      case 0:
                        return n = function(t, e) {
                            var n = O(t);
                            return n.persistence.runTransaction("Get named query", "readonly", (function(t) {
                                return n.Qe.getNamedQuery(t, e);
                            }));
                        }, [ 4 /*yield*/ , Iu(t) ];

                      case 1:
                        return [ 2 /*return*/ , n.apply(void 0, [ r.sent(), e ]) ];
                    }
                }));
            }));
        }));
    }(ra(e = Bu(e, na)), n).then((function(t) {
        return t ? new Qu(e, null, t.query) : null;
    }))).then((function(t) {
        return t ? new Cc(r, t) : null;
    }));
}


//# sourceMappingURL=prebuilt-9a1b1ae6-c205ad6b.js.map


/***/ }),

/***/ "5x/H":
/*!***********************************************************!*\
  !*** ./node_modules/firebase/firestore/dist/index.esm.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/firestore */ "xo5E");

//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "I/3d":
/*!************************************************************************************!*\
  !*** ./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js ***!
  \************************************************************************************/
/*! exports provided: AngularFirestore, AngularFirestoreCollection, AngularFirestoreCollectionGroup, AngularFirestoreDocument, AngularFirestoreModule, ENABLE_PERSISTENCE, PERSISTENCE_SETTINGS, SETTINGS, USE_EMULATOR, associateQuery, combineChange, combineChanges, docChanges, fromCollectionRef, fromDocRef, fromRef, sortedChanges, validateEventsArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFirestore", function() { return AngularFirestore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFirestoreCollection", function() { return AngularFirestoreCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFirestoreCollectionGroup", function() { return AngularFirestoreCollectionGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFirestoreDocument", function() { return AngularFirestoreDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFirestoreModule", function() { return AngularFirestoreModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENABLE_PERSISTENCE", function() { return ENABLE_PERSISTENCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PERSISTENCE_SETTINGS", function() { return PERSISTENCE_SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SETTINGS", function() { return SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USE_EMULATOR", function() { return USE_EMULATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "associateQuery", function() { return associateQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineChange", function() { return combineChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineChanges", function() { return combineChanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "docChanges", function() { return docChanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromCollectionRef", function() { return fromCollectionRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromDocRef", function() { return fromDocRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRef", function() { return fromRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortedChanges", function() { return sortedChanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateEventsArray", function() { return validateEventsArray; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/firestore */ "5x/H");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");









/**
 * @fileoverview added by tsickle
 * Generated from: observable/fromRef.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T, R
 * @param {?} ref
 * @param {?=} scheduler
 * @return {?}
 */

function _fromRef(ref, scheduler = rxjs__WEBPACK_IMPORTED_MODULE_1__["asyncScheduler"]) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((/**
     * @param {?} subscriber
     * @return {?}
     */
    subscriber => {
        /** @type {?} */
        let unsubscribe;
        if (scheduler != null) {
            scheduler.schedule((/**
             * @return {?}
             */
            () => {
                unsubscribe = ref.onSnapshot({ includeMetadataChanges: true }, subscriber);
            }));
        }
        else {
            unsubscribe = ref.onSnapshot({ includeMetadataChanges: true }, subscriber);
        }
        return (/**
         * @return {?}
         */
        () => {
            if (unsubscribe != null) {
                unsubscribe();
            }
        });
    }));
}
/**
 * @template R, T
 * @param {?} ref
 * @param {?=} scheduler
 * @return {?}
 */
function fromRef(ref, scheduler) {
    return _fromRef(ref, scheduler);
}
/**
 * @template T
 * @param {?} ref
 * @param {?=} scheduler
 * @return {?}
 */
function fromDocRef(ref, scheduler) {
    return fromRef(ref, scheduler)
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(undefined), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
     * @param {?} __0
     * @return {?}
     */
    ([priorPayload, payload]) => {
        if (!payload.exists) {
            return { payload, type: 'removed' };
        }
        if (!(priorPayload === null || priorPayload === void 0 ? void 0 : priorPayload.exists)) {
            return { payload, type: 'added' };
        }
        return { payload, type: 'modified' };
    })));
}
/**
 * @template T
 * @param {?} ref
 * @param {?=} scheduler
 * @return {?}
 */
function fromCollectionRef(ref, scheduler) {
    return fromRef(ref, scheduler).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
     * @param {?} payload
     * @return {?}
     */
    payload => ({ payload, type: 'query' }))));
}

/**
 * @fileoverview added by tsickle
 * Generated from: collection/changes.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Return a stream of document changes on a query. These results are not in sort order but in
 * order of occurence.
 * @template T
 * @param {?} query
 * @param {?=} scheduler
 * @return {?}
 */
function docChanges(query, scheduler) {
    return fromCollectionRef(query, scheduler)
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(undefined), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
     * @param {?} __0
     * @return {?}
     */
    ([priorAction, action]) => {
        /** @type {?} */
        const docChanges = action.payload.docChanges();
        /** @type {?} */
        const actions = docChanges.map((/**
         * @param {?} change
         * @return {?}
         */
        change => ({ type: change.type, payload: change })));
        // the metadata has changed from the prior emission
        if (priorAction && JSON.stringify(priorAction.payload.metadata) !== JSON.stringify(action.payload.metadata)) {
            // go through all the docs in payload and figure out which ones changed
            action.payload.docs.forEach((/**
             * @param {?} currentDoc
             * @param {?} currentIndex
             * @return {?}
             */
            (currentDoc, currentIndex) => {
                /** @type {?} */
                const docChange = docChanges.find((/**
                 * @param {?} d
                 * @return {?}
                 */
                d => d.doc.ref.isEqual(currentDoc.ref)));
                /** @type {?} */
                const priorDoc = priorAction === null || priorAction === void 0 ? void 0 : priorAction.payload.docs.find((/**
                 * @param {?} d
                 * @return {?}
                 */
                d => d.ref.isEqual(currentDoc.ref)));
                if (docChange && JSON.stringify(docChange.doc.metadata) === JSON.stringify(currentDoc.metadata) ||
                    !docChange && priorDoc && JSON.stringify(priorDoc.metadata) === JSON.stringify(currentDoc.metadata)) {
                    // document doesn't appear to have changed, don't log another action
                }
                else {
                    // since the actions are processed in order just push onto the array
                    actions.push({
                        type: 'modified',
                        payload: {
                            oldIndex: currentIndex,
                            newIndex: currentIndex,
                            type: 'modified',
                            doc: currentDoc
                        }
                    });
                }
            }));
        }
        return (/** @type {?} */ (actions));
    })));
}
/**
 * Return a stream of document changes on a query. These results are in sort order.
 * @template T
 * @param {?} query
 * @param {?} events
 * @param {?=} scheduler
 * @return {?}
 */
function sortedChanges(query, events, scheduler) {
    return docChanges(query, scheduler)
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])((/**
     * @param {?} current
     * @param {?} changes
     * @return {?}
     */
    (current, changes) => combineChanges(current, changes.map((/**
     * @param {?} it
     * @return {?}
     */
    it => it.payload)), events)), []), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), // cut down on unneed change cycles
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
     * @param {?} changes
     * @return {?}
     */
    changes => changes.map((/**
     * @param {?} c
     * @return {?}
     */
    c => ((/** @type {?} */ ({ type: c.type, payload: c }))))))));
}
/**
 * Combines the total result set from the current set of changes from an incoming set
 * of changes.
 * @template T
 * @param {?} current
 * @param {?} changes
 * @param {?} events
 * @return {?}
 */
function combineChanges(current, changes, events) {
    changes.forEach((/**
     * @param {?} change
     * @return {?}
     */
    change => {
        // skip unwanted change types
        if (events.indexOf(change.type) > -1) {
            current = combineChange(current, change);
        }
    }));
    return current;
}
/**
 * Splice arguments on top of a sliced array, to break top-level ===
 * this is useful for change-detection
 * @template T
 * @param {?} original
 * @param {?} start
 * @param {?} deleteCount
 * @param {...?} args
 * @return {?}
 */
function sliceAndSplice(original, start, deleteCount, ...args) {
    /** @type {?} */
    const returnArray = original.slice();
    returnArray.splice(start, deleteCount, ...args);
    return returnArray;
}
/**
 * Creates a new sorted array from a new change.
 * Build our own because we allow filtering of action types ('added', 'removed', 'modified') before scanning
 * and so we have greater control over change detection (by breaking ===)
 * @template T
 * @param {?} combined
 * @param {?} change
 * @return {?}
 */
function combineChange(combined, change) {
    switch (change.type) {
        case 'added':
            if (combined[change.newIndex] && combined[change.newIndex].doc.ref.isEqual(change.doc.ref)) {
                // Not sure why the duplicates are getting fired
            }
            else {
                return sliceAndSplice(combined, change.newIndex, 0, change);
            }
            break;
        case 'modified':
            if (combined[change.oldIndex] == null || combined[change.oldIndex].doc.ref.isEqual(change.doc.ref)) {
                // When an item changes position we first remove it
                // and then add it's new position
                if (change.oldIndex !== change.newIndex) {
                    /** @type {?} */
                    const copiedArray = combined.slice();
                    copiedArray.splice(change.oldIndex, 1);
                    copiedArray.splice(change.newIndex, 0, change);
                    return copiedArray;
                }
                else {
                    return sliceAndSplice(combined, change.newIndex, 1, change);
                }
            }
            break;
        case 'removed':
            if (combined[change.oldIndex] && combined[change.oldIndex].doc.ref.isEqual(change.doc.ref)) {
                return sliceAndSplice(combined, change.oldIndex, 1);
            }
            break;
    }
    return combined;
}

/**
 * @fileoverview added by tsickle
 * Generated from: collection/collection.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?=} events
 * @return {?}
 */
function validateEventsArray(events) {
    if (!events || events.length === 0) {
        events = ['added', 'removed', 'modified'];
    }
    return events;
}
/**
 * AngularFirestoreCollection service
 *
 * This class creates a reference to a Firestore Collection. A reference and a query are provided in
 * in the constructor. The query can be the unqueried reference if no query is desired.The class
 * is generic which gives you type safety for data update methods and data streaming.
 *
 * This class uses Symbol.observable to transform into Observable using Observable.from().
 *
 * This class is rarely used directly and should be created from the AngularFirestore service.
 *
 * Example:
 *
 * const collectionRef = firebase.firestore.collection('stocks');
 * const query = collectionRef.where('price', '>', '0.01');
 * const fakeStock = new AngularFirestoreCollection<Stock>(collectionRef, query);
 *
 * // NOTE!: the updates are performed on the reference not the query
 * await fakeStock.add({ name: 'FAKE', price: 0.01 });
 *
 * // Subscribe to changes as snapshots. This provides you data updates as well as delta updates.
 * fakeStock.valueChanges().subscribe(value => console.log(value));
 * @template T
 */
class AngularFirestoreCollection {
    /**
     * The constructor takes in a CollectionReference and Query to provide wrapper methods
     * for data operations and data streaming.
     *
     * Note: Data operation methods are done on the reference not the query. This means
     * when you update data it is not updating data to the window of your query unless
     * the data fits the criteria of the query. See the AssociatedRefence type for details
     * on this implication.
     * @param {?} ref
     * @param {?} query
     * @param {?} afs
     */
    constructor(ref, query, afs) {
        this.ref = ref;
        this.query = query;
        this.afs = afs;
    }
    /**
     * Listen to the latest change in the stream. This method returns changes
     * as they occur and they are not sorted by query order. This allows you to construct
     * your own data structure.
     * @param {?=} events
     * @return {?}
     */
    stateChanges(events) {
        /** @type {?} */
        let source = docChanges(this.query, this.afs.schedulers.outsideAngular);
        if (events && events.length > 0) {
            source = source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
             * @param {?} actions
             * @return {?}
             */
            actions => actions.filter((/**
             * @param {?} change
             * @return {?}
             */
            change => events.indexOf(change.type) > -1)))));
        }
        return source.pipe(
        // We want to filter out empty arrays, but always emit at first, so the developer knows
        // that the collection has been resolve; even if it's empty
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(undefined), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((/**
         * @param {?} __0
         * @return {?}
         */
        ([prior, current]) => current.length > 0 || !prior)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
         * @param {?} __0
         * @return {?}
         */
        ([prior, current]) => current)), this.afs.keepUnstableUntilFirst);
    }
    /**
     * Create a stream of changes as they occur it time. This method is similar to stateChanges()
     * but it collects each event in an array over time.
     * @param {?=} events
     * @return {?}
     */
    auditTrail(events) {
        return this.stateChanges(events).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])((/**
         * @param {?} current
         * @param {?} action
         * @return {?}
         */
        (current, action) => [...current, ...action]), []));
    }
    /**
     * Create a stream of synchronized changes. This method keeps the local array in sorted
     * query order.
     * @param {?=} events
     * @return {?}
     */
    snapshotChanges(events) {
        /** @type {?} */
        const validatedEvents = validateEventsArray(events);
        /** @type {?} */
        const scheduledSortedChanges$ = sortedChanges(this.query, validatedEvents, this.afs.schedulers.outsideAngular);
        return scheduledSortedChanges$.pipe(this.afs.keepUnstableUntilFirst);
    }
    /**
     * @template K
     * @param {?=} options
     * @return {?}
     */
    valueChanges(options = {}) {
        return fromCollectionRef(this.query, this.afs.schedulers.outsideAngular)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
         * @param {?} actions
         * @return {?}
         */
        actions => actions.payload.docs.map((/**
         * @param {?} a
         * @return {?}
         */
        a => {
            if (options.idField) {
                return (/** @type {?} */ (Object.assign(Object.assign({}, (/** @type {?} */ (a.data()))), { [options.idField]: a.id })));
            }
            else {
                return a.data();
            }
        })))), this.afs.keepUnstableUntilFirst);
    }
    /**
     * Retrieve the results of the query once.
     * @param {?=} options
     * @return {?}
     */
    get(options) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.query.get(options)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["observeOn"])(this.afs.schedulers.insideAngular));
    }
    /**
     * Add data to a collection reference.
     *
     * Note: Data operation methods are done on the reference not the query. This means
     * when you update data it is not updating data to the window of your query unless
     * the data fits the criteria of the query.
     * @param {?} data
     * @return {?}
     */
    add(data) {
        return this.ref.add(data);
    }
    /**
     * Create a reference to a single document in a collection.
     * @template T2
     * @param {?=} path
     * @return {?}
     */
    doc(path) {
        // TODO is there a better way to solve this type issue
        return new AngularFirestoreDocument((/** @type {?} */ (this.ref.doc(path))), this.afs);
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: document/document.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * AngularFirestoreDocument service
 *
 * This class creates a reference to a Firestore Document. A reference is provided in
 * in the constructor. The class is generic which gives you type safety for data update
 * methods and data streaming.
 *
 * This class uses Symbol.observable to transform into Observable using Observable.from().
 *
 * This class is rarely used directly and should be created from the AngularFirestore service.
 *
 * Example:
 *
 * const fakeStock = new AngularFirestoreDocument<Stock>(doc('stocks/FAKE'));
 * await fakeStock.set({ name: 'FAKE', price: 0.01 });
 * fakeStock.valueChanges().map(snap => {
 *   if(snap.exists) return snap.data();
 *   return null;
 * }).subscribe(value => console.log(value));
 * // OR! Transform using Observable.from() and the data is unwrapped for you
 * Observable.from(fakeStock).subscribe(value => console.log(value));
 * @template T
 */
class AngularFirestoreDocument {
    /**
     * The constructor takes in a DocumentReference to provide wrapper methods
     * for data operations, data streaming, and Symbol.observable.
     * @param {?} ref
     * @param {?} afs
     */
    constructor(ref, afs) {
        this.ref = ref;
        this.afs = afs;
    }
    /**
     * Create or overwrite a single document.
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    set(data, options) {
        return this.ref.set(data, options);
    }
    /**
     * Update some fields of a document without overwriting the entire document.
     * @param {?} data
     * @return {?}
     */
    update(data) {
        return this.ref.update(data);
    }
    /**
     * Delete a document.
     * @return {?}
     */
    delete() {
        return this.ref.delete();
    }
    /**
     * Create a reference to a sub-collection given a path and an optional query
     * function.
     * @template R
     * @param {?} path
     * @param {?=} queryFn
     * @return {?}
     */
    collection(path, queryFn) {
        /** @type {?} */
        const collectionRef = (/** @type {?} */ (this.ref.collection(path)));
        const { ref, query } = associateQuery(collectionRef, queryFn);
        return new AngularFirestoreCollection(ref, query, this.afs);
    }
    /**
     * Listen to snapshot updates from the document.
     * @return {?}
     */
    snapshotChanges() {
        /** @type {?} */
        const scheduledFromDocRef$ = fromDocRef(this.ref, this.afs.schedulers.outsideAngular);
        return scheduledFromDocRef$.pipe(this.afs.keepUnstableUntilFirst);
    }
    /**
     * @template K
     * @param {?=} options
     * @return {?}
     */
    valueChanges(options = {}) {
        return this.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
         * @param {?} __0
         * @return {?}
         */
        ({ payload }) => options.idField ? (/** @type {?} */ (Object.assign(Object.assign({}, payload.data()), { [options.idField]: payload.id }))) : payload.data())));
    }
    /**
     * Retrieve the document once.
     * @param {?=} options
     * @return {?}
     */
    get(options) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.ref.get(options)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["observeOn"])(this.afs.schedulers.insideAngular));
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: collection-group/collection-group.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * AngularFirestoreCollectionGroup service
 *
 * This class holds a reference to a Firestore Collection Group Query.
 *
 * This class uses Symbol.observable to transform into Observable using Observable.from().
 *
 * This class is rarely used directly and should be created from the AngularFirestore service.
 *
 * Example:
 *
 * const collectionGroup = firebase.firestore.collectionGroup('stocks');
 * const query = collectionRef.where('price', '>', '0.01');
 * const fakeStock = new AngularFirestoreCollectionGroup<Stock>(query, afs);
 *
 * // Subscribe to changes as snapshots. This provides you data updates as well as delta updates.
 * fakeStock.valueChanges().subscribe(value => console.log(value));
 * @template T
 */
class AngularFirestoreCollectionGroup {
    /**
     * The constructor takes in a CollectionGroupQuery to provide wrapper methods
     * for data operations and data streaming.
     * @param {?} query
     * @param {?} afs
     */
    constructor(query, afs) {
        this.query = query;
        this.afs = afs;
    }
    /**
     * Listen to the latest change in the stream. This method returns changes
     * as they occur and they are not sorted by query order. This allows you to construct
     * your own data structure.
     * @param {?=} events
     * @return {?}
     */
    stateChanges(events) {
        if (!events || events.length === 0) {
            return docChanges(this.query, this.afs.schedulers.outsideAngular).pipe(this.afs.keepUnstableUntilFirst);
        }
        return docChanges(this.query, this.afs.schedulers.outsideAngular)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
         * @param {?} actions
         * @return {?}
         */
        actions => actions.filter((/**
         * @param {?} change
         * @return {?}
         */
        change => events.indexOf(change.type) > -1)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((/**
         * @param {?} changes
         * @return {?}
         */
        changes => changes.length > 0)), this.afs.keepUnstableUntilFirst);
    }
    /**
     * Create a stream of changes as they occur it time. This method is similar to stateChanges()
     * but it collects each event in an array over time.
     * @param {?=} events
     * @return {?}
     */
    auditTrail(events) {
        return this.stateChanges(events).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])((/**
         * @param {?} current
         * @param {?} action
         * @return {?}
         */
        (current, action) => [...current, ...action]), []));
    }
    /**
     * Create a stream of synchronized changes. This method keeps the local array in sorted
     * query order.
     * @param {?=} events
     * @return {?}
     */
    snapshotChanges(events) {
        /** @type {?} */
        const validatedEvents = validateEventsArray(events);
        /** @type {?} */
        const scheduledSortedChanges$ = sortedChanges(this.query, validatedEvents, this.afs.schedulers.outsideAngular);
        return scheduledSortedChanges$.pipe(this.afs.keepUnstableUntilFirst);
    }
    /**
     * @template K
     * @param {?=} options
     * @return {?}
     */
    valueChanges(options = {}) {
        /** @type {?} */
        const fromCollectionRefScheduled$ = fromCollectionRef(this.query, this.afs.schedulers.outsideAngular);
        return fromCollectionRefScheduled$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
         * @param {?} actions
         * @return {?}
         */
        actions => actions.payload.docs.map((/**
         * @param {?} a
         * @return {?}
         */
        a => {
            if (options.idField) {
                return (/** @type {?} */ (Object.assign({ [options.idField]: a.id }, a.data())));
            }
            else {
                return a.data();
            }
        })))), this.afs.keepUnstableUntilFirst);
    }
    /**
     * Retrieve the results of the query once.
     * @param {?=} options
     * @return {?}
     */
    get(options) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.query.get(options)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["observeOn"])(this.afs.schedulers.insideAngular));
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: firestore.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The value of this token determines whether or not the firestore will have persistance enabled
 * @type {?}
 */
const ENABLE_PERSISTENCE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angularfire2.enableFirestorePersistence');
/** @type {?} */
const PERSISTENCE_SETTINGS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angularfire2.firestore.persistenceSettings');
/** @type {?} */
const SETTINGS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angularfire2.firestore.settings');
/** @type {?} */
const USE_EMULATOR = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angularfire2.firestore.use-emulator');
/**
 * A utility methods for associating a collection reference with
 * a query.
 *
 * @template T
 * @param {?} collectionRef - A collection reference to query
 * @param {?=} queryFn - The callback to create a query
 *
 * Example:
 * const { query, ref } = associateQuery(docRef.collection('items'), ref => {
 *  return ref.where('age', '<', 200);
 * });
 * @return {?}
 */
function associateQuery(collectionRef, queryFn = (/**
 * @param {?} ref
 * @return {?}
 */
ref => ref)) {
    /** @type {?} */
    const query = queryFn(collectionRef);
    /** @type {?} */
    const ref = collectionRef;
    return { query, ref };
}
/**
 * AngularFirestore Service
 *
 * This service is the main entry point for this feature module. It provides
 * an API for creating Collection and Reference services. These services can
 * then be used to do data updates and observable streams of the data.
 *
 * Example:
 *
 * import { Component } from '\@angular/core';
 * import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '\@angular/fire/firestore';
 * import { Observable } from 'rxjs/Observable';
 * import { from } from 'rxjs/observable';
 *
 * \@Component({
 *   selector: 'app-my-component',
 *   template: `
 *    <h2>Items for {{ (profile | async)?.name }}
 *    <ul>
 *       <li *ngFor="let item of items | async">{{ item.name }}</li>
 *    </ul>
 *    <div class="control-input">
 *       <input type="text" #itemname />
 *       <button (click)="addItem(itemname.value)">Add Item</button>
 *    </div>
 *   `
 * })
 * export class MyComponent implements OnInit {
 *
 *   // services for data operations and data streaming
 *   private readonly itemsRef: AngularFirestoreCollection<Item>;
 *   private readonly profileRef: AngularFirestoreDocument<Profile>;
 *
 *   // observables for template
 *   items: Observable<Item[]>;
 *   profile: Observable<Profile>;
 *
 *   // inject main service
 *   constructor(private readonly afs: AngularFirestore) {}
 *
 *   ngOnInit() {
 *     this.itemsRef = afs.collection('items', ref => ref.where('user', '==', 'davideast').limit(10));
 *     this.items = this.itemsRef.valueChanges().map(snap => snap.docs.map(data => doc.data()));
 *     // this.items = from(this.itemsRef); // you can also do this with no mapping
 *
 *     this.profileRef = afs.doc('users/davideast');
 *     this.profile = this.profileRef.valueChanges();
 *   }
 *
 *   addItem(name: string) {
 *     const user = 'davideast';
 *     this.itemsRef.add({ name, user });
 *   }
 * }
 */
class AngularFirestore {
    /**
     * Each Feature of AngularFire has a FirebaseApp injected. This way we
     * don't rely on the main Firebase App instance and we can create named
     * apps and use multiple apps.
     * @param {?} options
     * @param {?} nameOrConfig
     * @param {?} shouldEnablePersistence
     * @param {?} settings
     * @param {?} platformId
     * @param {?} zone
     * @param {?} persistenceSettings
     * @param {?} _useEmulator
     * @param {?} useAuthEmulator
     */
    constructor(options, nameOrConfig, shouldEnablePersistence, settings, 
    // tslint:disable-next-line:ban-types
    platformId, zone, persistenceSettings, _useEmulator, useAuthEmulator) {
        this.schedulers = new _angular_fire__WEBPACK_IMPORTED_MODULE_3__["??AngularFireSchedulers"](zone);
        this.keepUnstableUntilFirst = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["??keepUnstableUntilFirstFactory"])(this.schedulers);
        /** @type {?} */
        const app = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["??firebaseAppFactory"])(options, zone, nameOrConfig);
        if (!firebase_app__WEBPACK_IMPORTED_MODULE_5__["default"].auth && useAuthEmulator) {
            Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["??logAuthEmulatorError"])();
        }
        /** @type {?} */
        const useEmulator = _useEmulator;
        [this.firestore, this.persistenceEnabled$] = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["??fetchInstance"])(`${app.name}.firestore`, 'AngularFirestore', app, (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const firestore = zone.runOutsideAngular((/**
             * @return {?}
             */
            () => app.firestore()));
            if (settings) {
                firestore.settings(settings);
            }
            if (useEmulator) {
                firestore.useEmulator(...useEmulator);
            }
            if (shouldEnablePersistence && !Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformServer"])(platformId)) {
                // We need to try/catch here because not all enablePersistence() failures are caught
                // https://github.com/firebase/firebase-js-sdk/issues/608
                /** @type {?} */
                const enablePersistence = (/**
                 * @return {?}
                 */
                () => {
                    try {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(firestore.enablePersistence(persistenceSettings || undefined).then((/**
                         * @return {?}
                         */
                        () => true), (/**
                         * @return {?}
                         */
                        () => false)));
                    }
                    catch (e) {
                        if (typeof console !== 'undefined') {
                            console.warn(e);
                        }
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
                    }
                });
                return [firestore, zone.runOutsideAngular(enablePersistence)];
            }
            else {
                return [firestore, Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false)];
            }
        }), [settings, useEmulator, shouldEnablePersistence]);
    }
    /**
     * @template T
     * @param {?} pathOrRef
     * @param {?=} queryFn
     * @return {?}
     */
    collection(pathOrRef, queryFn) {
        /** @type {?} */
        let collectionRef;
        if (typeof pathOrRef === 'string') {
            collectionRef = (/** @type {?} */ (this.firestore.collection(pathOrRef)));
        }
        else {
            collectionRef = pathOrRef;
        }
        const { ref, query } = associateQuery(collectionRef, queryFn);
        /** @type {?} */
        const refInZone = this.schedulers.ngZone.run((/**
         * @return {?}
         */
        () => ref));
        return new AngularFirestoreCollection(refInZone, query, this);
    }
    /**
     * Create a reference to a Firestore Collection Group based on a collectionId
     * and an optional query function to narrow the result
     * set.
     * @template T
     * @param {?} collectionId
     * @param {?=} queryGroupFn
     * @return {?}
     */
    collectionGroup(collectionId, queryGroupFn) {
        /** @type {?} */
        const queryFn = queryGroupFn || ((/**
         * @param {?} ref
         * @return {?}
         */
        ref => ref));
        /** @type {?} */
        const collectionGroup = (/** @type {?} */ (this.firestore.collectionGroup(collectionId)));
        return new AngularFirestoreCollectionGroup(queryFn(collectionGroup), this);
    }
    /**
     * @template T
     * @param {?} pathOrRef
     * @return {?}
     */
    doc(pathOrRef) {
        /** @type {?} */
        let ref;
        if (typeof pathOrRef === 'string') {
            ref = (/** @type {?} */ (this.firestore.doc(pathOrRef)));
        }
        else {
            ref = pathOrRef;
        }
        /** @type {?} */
        const refInZone = this.schedulers.ngZone.run((/**
         * @return {?}
         */
        () => ref));
        return new AngularFirestoreDocument(refInZone, this);
    }
    /**
     * Returns a generated Firestore Document Id.
     * @return {?}
     */
    createId() {
        return this.firestore.collection('_').doc().id;
    }
}
AngularFirestore.??fac = function AngularFirestore_Factory(t) { return new (t || AngularFirestore)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](ENABLE_PERSISTENCE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](SETTINGS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](PERSISTENCE_SETTINGS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](USE_EMULATOR, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["USE_EMULATOR"], 8)); };
/** @nocollapse */
AngularFirestore.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [ENABLE_PERSISTENCE,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [SETTINGS,] }] },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [PERSISTENCE_SETTINGS,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [USE_EMULATOR,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["USE_EMULATOR"],] }] }
];
/** @nocollapse */ AngularFirestore.??prov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"])({ factory: function AngularFirestore_Factory() { return new AngularFirestore(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"])(ENABLE_PERSISTENCE, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"])(SETTINGS, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"])(PERSISTENCE_SETTINGS, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"])(USE_EMULATOR, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"])(_angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["USE_EMULATOR"], 8)); }, token: AngularFirestore, providedIn: "any" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AngularFirestore, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'any'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [ENABLE_PERSISTENCE]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [SETTINGS]
            }] }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [PERSISTENCE_SETTINGS]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [USE_EMULATOR]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["USE_EMULATOR"]]
            }] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: firestore.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularFirestoreModule {
    /**
     * Attempt to enable persistent storage, if possible
     * @param {?=} persistenceSettings
     * @return {?}
     */
    static enablePersistence(persistenceSettings) {
        return {
            ngModule: AngularFirestoreModule,
            providers: [
                { provide: ENABLE_PERSISTENCE, useValue: true },
                { provide: PERSISTENCE_SETTINGS, useValue: persistenceSettings },
            ]
        };
    }
}
AngularFirestoreModule.??fac = function AngularFirestoreModule_Factory(t) { return new (t || AngularFirestoreModule)(); };
AngularFirestoreModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AngularFirestoreModule });
AngularFirestoreModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ providers: [AngularFirestore] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AngularFirestoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                providers: [AngularFirestore]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: interfaces.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 * @template T
 */
function DocumentSnapshotExists() { }
if (false) {}
/**
 * @record
 */
function DocumentSnapshotDoesNotExist() { }
if (false) {}
/**
 * @record
 * @template T
 */
function QueryDocumentSnapshot() { }
if (false) {}
/**
 * @record
 * @template T
 */
function QuerySnapshot() { }
if (false) {}
/**
 * @record
 * @template T
 */
function DocumentChange() { }
if (false) {}
/**
 * @record
 * @template T
 */
function DocumentChangeAction() { }
if (false) {}
/**
 * @record
 * @template T
 */
function Action() { }
if (false) {}
/**
 * @record
 * @template T
 */
function Reference() { }
if (false) {}
/**
 * A structure that provides an association between a reference
 * and a query on that reference. Note: Performing operations
 * on the reference can lead to confusing results with complicated
 * queries.
 *
 * Example:
 *
 * const query = ref.where('type', '==', 'Book').
 *                  .where('price', '>' 18.00)
 *                  .where('price', '<' 100.00)
 *                  .where('category', '==', 'Fiction')
 *                  .where('publisher', '==', 'BigPublisher')
 *
 * // This addition would not be a result of the query above
 * ref.add({
 *  type: 'Magazine',
 *  price: 4.99,
 *  category: 'Sports',
 *  publisher: 'SportsPublisher'
 * });
 * @record
 * @template T
 */
function AssociatedReference() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: angular-fire-firestore.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=angular-fire-firestore.js.map

/***/ }),

/***/ "q4pn":
/*!**********************************************!*\
  !*** ./src/app/services/puntajes.service.ts ***!
  \**********************************************/
/*! exports provided: PuntajesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuntajesService", function() { return PuntajesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");


class PuntajesService {
    constructor(bd) {
        this.bd = bd;
        this.rutaDeLaColeccion = "/puntajes";
        this.referenciaAlaColeccion = bd.collection(this.rutaDeLaColeccion);
    }
    AgregarPuntaje(puntos) {
        return this.referenciaAlaColeccion.add(Object.assign({}, puntos));
    }
    GetAll() {
        return this.referenciaAlaColeccion;
    }
}
PuntajesService.??fac = function PuntajesService_Factory(t) { return new (t || PuntajesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
PuntajesService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: PuntajesService, factory: PuntajesService.??fac, providedIn: 'root' });


/***/ }),

/***/ "x7I3":
/*!*********************************************************************!*\
  !*** ./node_modules/@firebase/webchannel-wrapper/dist/index.esm.js ***!
  \*********************************************************************/
/*! exports provided: default, ErrorCode, Event, EventType, Stat, WebChannel, XhrIo, createWebChannelTransport, getStatEventTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorCode", function() { return ErrorCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventType", function() { return EventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stat", function() { return Stat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebChannel", function() { return WebChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XhrIo", function() { return XhrIo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWebChannelTransport", function() { return createWebChannelTransport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStatEventTarget", function() { return getStatEventTarget; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var h, goog = goog || {}, k = commonjsGlobal || self;
function aa() { }
function ba(a) { var b = typeof a; b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"; return "array" == b || "object" == b && "number" == typeof a.length; }
function n(a) { var b = typeof a; return "object" == b && null != a || "function" == b; }
function ca(a) { return Object.prototype.hasOwnProperty.call(a, da) && a[da] || (a[da] = ++ea); }
var da = "closure_uid_" + (1E9 * Math.random() >>> 0), ea = 0;
function fa(a, b, c) { return a.call.apply(a.bind, arguments); }
function ha(a, b, c) { if (!a)
    throw Error(); if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function () { var e = Array.prototype.slice.call(arguments); Array.prototype.unshift.apply(e, d); return a.apply(b, e); };
} return function () { return a.apply(b, arguments); }; }
function p(a, b, c) { Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? p = fa : p = ha; return p.apply(null, arguments); }
function ja(a, b) { var c = Array.prototype.slice.call(arguments, 1); return function () { var d = c.slice(); d.push.apply(d, arguments); return a.apply(this, d); }; }
function q() { return Date.now(); }
function r(a, b) { function c() { } c.prototype = b.prototype; a.X = b.prototype; a.prototype = new c; a.prototype.constructor = a; a.Kb = function (d, e, f) { for (var g = Array(arguments.length - 2), m = 2; m < arguments.length; m++)
    g[m - 2] = arguments[m]; return b.prototype[e].apply(d, g); }; }
function t() { this.j = this.j; this.i = this.i; }
var ka = 0;
t.prototype.j = !1;
t.prototype.ja = function () { if (!this.j && (this.j = !0, this.G(), 0 != ka)) {
    var a = ca(this);
} };
t.prototype.G = function () { if (this.i)
    for (; this.i.length;)
        this.i.shift()(); };
var ma = Array.prototype.indexOf ? function (a, b) { return Array.prototype.indexOf.call(a, b, void 0); } : function (a, b) { if ("string" === typeof a)
    return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0); for (var c = 0; c < a.length; c++)
    if (c in a && a[c] === b)
        return c; return -1; }, na = Array.prototype.forEach ? function (a, b, c) { Array.prototype.forEach.call(a, b, c); } : function (a, b, c) { for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
    f in e && b.call(c, e[f], f, a); };
function oa(a) { a: {
    var b = pa;
    for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
        if (e in d && b.call(void 0, d[e], e, a)) {
            b = e;
            break a;
        }
    b = -1;
} return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]; }
function qa(a) { return Array.prototype.concat.apply([], arguments); }
function ra(a) { var b = a.length; if (0 < b) {
    for (var c = Array(b), d = 0; d < b; d++)
        c[d] = a[d];
    return c;
} return []; }
function sa(a) { return /^[\s\xa0]*$/.test(a); }
var ta = String.prototype.trim ? function (a) { return a.trim(); } : function (a) { return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]; };
function v(a, b) { return -1 != a.indexOf(b); }
function ua(a, b) { return a < b ? -1 : a > b ? 1 : 0; }
var w;
a: {
    var va = k.navigator;
    if (va) {
        var wa = va.userAgent;
        if (wa) {
            w = wa;
            break a;
        }
    }
    w = "";
}
function za(a, b, c) { for (var d in a)
    b.call(c, a[d], d, a); }
function Aa(a) { var b = {}; for (var c in a)
    b[c] = a[c]; return b; }
var Ba = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Ca(a, b) { var c, d; for (var e = 1; e < arguments.length; e++) {
    d = arguments[e];
    for (c in d)
        a[c] = d[c];
    for (var f = 0; f < Ba.length; f++)
        c = Ba[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
} }
function Da(a) { Da[" "](a); return a; }
Da[" "] = aa;
function Ea(a, b) { var c = Fa; return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a); }
var Ga = v(w, "Opera"), x = v(w, "Trident") || v(w, "MSIE"), Ha = v(w, "Edge"), Ia = Ha || x, Ja = v(w, "Gecko") && !(v(w.toLowerCase(), "webkit") && !v(w, "Edge")) && !(v(w, "Trident") || v(w, "MSIE")) && !v(w, "Edge"), Ka = v(w.toLowerCase(), "webkit") && !v(w, "Edge");
function La() { var a = k.document; return a ? a.documentMode : void 0; }
var Ma;
a: {
    var Na = "", Oa = function () { var a = w; if (Ja)
        return /rv:([^\);]+)(\)|;)/.exec(a); if (Ha)
        return /Edge\/([\d\.]+)/.exec(a); if (x)
        return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a); if (Ka)
        return /WebKit\/(\S+)/.exec(a); if (Ga)
        return /(?:Version)[ \/]?(\S+)/.exec(a); }();
    Oa && (Na = Oa ? Oa[1] : "");
    if (x) {
        var Pa = La();
        if (null != Pa && Pa > parseFloat(Na)) {
            Ma = String(Pa);
            break a;
        }
    }
    Ma = Na;
}
var Fa = {};
function Qa(a) { return Ea(a, function () { {
    var b = 0;
    var e = ta(String(Ma)).split("."), f = ta(String(a)).split("."), g = Math.max(e.length, f.length);
    for (var m = 0; 0 == b && m < g; m++) {
        var c = e[m] || "", d = f[m] || "";
        do {
            c = /(\d*)(\D*)(.*)/.exec(c) || ["", "", "", ""];
            d = /(\d*)(\D*)(.*)/.exec(d) || ["", "", "", ""];
            if (0 == c[0].length && 0 == d[0].length)
                break;
            b = ua(0 == c[1].length ? 0 : parseInt(c[1], 10), 0 == d[1].length ? 0 : parseInt(d[1], 10)) || ua(0 == c[2].length, 0 == d[2].length) || ua(c[2], d[2]);
            c = c[3];
            d = d[3];
        } while (0 == b);
    }
} return 0 <= b; }); }
var Ra;
if (k.document && x) {
    var Sa = La();
    Ra = Sa ? Sa : parseInt(Ma, 10) || void 0;
}
else
    Ra = void 0;
var Ta = Ra;
var Ua = !x || 9 <= Number(Ta), Va = x && !Qa("9"), Wa = function () { if (!k.addEventListener || !Object.defineProperty)
    return !1; var a = !1, b = Object.defineProperty({}, "passive", { get: function () { a = !0; } }); try {
    k.addEventListener("test", aa, b), k.removeEventListener("test", aa, b);
}
catch (c) { } return a; }();
function y(a, b) { this.type = a; this.a = this.target = b; this.defaultPrevented = !1; }
y.prototype.b = function () { this.defaultPrevented = !0; };
function z(a, b) {
    y.call(this, a ? a.type : "");
    this.relatedTarget = this.a = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.pointerId = 0;
    this.pointerType = "";
    this.c = null;
    if (a) {
        var c = this.type = a.type, d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.a = b;
        if (b = a.relatedTarget) {
            if (Ja) {
                a: {
                    try {
                        Da(b.nodeName);
                        var e = !0;
                        break a;
                    }
                    catch (f) { }
                    e = !1;
                }
                e || (b = null);
            }
        }
        else
            "mouseover" ==
                c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.key = a.key || "";
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey =
            a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Xa[a.pointerType] || "";
        this.c = a;
        a.defaultPrevented && this.b();
    }
}
r(z, y);
var Xa = { 2: "touch", 3: "pen", 4: "mouse" };
z.prototype.b = function () { z.X.b.call(this); var a = this.c; if (a.preventDefault)
    a.preventDefault();
else if (a.returnValue = !1, Va)
    try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
            a.keyCode = -1;
    }
    catch (b) { } };
var A = "closure_listenable_" + (1E6 * Math.random() | 0), Ya = 0;
function Za(a, b, c, d, e) { this.listener = a; this.proxy = null; this.src = b; this.type = c; this.capture = !!d; this.ca = e; this.key = ++Ya; this.Y = this.Z = !1; }
function $a(a) { a.Y = !0; a.listener = null; a.proxy = null; a.src = null; a.ca = null; }
function ab(a) { this.src = a; this.a = {}; this.b = 0; }
ab.prototype.add = function (a, b, c, d, e) { var f = a.toString(); a = this.a[f]; a || (a = this.a[f] = [], this.b++); var g = bb(a, b, d, e); -1 < g ? (b = a[g], c || (b.Z = !1)) : (b = new Za(b, this.src, f, !!d, e), b.Z = c, a.push(b)); return b; };
function cb(a, b) { var c = b.type; if (c in a.a) {
    var d = a.a[c], e = ma(d, b), f;
    (f = 0 <= e) && Array.prototype.splice.call(d, e, 1);
    f && ($a(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
} }
function bb(a, b, c, d) { for (var e = 0; e < a.length; ++e) {
    var f = a[e];
    if (!f.Y && f.listener == b && f.capture == !!c && f.ca == d)
        return e;
} return -1; }
var db = "closure_lm_" + (1E6 * Math.random() | 0), eb = {};
function gb(a, b, c, d, e) { if (d && d.once)
    return hb(a, b, c, d, e); if (Array.isArray(b)) {
    for (var f = 0; f < b.length; f++)
        gb(a, b[f], c, d, e);
    return null;
} c = ib(c); return a && a[A] ? a.va(b, c, n(d) ? !!d.capture : !!d, e) : jb(a, b, c, !1, d, e); }
function jb(a, b, c, d, e, f) {
    if (!b)
        throw Error("Invalid event type");
    var g = n(e) ? !!e.capture : !!e;
    if (g && !Ua)
        return null;
    var m = kb(a);
    m || (a[db] = m = new ab(a));
    c = m.add(b, c, d, g, f);
    if (c.proxy)
        return c;
    d = lb();
    c.proxy = d;
    d.src = a;
    d.listener = c;
    if (a.addEventListener)
        Wa || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
    else if (a.attachEvent)
        a.attachEvent(mb(b.toString()), d);
    else if (a.addListener && a.removeListener)
        a.addListener(d);
    else
        throw Error("addEventListener and attachEvent are unavailable.");
    return c;
}
function lb() { var a = nb, b = Ua ? function (c) { return a.call(b.src, b.listener, c); } : function (c) { c = a.call(b.src, b.listener, c); if (!c)
    return c; }; return b; }
function hb(a, b, c, d, e) { if (Array.isArray(b)) {
    for (var f = 0; f < b.length; f++)
        hb(a, b[f], c, d, e);
    return null;
} c = ib(c); return a && a[A] ? a.wa(b, c, n(d) ? !!d.capture : !!d, e) : jb(a, b, c, !0, d, e); }
function ob(a, b, c, d, e) { if (Array.isArray(b))
    for (var f = 0; f < b.length; f++)
        ob(a, b[f], c, d, e);
else
    (d = n(d) ? !!d.capture : !!d, c = ib(c), a && a[A]) ? (a = a.c, b = String(b).toString(), b in a.a && (f = a.a[b], c = bb(f, c, d, e), -1 < c && ($a(f[c]), Array.prototype.splice.call(f, c, 1), 0 == f.length && (delete a.a[b], a.b--)))) : a && (a = kb(a)) && (b = a.a[b.toString()], a = -1, b && (a = bb(b, c, d, e)), (c = -1 < a ? b[a] : null) && pb(c)); }
function pb(a) { if ("number" !== typeof a && a && !a.Y) {
    var b = a.src;
    if (b && b[A])
        cb(b.c, a);
    else {
        var c = a.type, d = a.proxy;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(mb(c), d) : b.addListener && b.removeListener && b.removeListener(d);
        (c = kb(b)) ? (cb(c, a), 0 == c.b && (c.src = null, b[db] = null)) : $a(a);
    }
} }
function mb(a) { return a in eb ? eb[a] : eb[a] = "on" + a; }
function qb(a, b) { var c = a.listener, d = a.ca || a.src; a.Z && pb(a); return c.call(d, b); }
function nb(a, b) { if (a.Y)
    return !0; if (!Ua) {
    if (!b)
        a: {
            b = ["window", "event"];
            for (var c = k, d = 0; d < b.length; d++)
                if (c = c[b[d]], null == c) {
                    b = null;
                    break a;
                }
            b = c;
        }
    b = new z(b, this);
    return qb(a, b);
} return qb(a, new z(b, this)); }
function kb(a) { a = a[db]; return a instanceof ab ? a : null; }
var sb = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function ib(a) { if ("function" === typeof a)
    return a; a[sb] || (a[sb] = function (b) { return a.handleEvent(b); }); return a[sb]; }
function D() { t.call(this); this.c = new ab(this); this.J = this; this.C = null; }
r(D, t);
D.prototype[A] = !0;
h = D.prototype;
h.addEventListener = function (a, b, c, d) { gb(this, a, b, c, d); };
h.removeEventListener = function (a, b, c, d) { ob(this, a, b, c, d); };
function E(a, b) { var c, d = a.C; if (d)
    for (c = []; d; d = d.C)
        c.push(d); a = a.J; d = b.type || b; if ("string" === typeof b)
    b = new y(b, a);
else if (b instanceof y)
    b.target = b.target || a;
else {
    var e = b;
    b = new y(d, a);
    Ca(b, e);
} e = !0; if (c)
    for (var f = c.length - 1; 0 <= f; f--) {
        var g = b.a = c[f];
        e = tb(g, d, !0, b) && e;
    } g = b.a = a; e = tb(g, d, !0, b) && e; e = tb(g, d, !1, b) && e; if (c)
    for (f = 0; f < c.length; f++)
        g = b.a = c[f], e = tb(g, d, !1, b) && e; }
h.G = function () { D.X.G.call(this); if (this.c) {
    var a = this.c, c;
    for (c in a.a) {
        for (var d = a.a[c], e = 0; e < d.length; e++)
            $a(d[e]);
        delete a.a[c];
        a.b--;
    }
} this.C = null; };
h.va = function (a, b, c, d) { return this.c.add(String(a), b, !1, c, d); };
h.wa = function (a, b, c, d) { return this.c.add(String(a), b, !0, c, d); };
function tb(a, b, c, d) { b = a.c.a[String(b)]; if (!b)
    return !0; b = b.concat(); for (var e = !0, f = 0; f < b.length; ++f) {
    var g = b[f];
    if (g && !g.Y && g.capture == c) {
        var m = g.listener, l = g.ca || g.src;
        g.Z && cb(a.c, g);
        e = !1 !== m.call(l, d) && e;
    }
} return e && !d.defaultPrevented; }
var ub = k.JSON.stringify;
function vb() { this.b = this.a = null; }
var xb = new /** @class */ (function () {
    function class_1(a, b) {
        this.c = a;
        this.f = b;
        this.b = 0;
        this.a = null;
    }
    class_1.prototype.get = function () { var a; 0 < this.b ? (this.b--, a = this.a, this.a = a.next, a.next = null) : a = this.c(); return a; };
    return class_1;
}())(function () { return new wb; }, function (a) { a.reset(); });
vb.prototype.add = function (a, b) { var c = xb.get(); c.set(a, b); this.b ? this.b.next = c : this.a = c; this.b = c; };
function yb() { var a = zb, b = null; a.a && (b = a.a, a.a = a.a.next, a.a || (a.b = null), b.next = null); return b; }
function wb() { this.next = this.b = this.a = null; }
wb.prototype.set = function (a, b) { this.a = a; this.b = b; this.next = null; };
wb.prototype.reset = function () { this.next = this.b = this.a = null; };
function Ab(a) { k.setTimeout(function () { throw a; }, 0); }
function Bb(a, b) { Cb || Db(); Eb || (Cb(), Eb = !0); zb.add(a, b); }
var Cb;
function Db() { var a = k.Promise.resolve(void 0); Cb = function () { a.then(Fb); }; }
var Eb = !1, zb = new vb;
function Fb() { for (var a; a = yb();) {
    try {
        a.a.call(a.b);
    }
    catch (c) {
        Ab(c);
    }
    var b = xb;
    b.f(a);
    100 > b.b && (b.b++, a.next = b.a, b.a = a);
} Eb = !1; }
function Gb(a, b) { D.call(this); this.b = a || 1; this.a = b || k; this.f = p(this.Za, this); this.g = q(); }
r(Gb, D);
h = Gb.prototype;
h.aa = !1;
h.M = null;
h.Za = function () { if (this.aa) {
    var a = q() - this.g;
    0 < a && a < .8 * this.b ? this.M = this.a.setTimeout(this.f, this.b - a) : (this.M && (this.a.clearTimeout(this.M), this.M = null), E(this, "tick"), this.aa && (Hb(this), this.start()));
} };
h.start = function () { this.aa = !0; this.M || (this.M = this.a.setTimeout(this.f, this.b), this.g = q()); };
function Hb(a) { a.aa = !1; a.M && (a.a.clearTimeout(a.M), a.M = null); }
h.G = function () { Gb.X.G.call(this); Hb(this); delete this.a; };
function Ib(a, b, c) { if ("function" === typeof a)
    c && (a = p(a, c));
else if (a && "function" == typeof a.handleEvent)
    a = p(a.handleEvent, a);
else
    throw Error("Invalid listener argument"); return 2147483647 < Number(b) ? -1 : k.setTimeout(a, b || 0); }
function Jb(a) { a.a = Ib(function () { a.a = null; a.c && (a.c = !1, Jb(a)); }, a.h); var b = a.b; a.b = null; a.g.apply(null, b); }
var Kb = /** @class */ (function (_super) {
    __extends(Kb, _super);
    function Kb(a, b) {
        var _this = _super.call(this) || this;
        _this.g = a;
        _this.h = b;
        _this.b = null;
        _this.c = !1;
        _this.a = null;
        return _this;
    }
    Kb.prototype.f = function (a) { this.b = arguments; this.a ? this.c = !0 : Jb(this); };
    Kb.prototype.G = function () { _super.prototype.G.call(this); this.a && (k.clearTimeout(this.a), this.a = null, this.c = !1, this.b = null); };
    return Kb;
}(t));
function F(a) { t.call(this); this.b = a; this.a = {}; }
r(F, t);
var Lb = [];
function Mb(a, b, c, d) { Array.isArray(c) || (c && (Lb[0] = c.toString()), c = Lb); for (var e = 0; e < c.length; e++) {
    var f = gb(b, c[e], d || a.handleEvent, !1, a.b || a);
    if (!f)
        break;
    a.a[f.key] = f;
} }
function Nb(a) { za(a.a, function (b, c) { this.a.hasOwnProperty(c) && pb(b); }, a); a.a = {}; }
F.prototype.G = function () { F.X.G.call(this); Nb(this); };
F.prototype.handleEvent = function () { throw Error("EventHandler.handleEvent not implemented"); };
function Ob() { this.a = !0; }
function Pb(a, b, c, d, e, f) { a.info(function () { if (a.a)
    if (f) {
        var g = "";
        for (var m = f.split("&"), l = 0; l < m.length; l++) {
            var u = m[l].split("=");
            if (1 < u.length) {
                var C = u[0];
                u = u[1];
                var B = C.split("_");
                g = 2 <= B.length && "type" == B[1] ? g + (C + "=" + u + "&") : g + (C + "=redacted&");
            }
        }
    }
    else
        g = null;
else
    g = f; return "XMLHTTP REQ (" + d + ") [attempt " + e + "]: " + b + "\n" + c + "\n" + g; }); }
function Qb(a, b, c, d, e, f, g) { a.info(function () { return "XMLHTTP RESP (" + d + ") [ attempt " + e + "]: " + b + "\n" + c + "\n" + f + " " + g; }); }
function G(a, b, c, d) { a.info(function () { return "XMLHTTP TEXT (" + b + "): " + Rb(a, c) + (d ? " " + d : ""); }); }
function Sb(a, b) { a.info(function () { return "TIMEOUT: " + b; }); }
Ob.prototype.info = function () { };
function Rb(a, b) { if (!a.a)
    return b; if (!b)
    return null; try {
    var c = JSON.parse(b);
    if (c)
        for (a = 0; a < c.length; a++)
            if (Array.isArray(c[a])) {
                var d = c[a];
                if (!(2 > d.length)) {
                    var e = d[1];
                    if (Array.isArray(e) && !(1 > e.length)) {
                        var f = e[0];
                        if ("noop" != f && "stop" != f && "close" != f)
                            for (var g = 1; g < e.length; g++)
                                e[g] = "";
                    }
                }
            }
    return ub(c);
}
catch (m) {
    return b;
} }
var H = {}, Tb = null;
function Ub() { return Tb = Tb || new D; }
H.Fa = "serverreachability";
function Vb(a) { y.call(this, H.Fa, a); }
r(Vb, y);
function I(a) { var b = Ub(); E(b, new Vb(b, a)); }
H.STAT_EVENT = "statevent";
function Wb(a, b) { y.call(this, H.STAT_EVENT, a); this.stat = b; }
r(Wb, y);
function J(a) { var b = Ub(); E(b, new Wb(b, a)); }
H.Ga = "timingevent";
function Xb(a) { y.call(this, H.Ga, a); }
r(Xb, y);
function K(a, b) { if ("function" !== typeof a)
    throw Error("Fn must not be null and must be a function"); return k.setTimeout(function () { a(); }, b); }
var Yb = { NO_ERROR: 0, $a: 1, nb: 2, mb: 3, hb: 4, lb: 5, ob: 6, Da: 7, TIMEOUT: 8, rb: 9 };
var Zb = { fb: "complete", Bb: "success", Ea: "error", Da: "abort", tb: "ready", ub: "readystatechange", TIMEOUT: "timeout", pb: "incrementaldata", sb: "progress", ib: "downloadprogress", Jb: "uploadprogress" };
function $b() { }
$b.prototype.a = null;
function ac(a) { var b; (b = a.a) || (b = a.a = {}); return b; }
function bc() { }
var L = { OPEN: "a", eb: "b", Ea: "c", qb: "d" };
function cc() { y.call(this, "d"); }
r(cc, y);
function dc() { y.call(this, "c"); }
r(dc, y);
var ec;
function fc() { }
r(fc, $b);
ec = new fc;
function M(a, b, c, d) { this.g = a; this.c = b; this.f = c; this.S = d || 1; this.J = new F(this); this.P = gc; a = Ia ? 125 : void 0; this.R = new Gb(a); this.B = null; this.b = !1; this.j = this.l = this.i = this.H = this.u = this.T = this.o = null; this.s = []; this.a = null; this.D = 0; this.h = this.m = null; this.N = -1; this.A = !1; this.O = 0; this.F = null; this.V = this.C = this.U = this.I = !1; }
var gc = 45E3, hc = {}, ic = {};
h = M.prototype;
h.setTimeout = function (a) { this.P = a; };
function jc(a, b, c) { a.H = 1; a.i = kc(N(b)); a.j = c; a.I = !0; lc(a, null); }
function lc(a, b) { a.u = q(); mc(a); a.l = N(a.i); var c = a.l, d = a.S; Array.isArray(d) || (d = [String(d)]); nc(c.b, "t", d); a.D = 0; a.a = oc(a.g, a.g.C ? b : null); 0 < a.O && (a.F = new Kb(p(a.Ca, a, a.a), a.O)); Mb(a.J, a.a, "readystatechange", a.Xa); b = a.B ? Aa(a.B) : {}; a.j ? (a.m || (a.m = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.a.ba(a.l, a.m, a.j, b)) : (a.m = "GET", a.a.ba(a.l, a.m, null, b)); I(1); Pb(a.c, a.m, a.l, a.f, a.S, a.j); }
h.Xa = function (a) { a = a.target; var b = this.F; b && 3 == O(a) ? b.f() : this.Ca(a); };
h.Ca = function (a) {
    try {
        if (a == this.a)
            a: {
                var b = O(this.a), c = this.a.ua(), d = this.a.W();
                if (!(3 > b || 3 == b && !Ia && !this.a.$())) {
                    this.A || 4 != b || 7 == c || (8 == c || 0 >= d ? I(3) : I(2));
                    pc(this);
                    var e = this.a.W();
                    this.N = e;
                    var f = this.a.$();
                    this.b = 200 == e;
                    Qb(this.c, this.m, this.l, this.f, this.S, b, e);
                    if (this.b) {
                        if (this.U && !this.C) {
                            b: {
                                if (this.a) {
                                    var g, m = this.a;
                                    if ((g = m.a ? m.a.getResponseHeader("X-HTTP-Initial-Response") : null) && !sa(g)) {
                                        var l = g;
                                        break b;
                                    }
                                }
                                l = null;
                            }
                            if (l)
                                G(this.c, this.f, l, "Initial handshake response via X-HTTP-Initial-Response"),
                                    this.C = !0, qc(this, l);
                            else {
                                this.b = !1;
                                this.h = 3;
                                J(12);
                                P(this);
                                rc(this);
                                break a;
                            }
                        }
                        this.I ? (sc(this, b, f), Ia && this.b && 3 == b && (Mb(this.J, this.R, "tick", this.Wa), this.R.start())) : (G(this.c, this.f, f, null), qc(this, f));
                        4 == b && P(this);
                        this.b && !this.A && (4 == b ? uc(this.g, this) : (this.b = !1, mc(this)));
                    }
                    else
                        400 == e && 0 < f.indexOf("Unknown SID") ? (this.h = 3, J(12)) : (this.h = 0, J(13)), P(this), rc(this);
                }
            }
    }
    catch (u) { }
    finally { }
};
function sc(a, b, c) { for (var d = !0; !a.A && a.D < c.length;) {
    var e = vc(a, c);
    if (e == ic) {
        4 == b && (a.h = 4, J(14), d = !1);
        G(a.c, a.f, null, "[Incomplete Response]");
        break;
    }
    else if (e == hc) {
        a.h = 4;
        J(15);
        G(a.c, a.f, c, "[Invalid Chunk]");
        d = !1;
        break;
    }
    else
        G(a.c, a.f, e, null), qc(a, e);
} 4 == b && 0 == c.length && (a.h = 1, J(16), d = !1); a.b = a.b && d; d ? 0 < c.length && !a.V && (a.V = !0, b = a.g, b.a == a && b.U && !b.F && (b.c.info("Great, no buffering proxy detected. Bytes received: " + c.length), wc(b), b.F = !0, J(11))) : (G(a.c, a.f, c, "[Invalid Chunked Response]"), P(a), rc(a)); }
h.Wa = function () { if (this.a) {
    var a = O(this.a), b = this.a.$();
    this.D < b.length && (pc(this), sc(this, a, b), this.b && 4 != a && mc(this));
} };
function vc(a, b) { var c = a.D, d = b.indexOf("\n", c); if (-1 == d)
    return ic; c = Number(b.substring(c, d)); if (isNaN(c))
    return hc; d += 1; if (d + c > b.length)
    return ic; b = b.substr(d, c); a.D = d + c; return b; }
h.cancel = function () { this.A = !0; P(this); };
function mc(a) { a.T = q() + a.P; yc(a, a.P); }
function yc(a, b) { if (null != a.o)
    throw Error("WatchDog timer not null"); a.o = K(p(a.Va, a), b); }
function pc(a) { a.o && (k.clearTimeout(a.o), a.o = null); }
h.Va = function () { this.o = null; var a = q(); 0 <= a - this.T ? (Sb(this.c, this.l), 2 != this.H && (I(3), J(17)), P(this), this.h = 2, rc(this)) : yc(this, this.T - a); };
function rc(a) { 0 == a.g.v || a.A || uc(a.g, a); }
function P(a) { pc(a); var b = a.F; b && "function" == typeof b.ja && b.ja(); a.F = null; Hb(a.R); Nb(a.J); a.a && (b = a.a, a.a = null, b.abort(), b.ja()); }
function qc(a, b) {
    try {
        var c = a.g;
        if (0 != c.v && (c.a == a || zc(c.b, a)))
            if (c.I = a.N, !a.C && zc(c.b, a) && 3 == c.v) {
                try {
                    var d = c.ka.a.parse(b);
                }
                catch (tc) {
                    d = null;
                }
                if (Array.isArray(d) && 3 == d.length) {
                    var e = d;
                    if (0 == e[0])
                        a: {
                            if (!c.j) {
                                if (c.a)
                                    if (c.a.u + 3E3 < a.u)
                                        Ac(c), Bc(c);
                                    else
                                        break a;
                                Cc(c);
                                J(18);
                            }
                        }
                    else
                        c.oa = e[1], 0 < c.oa - c.P && 37500 > e[2] && c.H && 0 == c.o && !c.m && (c.m = K(p(c.Sa, c), 6E3));
                    if (1 >= Dc(c.b) && c.ea) {
                        try {
                            c.ea();
                        }
                        catch (tc) { }
                        c.ea = void 0;
                    }
                }
                else
                    Q(c, 11);
            }
            else if ((a.C || c.a == a) && Ac(c), !sa(b))
                for (b = d = c.ka.a.parse(b), d = 0; d < b.length; d++)
                    if (e =
                        b[d], c.P = e[0], e = e[1], 2 == c.v)
                        if ("c" == e[0]) {
                            c.J = e[1];
                            c.ga = e[2];
                            var f = e[3];
                            null != f && (c.ha = f, c.c.info("VER=" + c.ha));
                            var g = e[4];
                            null != g && (c.pa = g, c.c.info("SVER=" + c.pa));
                            var m = e[5];
                            if (null != m && "number" === typeof m && 0 < m) {
                                var l = 1.5 * m;
                                c.D = l;
                                c.c.info("backChannelRequestTimeoutMs_=" + l);
                            }
                            l = c;
                            var u = a.a;
                            if (u) {
                                var C = u.a ? u.a.getResponseHeader("X-Client-Wire-Protocol") : null;
                                if (C) {
                                    var B = l.b;
                                    !B.a && (v(C, "spdy") || v(C, "quic") || v(C, "h2")) && (B.f = B.g, B.a = new Set, B.b && (Ec(B, B.b), B.b = null));
                                }
                                if (l.A) {
                                    var rb = u.a ? u.a.getResponseHeader("X-HTTP-Session-Id") :
                                        null;
                                    rb && (l.na = rb, R(l.B, l.A, rb));
                                }
                            }
                            c.v = 3;
                            c.f && c.f.ta();
                            c.U && (c.N = q() - a.u, c.c.info("Handshake RTT: " + c.N + "ms"));
                            l = c;
                            var xa = a;
                            l.la = Fc(l, l.C ? l.ga : null, l.fa);
                            if (xa.C) {
                                Gc(l.b, xa);
                                var ya = xa, xc = l.D;
                                xc && ya.setTimeout(xc);
                                ya.o && (pc(ya), mc(ya));
                                l.a = xa;
                            }
                            else
                                Hc(l);
                            0 < c.g.length && Ic(c);
                        }
                        else
                            "stop" != e[0] && "close" != e[0] || Q(c, 7);
                    else
                        3 == c.v && ("stop" == e[0] || "close" == e[0] ? "stop" == e[0] ? Q(c, 7) : Jc(c) : "noop" != e[0] && c.f && c.f.sa(e), c.o = 0);
        I(4);
    }
    catch (tc) { }
}
function Kc(a) { if (a.K && "function" == typeof a.K)
    return a.K(); if ("string" === typeof a)
    return a.split(""); if (ba(a)) {
    for (var b = [], c = a.length, d = 0; d < c; d++)
        b.push(a[d]);
    return b;
} b = []; c = 0; for (d in a)
    b[c++] = a[d]; return a = b; }
function Lc(a, b) { if (a.forEach && "function" == typeof a.forEach)
    a.forEach(b, void 0);
else if (ba(a) || "string" === typeof a)
    na(a, b, void 0);
else {
    if (a.L && "function" == typeof a.L)
        var c = a.L();
    else if (a.K && "function" == typeof a.K)
        c = void 0;
    else if (ba(a) || "string" === typeof a) {
        c = [];
        for (var d = a.length, e = 0; e < d; e++)
            c.push(e);
    }
    else
        for (e in c = [], d = 0, a)
            c[d++] = e;
    d = Kc(a);
    e = d.length;
    for (var f = 0; f < e; f++)
        b.call(void 0, d[f], c && c[f], a);
} }
function S(a, b) { this.b = {}; this.a = []; this.c = 0; var c = arguments.length; if (1 < c) {
    if (c % 2)
        throw Error("Uneven number of arguments");
    for (var d = 0; d < c; d += 2)
        this.set(arguments[d], arguments[d + 1]);
}
else if (a)
    if (a instanceof S)
        for (c = a.L(), d = 0; d < c.length; d++)
            this.set(c[d], a.get(c[d]));
    else
        for (d in a)
            this.set(d, a[d]); }
h = S.prototype;
h.K = function () { Mc(this); for (var a = [], b = 0; b < this.a.length; b++)
    a.push(this.b[this.a[b]]); return a; };
h.L = function () { Mc(this); return this.a.concat(); };
function Mc(a) { if (a.c != a.a.length) {
    for (var b = 0, c = 0; b < a.a.length;) {
        var d = a.a[b];
        T(a.b, d) && (a.a[c++] = d);
        b++;
    }
    a.a.length = c;
} if (a.c != a.a.length) {
    var e = {};
    for (c = b = 0; b < a.a.length;)
        d = a.a[b], T(e, d) || (a.a[c++] = d, e[d] = 1), b++;
    a.a.length = c;
} }
h.get = function (a, b) { return T(this.b, a) ? this.b[a] : b; };
h.set = function (a, b) { T(this.b, a) || (this.c++, this.a.push(a)); this.b[a] = b; };
h.forEach = function (a, b) { for (var c = this.L(), d = 0; d < c.length; d++) {
    var e = c[d], f = this.get(e);
    a.call(b, f, e, this);
} };
function T(a, b) { return Object.prototype.hasOwnProperty.call(a, b); }
var Nc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
function Oc(a, b) { if (a) {
    a = a.split("&");
    for (var c = 0; c < a.length; c++) {
        var d = a[c].indexOf("="), e = null;
        if (0 <= d) {
            var f = a[c].substring(0, d);
            e = a[c].substring(d + 1);
        }
        else
            f = a[c];
        b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
    }
} }
function U(a, b) { this.c = this.j = this.f = ""; this.h = null; this.i = this.g = ""; this.a = !1; if (a instanceof U) {
    this.a = void 0 !== b ? b : a.a;
    Pc(this, a.f);
    this.j = a.j;
    Qc(this, a.c);
    Rc(this, a.h);
    this.g = a.g;
    b = a.b;
    var c = new Sc;
    c.c = b.c;
    b.a && (c.a = new S(b.a), c.b = b.b);
    Tc(this, c);
    this.i = a.i;
}
else
    a && (c = String(a).match(Nc)) ? (this.a = !!b, Pc(this, c[1] || "", !0), this.j = Uc(c[2] || ""), Qc(this, c[3] || "", !0), Rc(this, c[4]), this.g = Uc(c[5] || "", !0), Tc(this, c[6] || "", !0), this.i = Uc(c[7] || "")) : (this.a = !!b, this.b = new Sc(null, this.a)); }
U.prototype.toString = function () { var a = [], b = this.f; b && a.push(Vc(b, Wc, !0), ":"); var c = this.c; if (c || "file" == b)
    a.push("//"), (b = this.j) && a.push(Vc(b, Wc, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.h, null != c && a.push(":", String(c)); if (c = this.g)
    this.c && "/" != c.charAt(0) && a.push("/"), a.push(Vc(c, "/" == c.charAt(0) ? Xc : Yc, !0)); (c = this.b.toString()) && a.push("?", c); (c = this.i) && a.push("#", Vc(c, Zc)); return a.join(""); };
function N(a) { return new U(a); }
function Pc(a, b, c) { a.f = c ? Uc(b, !0) : b; a.f && (a.f = a.f.replace(/:$/, "")); }
function Qc(a, b, c) { a.c = c ? Uc(b, !0) : b; }
function Rc(a, b) { if (b) {
    b = Number(b);
    if (isNaN(b) || 0 > b)
        throw Error("Bad port number " + b);
    a.h = b;
}
else
    a.h = null; }
function Tc(a, b, c) { b instanceof Sc ? (a.b = b, $c(a.b, a.a)) : (c || (b = Vc(b, ad)), a.b = new Sc(b, a.a)); }
function R(a, b, c) { a.b.set(b, c); }
function kc(a) { R(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ q()).toString(36)); return a; }
function bd(a) { return a instanceof U ? N(a) : new U(a, void 0); }
function cd(a, b, c, d) { var e = new U(null, void 0); a && Pc(e, a); b && Qc(e, b); c && Rc(e, c); d && (e.g = d); return e; }
function Uc(a, b) { return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""; }
function Vc(a, b, c) { return "string" === typeof a ? (a = encodeURI(a).replace(b, dd), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null; }
function dd(a) { a = a.charCodeAt(0); return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16); }
var Wc = /[#\/\?@]/g, Yc = /[#\?:]/g, Xc = /[#\?]/g, ad = /[#\?@]/g, Zc = /#/g;
function Sc(a, b) { this.b = this.a = null; this.c = a || null; this.f = !!b; }
function V(a) { a.a || (a.a = new S, a.b = 0, a.c && Oc(a.c, function (b, c) { a.add(decodeURIComponent(b.replace(/\+/g, " ")), c); })); }
h = Sc.prototype;
h.add = function (a, b) { V(this); this.c = null; a = W(this, a); var c = this.a.get(a); c || this.a.set(a, c = []); c.push(b); this.b += 1; return this; };
function ed(a, b) { V(a); b = W(a, b); T(a.a.b, b) && (a.c = null, a.b -= a.a.get(b).length, a = a.a, T(a.b, b) && (delete a.b[b], a.c--, a.a.length > 2 * a.c && Mc(a))); }
function fd(a, b) { V(a); b = W(a, b); return T(a.a.b, b); }
h.forEach = function (a, b) { V(this); this.a.forEach(function (c, d) { na(c, function (e) { a.call(b, e, d, this); }, this); }, this); };
h.L = function () { V(this); for (var a = this.a.K(), b = this.a.L(), c = [], d = 0; d < b.length; d++)
    for (var e = a[d], f = 0; f < e.length; f++)
        c.push(b[d]); return c; };
h.K = function (a) { V(this); var b = []; if ("string" === typeof a)
    fd(this, a) && (b = qa(b, this.a.get(W(this, a))));
else {
    a = this.a.K();
    for (var c = 0; c < a.length; c++)
        b = qa(b, a[c]);
} return b; };
h.set = function (a, b) { V(this); this.c = null; a = W(this, a); fd(this, a) && (this.b -= this.a.get(a).length); this.a.set(a, [b]); this.b += 1; return this; };
h.get = function (a, b) { if (!a)
    return b; a = this.K(a); return 0 < a.length ? String(a[0]) : b; };
function nc(a, b, c) { ed(a, b); 0 < c.length && (a.c = null, a.a.set(W(a, b), ra(c)), a.b += c.length); }
h.toString = function () { if (this.c)
    return this.c; if (!this.a)
    return ""; for (var a = [], b = this.a.L(), c = 0; c < b.length; c++) {
    var d = b[c], e = encodeURIComponent(String(d));
    d = this.K(d);
    for (var f = 0; f < d.length; f++) {
        var g = e;
        "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
        a.push(g);
    }
} return this.c = a.join("&"); };
function W(a, b) { b = String(b); a.f && (b = b.toLowerCase()); return b; }
function $c(a, b) { b && !a.f && (V(a), a.c = null, a.a.forEach(function (c, d) { var e = d.toLowerCase(); d != e && (ed(this, d), nc(this, e, c)); }, a)); a.f = b; }
var gd = /** @class */ (function () {
    function gd(a, b) {
        this.b = a;
        this.a = b;
    }
    return gd;
}());
function hd(a) { this.g = a || id; k.PerformanceNavigationTiming ? (a = k.performance.getEntriesByType("navigation"), a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(k.ia && k.ia.ya && k.ia.ya() && k.ia.ya().Lb); this.f = a ? this.g : 1; this.a = null; 1 < this.f && (this.a = new Set); this.b = null; this.c = []; }
var id = 10;
function jd(a) { return a.b ? !0 : a.a ? a.a.size >= a.f : !1; }
function Dc(a) { return a.b ? 1 : a.a ? a.a.size : 0; }
function zc(a, b) { return a.b ? a.b == b : a.a ? a.a.has(b) : !1; }
function Ec(a, b) { a.a ? a.a.add(b) : a.b = b; }
function Gc(a, b) { a.b && a.b == b ? a.b = null : a.a && a.a.has(b) && a.a.delete(b); }
hd.prototype.cancel = function () {
    var e_1, _a;
    this.c = kd(this);
    if (this.b)
        this.b.cancel(), this.b = null;
    else if (this.a && 0 !== this.a.size) {
        try {
            for (var _b = __values(this.a.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var a = _c.value;
                a.cancel();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.a.clear();
    }
};
function kd(a) {
    var e_2, _a;
    if (null != a.b)
        return a.c.concat(a.b.s);
    if (null != a.a && 0 !== a.a.size) {
        var b = a.c;
        try {
            for (var _b = __values(a.a.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var c = _c.value;
                b = b.concat(c.s);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return b;
    }
    return ra(a.c);
}
function ld() { }
ld.prototype.stringify = function (a) { return k.JSON.stringify(a, void 0); };
ld.prototype.parse = function (a) { return k.JSON.parse(a, void 0); };
function md() { this.a = new ld; }
function nd(a, b, c) { var d = c || ""; try {
    Lc(a, function (e, f) { var g = e; n(e) && (g = ub(e)); b.push(d + f + "=" + encodeURIComponent(g)); });
}
catch (e) {
    throw b.push(d + "type=" + encodeURIComponent("_badmap")), e;
} }
function od(a, b) { var c = new Ob; if (k.Image) {
    var d = new Image;
    d.onload = ja(pd, c, d, "TestLoadImage: loaded", !0, b);
    d.onerror = ja(pd, c, d, "TestLoadImage: error", !1, b);
    d.onabort = ja(pd, c, d, "TestLoadImage: abort", !1, b);
    d.ontimeout = ja(pd, c, d, "TestLoadImage: timeout", !1, b);
    k.setTimeout(function () { if (d.ontimeout)
        d.ontimeout(); }, 1E4);
    d.src = a;
}
else
    b(!1); }
function pd(a, b, c, d, e) { try {
    b.onload = null, b.onerror = null, b.onabort = null, b.ontimeout = null, e(d);
}
catch (f) { } }
var qd = k.JSON.parse;
function X(a) { D.call(this); this.headers = new S; this.H = a || null; this.b = !1; this.s = this.a = null; this.B = ""; this.h = 0; this.f = ""; this.g = this.A = this.l = this.u = !1; this.o = 0; this.m = null; this.I = rd; this.D = this.F = !1; }
r(X, D);
var rd = "", sd = /^https?$/i, td = ["POST", "PUT"];
h = X.prototype;
h.ba = function (a, b, c, d) {
    if (this.a)
        throw Error("[goog.net.XhrIo] Object is active with another request=" + this.B + "; newUri=" + a);
    b = b ? b.toUpperCase() : "GET";
    this.B = a;
    this.f = "";
    this.h = 0;
    this.u = !1;
    this.b = !0;
    this.a = new XMLHttpRequest;
    this.s = this.H ? ac(this.H) : ac(ec);
    this.a.onreadystatechange = p(this.za, this);
    try {
        this.A = !0, this.a.open(b, String(a), !0), this.A = !1;
    }
    catch (f) {
        ud(this, f);
        return;
    }
    a = c || "";
    var e = new S(this.headers);
    d && Lc(d, function (f, g) { e.set(g, f); });
    d = oa(e.L());
    c = k.FormData && a instanceof k.FormData;
    !(0 <=
        ma(td, b)) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    e.forEach(function (f, g) { this.a.setRequestHeader(g, f); }, this);
    this.I && (this.a.responseType = this.I);
    "withCredentials" in this.a && this.a.withCredentials !== this.F && (this.a.withCredentials = this.F);
    try {
        vd(this), 0 < this.o && ((this.D = wd(this.a)) ? (this.a.timeout = this.o, this.a.ontimeout = p(this.xa, this)) : this.m = Ib(this.xa, this.o, this)), this.l = !0, this.a.send(a), this.l = !1;
    }
    catch (f) {
        ud(this, f);
    }
};
function wd(a) { return x && Qa(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout; }
function pa(a) { return "content-type" == a.toLowerCase(); }
h.xa = function () { "undefined" != typeof goog && this.a && (this.f = "Timed out after " + this.o + "ms, aborting", this.h = 8, E(this, "timeout"), this.abort(8)); };
function ud(a, b) { a.b = !1; a.a && (a.g = !0, a.a.abort(), a.g = !1); a.f = b; a.h = 5; xd(a); yd(a); }
function xd(a) { a.u || (a.u = !0, E(a, "complete"), E(a, "error")); }
h.abort = function (a) { this.a && this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1, this.h = a || 7, E(this, "complete"), E(this, "abort"), yd(this)); };
h.G = function () { this.a && (this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1), yd(this, !0)); X.X.G.call(this); };
h.za = function () { this.j || (this.A || this.l || this.g ? zd(this) : this.Ua()); };
h.Ua = function () { zd(this); };
function zd(a) {
    if (a.b && "undefined" != typeof goog && (!a.s[1] || 4 != O(a) || 2 != a.W()))
        if (a.l && 4 == O(a))
            Ib(a.za, 0, a);
        else if (E(a, "readystatechange"), 4 == O(a)) {
            a.b = !1;
            try {
                {
                    var l = a.W();
                    a: switch (l) {
                        case 200:
                        case 201:
                        case 202:
                        case 204:
                        case 206:
                        case 304:
                        case 1223:
                            var b = !0;
                            break a;
                        default: b = !1;
                    }
                    var c;
                    if (!(c = b)) {
                        var d;
                        if (d = 0 === l) {
                            var e = String(a.B).match(Nc)[1] || null;
                            if (!e && k.self && k.self.location) {
                                var f = k.self.location.protocol;
                                e = f.substr(0, f.length - 1);
                            }
                            d = !sd.test(e ? e.toLowerCase() : "");
                        }
                        c = d;
                    }
                    var g = c;
                }
                if (g)
                    E(a, "complete"),
                        E(a, "success");
                else {
                    a.h = 6;
                    try {
                        var m = 2 < O(a) ? a.a.statusText : "";
                    }
                    catch (l) {
                        m = "";
                    }
                    a.f = m + " [" + a.W() + "]";
                    xd(a);
                }
            }
            finally {
                yd(a);
            }
        }
}
function yd(a, b) { if (a.a) {
    vd(a);
    var c = a.a, d = a.s[0] ? aa : null;
    a.a = null;
    a.s = null;
    b || E(a, "ready");
    try {
        c.onreadystatechange = d;
    }
    catch (e) { }
} }
function vd(a) { a.a && a.D && (a.a.ontimeout = null); a.m && (k.clearTimeout(a.m), a.m = null); }
function O(a) { return a.a ? a.a.readyState : 0; }
h.W = function () { try {
    return 2 < O(this) ? this.a.status : -1;
}
catch (a) {
    return -1;
} };
h.$ = function () { try {
    return this.a ? this.a.responseText : "";
}
catch (a) {
    return "";
} };
h.Pa = function (a) { if (this.a) {
    var b = this.a.responseText;
    a && 0 == b.indexOf(a) && (b = b.substring(a.length));
    return qd(b);
} };
h.ua = function () { return this.h; };
h.Qa = function () { return "string" === typeof this.f ? this.f : String(this.f); };
function Ad(a) { var b = ""; za(a, function (c, d) { b += d; b += ":"; b += c; b += "\r\n"; }); return b; }
function Bd(a, b, c) { a: {
    for (d in c) {
        var d = !1;
        break a;
    }
    d = !0;
} d || (c = Ad(c), "string" === typeof a ? (null != c && encodeURIComponent(String(c))) : R(a, b, c)); }
function Cd(a, b, c) { return c && c.internalChannelParams ? c.internalChannelParams[a] || b : b; }
function Dd(a) {
    this.pa = 0;
    this.g = [];
    this.c = new Ob;
    this.ga = this.la = this.B = this.fa = this.a = this.na = this.A = this.V = this.i = this.O = this.l = null;
    this.Oa = this.R = 0;
    this.La = Cd("failFast", !1, a);
    this.H = this.m = this.j = this.h = this.f = null;
    this.S = !0;
    this.I = this.oa = this.P = -1;
    this.T = this.o = this.u = 0;
    this.Ha = Cd("baseRetryDelayMs", 5E3, a);
    this.Ra = Cd("retryDelaySeedMs", 1E4, a);
    this.Ma = Cd("forwardChannelMaxRetries", 2, a);
    this.ma = Cd("forwardChannelRequestTimeoutMs", 2E4, a);
    this.Na = a && a.g || void 0;
    this.D = void 0;
    this.C = a && a.supportsCrossDomainXhr ||
        !1;
    this.J = "";
    this.b = new hd(a && a.concurrentRequestLimit);
    this.ka = new md;
    this.da = a && a.fastHandshake || !1;
    this.Ia = a && a.b || !1;
    a && a.f && (this.c.a = !1);
    a && a.forceLongPolling && (this.S = !1);
    this.U = !this.da && this.S && a && a.detectBufferingProxy || !1;
    this.ea = void 0;
    this.N = 0;
    this.F = !1;
    this.s = null;
    (this.Ka = a && a.c || !1) && this.c.info("Opt-in to enable Chrome Origin Trials.");
}
h = Dd.prototype;
h.ha = 8;
h.v = 1;
function Jc(a) { Ed(a); if (3 == a.v) {
    var b = a.R++, c = N(a.B);
    R(c, "SID", a.J);
    R(c, "RID", b);
    R(c, "TYPE", "terminate");
    Fd(a, c);
    b = new M(a, a.c, b, void 0);
    b.H = 2;
    b.i = kc(N(c));
    c = !1;
    k.navigator && k.navigator.sendBeacon && (c = k.navigator.sendBeacon(b.i.toString(), ""));
    !c && k.Image && ((new Image).src = b.i, c = !0);
    c || (b.a = oc(b.g, null), b.a.ba(b.i));
    b.u = q();
    mc(b);
} Gd(a); }
function Bc(a) { a.a && (wc(a), a.a.cancel(), a.a = null); }
function Ed(a) { Bc(a); a.j && (k.clearTimeout(a.j), a.j = null); Ac(a); a.b.cancel(); a.h && ("number" === typeof a.h && k.clearTimeout(a.h), a.h = null); }
function Hd(a, b) { a.g.push(new gd(a.Oa++, b)); 3 == a.v && Ic(a); }
function Ic(a) { jd(a.b) || a.h || (a.h = !0, Bb(a.Ba, a), a.u = 0); }
function Id(a, b) { if (Dc(a.b) >= a.b.f - (a.h ? 1 : 0))
    return !1; if (a.h)
    return a.g = b.s.concat(a.g), !0; if (1 == a.v || 2 == a.v || a.u >= (a.La ? 0 : a.Ma))
    return !1; a.h = K(p(a.Ba, a, b), Jd(a, a.u)); a.u++; return !0; }
h.Ba = function (a) {
    if (this.h)
        if (this.h = null, 1 == this.v) {
            if (!a) {
                this.R = Math.floor(1E5 * Math.random());
                a = this.R++;
                var b = new M(this, this.c, a, void 0), c = this.l;
                this.O && (c ? (c = Aa(c), Ca(c, this.O)) : c = this.O);
                null === this.i && (b.B = c);
                var d;
                if (this.da)
                    a: {
                        for (var e = d = 0; e < this.g.length; e++) {
                            b: {
                                var f = this.g[e];
                                if ("__data__" in f.a && (f = f.a.__data__, "string" === typeof f)) {
                                    f = f.length;
                                    break b;
                                }
                                f = void 0;
                            }
                            if (void 0 === f)
                                break;
                            d += f;
                            if (4096 < d) {
                                d = e;
                                break a;
                            }
                            if (4096 === d || e === this.g.length - 1) {
                                d = e + 1;
                                break a;
                            }
                        }
                        d = 1E3;
                    }
                else
                    d = 1E3;
                d = Kd(this, b, d);
                e = N(this.B);
                R(e, "RID", a);
                R(e, "CVER", 22);
                this.A && R(e, "X-HTTP-Session-Id", this.A);
                Fd(this, e);
                this.i && c && Bd(e, this.i, c);
                Ec(this.b, b);
                this.Ia && R(e, "TYPE", "init");
                this.da ? (R(e, "$req", d), R(e, "SID", "null"), b.U = !0, jc(b, e, null)) : jc(b, e, d);
                this.v = 2;
            }
        }
        else
            3 == this.v && (a ? Ld(this, a) : 0 == this.g.length || jd(this.b) || Ld(this));
};
function Ld(a, b) { var c; b ? c = b.f : c = a.R++; var d = N(a.B); R(d, "SID", a.J); R(d, "RID", c); R(d, "AID", a.P); Fd(a, d); a.i && a.l && Bd(d, a.i, a.l); c = new M(a, a.c, c, a.u + 1); null === a.i && (c.B = a.l); b && (a.g = b.s.concat(a.g)); b = Kd(a, c, 1E3); c.setTimeout(Math.round(.5 * a.ma) + Math.round(.5 * a.ma * Math.random())); Ec(a.b, c); jc(c, d, b); }
function Fd(a, b) { a.f && Lc({}, function (c, d) { R(b, d, c); }); }
function Kd(a, b, c) { c = Math.min(a.g.length, c); var d = a.f ? p(a.f.Ja, a.f, a) : null; a: for (var e = a.g, f = -1;;) {
    var g = ["count=" + c];
    -1 == f ? 0 < c ? (f = e[0].b, g.push("ofs=" + f)) : f = 0 : g.push("ofs=" + f);
    for (var m = !0, l = 0; l < c; l++) {
        var u = e[l].b, C = e[l].a;
        u -= f;
        if (0 > u)
            f = Math.max(0, e[l].b - 100), m = !1;
        else
            try {
                nd(C, g, "req" + u + "_");
            }
            catch (B) {
                d && d(C);
            }
    }
    if (m) {
        d = g.join("&");
        break a;
    }
} a = a.g.splice(0, c); b.s = a; return d; }
function Hc(a) { a.a || a.j || (a.T = 1, Bb(a.Aa, a), a.o = 0); }
function Cc(a) { if (a.a || a.j || 3 <= a.o)
    return !1; a.T++; a.j = K(p(a.Aa, a), Jd(a, a.o)); a.o++; return !0; }
h.Aa = function () { this.j = null; Md(this); if (this.U && !(this.F || null == this.a || 0 >= this.N)) {
    var a = 2 * this.N;
    this.c.info("BP detection timer enabled: " + a);
    this.s = K(p(this.Ta, this), a);
} };
h.Ta = function () { this.s && (this.s = null, this.c.info("BP detection timeout reached."), this.c.info("Buffering proxy detected and switch to long-polling!"), this.H = !1, this.F = !0, J(10), Bc(this), Md(this)); };
function wc(a) { null != a.s && (k.clearTimeout(a.s), a.s = null); }
function Md(a) { a.a = new M(a, a.c, "rpc", a.T); null === a.i && (a.a.B = a.l); a.a.O = 0; var b = N(a.la); R(b, "RID", "rpc"); R(b, "SID", a.J); R(b, "CI", a.H ? "0" : "1"); R(b, "AID", a.P); Fd(a, b); R(b, "TYPE", "xmlhttp"); a.i && a.l && Bd(b, a.i, a.l); a.D && a.a.setTimeout(a.D); var c = a.a; a = a.ga; c.H = 1; c.i = kc(N(b)); c.j = null; c.I = !0; lc(c, a); }
h.Sa = function () { null != this.m && (this.m = null, Bc(this), Cc(this), J(19)); };
function Ac(a) { null != a.m && (k.clearTimeout(a.m), a.m = null); }
function uc(a, b) { var c = null; if (a.a == b) {
    Ac(a);
    wc(a);
    a.a = null;
    var d = 2;
}
else if (zc(a.b, b))
    c = b.s, Gc(a.b, b), d = 1;
else
    return; a.I = b.N; if (0 != a.v)
    if (b.b)
        if (1 == d) {
            c = b.j ? b.j.length : 0;
            b = q() - b.u;
            var e = a.u;
            d = Ub();
            E(d, new Xb(d, c, b, e));
            Ic(a);
        }
        else
            Hc(a);
    else if (e = b.h, 3 == e || 0 == e && 0 < a.I || !(1 == d && Id(a, b) || 2 == d && Cc(a)))
        switch (c && 0 < c.length && (b = a.b, b.c = b.c.concat(c)), e) {
            case 1:
                Q(a, 5);
                break;
            case 4:
                Q(a, 10);
                break;
            case 3:
                Q(a, 6);
                break;
            default: Q(a, 2);
        } }
function Jd(a, b) { var c = a.Ha + Math.floor(Math.random() * a.Ra); a.f || (c *= 2); return c * b; }
function Q(a, b) { a.c.info("Error code " + b); if (2 == b) {
    var c = null;
    a.f && (c = null);
    var d = p(a.Ya, a);
    c || (c = new U("//www.google.com/images/cleardot.gif"), k.location && "http" == k.location.protocol || Pc(c, "https"), kc(c));
    od(c.toString(), d);
}
else
    J(2); a.v = 0; a.f && a.f.ra(b); Gd(a); Ed(a); }
h.Ya = function (a) { a ? (this.c.info("Successfully pinged google.com"), J(2)) : (this.c.info("Failed to ping google.com"), J(1)); };
function Gd(a) { a.v = 0; a.I = -1; if (a.f) {
    if (0 != kd(a.b).length || 0 != a.g.length)
        a.b.c.length = 0, ra(a.g), a.g.length = 0;
    a.f.qa();
} }
function Fc(a, b, c) { var d = bd(c); if ("" != d.c)
    b && Qc(d, b + "." + d.c), Rc(d, d.h);
else {
    var e = k.location;
    d = cd(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c);
} a.V && za(a.V, function (f, g) { R(d, g, f); }); b = a.A; c = a.na; b && c && R(d, b, c); R(d, "VER", a.ha); Fd(a, d); return d; }
function oc(a, b) { if (b && !a.C)
    throw Error("Can't create secondary domain capable XhrIo object."); b = new X(a.Na); b.F = a.C; return b; }
function Nd() { }
h = Nd.prototype;
h.ta = function () { };
h.sa = function () { };
h.ra = function () { };
h.qa = function () { };
h.Ja = function () { };
function Od() { if (x && !(10 <= Number(Ta)))
    throw Error("Environmental error: no available transport."); }
Od.prototype.a = function (a, b) { return new Y(a, b); };
function Y(a, b) {
    D.call(this);
    this.a = new Dd(b);
    this.o = a;
    this.b = b && b.messageUrlParams || null;
    a = b && b.messageHeaders || null;
    b && b.clientProtocolHeaderRequired && (a ? a["X-Client-Protocol"] = "webchannel" : a = { "X-Client-Protocol": "webchannel" });
    this.a.l = a;
    a = b && b.initMessageHeaders || null;
    b && b.messageContentType && (a ? a["X-WebChannel-Content-Type"] = b.messageContentType : a = { "X-WebChannel-Content-Type": b.messageContentType });
    b && b.a && (a ? a["X-WebChannel-Client-Profile"] = b.a : a = { "X-WebChannel-Client-Profile": b.a });
    this.a.O =
        a;
    (a = b && b.httpHeadersOverwriteParam) && !sa(a) && (this.a.i = a);
    this.m = b && b.supportsCrossDomainXhr || !1;
    this.l = b && b.sendRawJson || !1;
    (b = b && b.httpSessionIdParam) && !sa(b) && (this.a.A = b, a = this.b, null !== a && b in a && (a = this.b, b in a && delete a[b]));
    this.f = new Z(this);
}
r(Y, D);
Y.prototype.g = function () { this.a.f = this.f; this.m && (this.a.C = !0); var a = this.a, b = this.o, c = this.b || void 0; J(0); a.fa = b; a.V = c || {}; a.H = a.S; a.B = Fc(a, null, a.fa); Ic(a); };
Y.prototype.close = function () { Jc(this.a); };
Y.prototype.h = function (a) { if ("string" === typeof a) {
    var b = {};
    b.__data__ = a;
    Hd(this.a, b);
}
else
    this.l ? (b = {}, b.__data__ = ub(a), Hd(this.a, b)) : Hd(this.a, a); };
Y.prototype.G = function () { this.a.f = null; delete this.f; Jc(this.a); delete this.a; Y.X.G.call(this); };
function Pd(a) { cc.call(this); var b = a.__sm__; if (b) {
    a: {
        for (var c in b) {
            a = c;
            break a;
        }
        a = void 0;
    }
    (this.c = a) ? (a = this.c, this.data = null !== b && a in b ? b[a] : void 0) : this.data = b;
}
else
    this.data = a; }
r(Pd, cc);
function Qd() { dc.call(this); this.status = 1; }
r(Qd, dc);
function Z(a) { this.a = a; }
r(Z, Nd);
Z.prototype.ta = function () { E(this.a, "a"); };
Z.prototype.sa = function (a) { E(this.a, new Pd(a)); };
Z.prototype.ra = function (a) { E(this.a, new Qd(a)); };
Z.prototype.qa = function () { E(this.a, "b"); }; /*

 Copyright 2017 Google LLC

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
Od.prototype.createWebChannel = Od.prototype.a;
Y.prototype.send = Y.prototype.h;
Y.prototype.open = Y.prototype.g;
Y.prototype.close = Y.prototype.close;
Yb.NO_ERROR = 0;
Yb.TIMEOUT = 8;
Yb.HTTP_ERROR = 6;
Zb.COMPLETE = "complete";
bc.EventType = L;
L.OPEN = "a";
L.CLOSE = "b";
L.ERROR = "c";
L.MESSAGE = "d";
D.prototype.listen = D.prototype.va;
X.prototype.listenOnce = X.prototype.wa;
X.prototype.getLastError = X.prototype.Qa;
X.prototype.getLastErrorCode = X.prototype.ua;
X.prototype.getStatus = X.prototype.W;
X.prototype.getResponseJson = X.prototype.Pa;
X.prototype.getResponseText = X.prototype.$;
X.prototype.send = X.prototype.ba;
var createWebChannelTransport = function () { return new Od; };
var getStatEventTarget = function () { return Ub(); };
var ErrorCode = Yb;
var EventType = Zb;
var Event = H;
var Stat = { gb: 0, jb: 1, kb: 2, Db: 3, Ib: 4, Fb: 5, Gb: 6, Eb: 7, Cb: 8, Hb: 9, PROXY: 10, NOPROXY: 11, Ab: 12, wb: 13, xb: 14, vb: 15, yb: 16, zb: 17, bb: 18, ab: 19, cb: 20 };
var WebChannel = bc;
var XhrIo = X;

var esm = {
    createWebChannelTransport: createWebChannelTransport,
    getStatEventTarget: getStatEventTarget,
    ErrorCode: ErrorCode,
    EventType: EventType,
    Event: Event,
    Stat: Stat,
    WebChannel: WebChannel,
    XhrIo: XhrIo
};

/* harmony default export */ __webpack_exports__["default"] = (esm);

//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "xo5E":
/*!*************************************************************!*\
  !*** ./node_modules/@firebase/firestore/dist/esm5/index.js ***!
  \*************************************************************/
/*! exports provided: registerFirestore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerFirestore", function() { return L; });
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app */ "zIRd");
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/util */ "qOnz");
/* harmony import */ var _firebase_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/logger */ "q/0M");
/* harmony import */ var _firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/webchannel-wrapper */ "x7I3");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _prebuilt_9a1b1ae6_c205ad6b_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prebuilt-9a1b1ae6-c205ad6b.js */ "2chq");
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @firebase/component */ "/6Yf");














var I = {
    Firestore: _prebuilt_9a1b1ae6_c205ad6b_js__WEBPACK_IMPORTED_MODULE_5__["$"],
    GeoPoint: _prebuilt_9a1b1ae6_c205ad6b_js__WEBPACK_IMPORTED_MODULE_5__["v"],
    Timestamp: _prebuilt_9a1b1ae6_c205ad6b_js__WEBPACK_IMPORTED_MODULE_5__["k"],
    Blob: _prebuilt_9a1b1ae6_c205ad6b_js__WEBPACK_IMPORTED_MODULE_5__["x"],
    Transaction: _prebuilt_9a1b1ae6_c205ad6b_js__WEBPACK_IMPORTED_MODULE_5__["B"],
    WriteBatch: _prebuilt_9a1b1ae6_c205ad6b_js__WEBPACK_IMPORTED_MODULE_5__["q"],
    DocumentReference: _prebuilt_9a1b1ae6_c205ad6b_js__WEBPACK_IMPORTED_MODULE_5__["Q"],
    DocumentSnapshot: _prebuilt_9a1b1ae6_c205ad6b_js__WEBPACK_IMPORTED_MODULE_5__["G"],
    Query: _prebuilt_9a1b1ae6_c205ad6b_js__WEBPACK_IMPORTED_MODULE_5__["H"],
    QueryDocumentSnapshot: _prebuilt_9a1b1ae6_c205ad6b_js__WEBPACK_IMPORTED_MODULE_5__["z"],
    QuerySnapshot: _prebuilt_9a1b1ae6_c205ad6b_js__WEBPACK_IMPORTED_MODULE_5__["Y"],
    CollectionReference: _prebuilt_9a1b1ae6_c205ad6b_js__WEBPACK_IMPORTED_MODULE_5__["X"],
    FieldPath: _prebuilt_9a1b1ae6_c205ad6b_js__WEBPACK_IMPORTED_MODULE_5__["t"],
    FieldValue: _prebuilt_9a1b1ae6_c205ad6b_js__WEBPACK_IMPORTED_MODULE_5__["e"],
    setLogLevel: _prebuilt_9a1b1ae6_c205ad6b_js__WEBPACK_IMPORTED_MODULE_5__["L"],
    CACHE_SIZE_UNLIMITED: _prebuilt_9a1b1ae6_c205ad6b_js__WEBPACK_IMPORTED_MODULE_5__["_"]
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Registers the main Firestore build with the components framework.
 * Persistence can be enabled via `firebase.firestore().enablePersistence()`.
 */
function L(e) {
    !
    /**
 * Configures Firestore as part of the Firebase SDK by calling registerService.
 *
 * @param firebase - The FirebaseNamespace to register Firestore with
 * @param firestoreFactory - A factory function that returns a new Firestore
 *    instance.
 */
    function(e, r) {
        e.INTERNAL.registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_6__["Component"]("firestore", (function(e) {
            var t = e.getProvider("app").getImmediate();
            return r(t, e.getProvider("auth-internal"));
        }), "PUBLIC" /* PUBLIC */).setServiceProps(Object.assign({}, I)));
    }(e, (function(e, s) {
        return new _prebuilt_9a1b1ae6_c205ad6b_js__WEBPACK_IMPORTED_MODULE_5__["$"](e, new _prebuilt_9a1b1ae6_c205ad6b_js__WEBPACK_IMPORTED_MODULE_5__["m"](e, s), new _prebuilt_9a1b1ae6_c205ad6b_js__WEBPACK_IMPORTED_MODULE_5__["O"]);
    })), e.registerVersion("@firebase/firestore", "2.2.2");
}

L(_firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"]);


//# sourceMappingURL=index.js.map


/***/ })

}]);
//# sourceMappingURL=default~components-juegos-juegos-module~components-listados-listados-module.js.map