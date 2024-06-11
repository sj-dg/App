import Onyx from 'react-native-onyx';
import Log from '@libs/Log';
import type {NetworkStatus} from '@libs/NetworkConnection';
import ONYXKEYS from '@src/ONYXKEYS';

<<<<<<< HEAD
function setIsBackendReachable(isBackendReachable: boolean, reason: string) {
    if (isBackendReachable) {
        Log.info(`[Network] Backend is reachable because: ${reason}`);
    } else {
        Log.info(`[Network] Backend is not reachable because: ${reason}`);
    }
    Onyx.merge(ONYXKEYS.NETWORK, {isBackendReachable});
}

function setIsOffline(isOffline: boolean, reason = '') {
    if (reason) {
        let textToLog = '[Network] Client is';
        textToLog += isOffline ? ' entering offline mode' : ' back online';
        textToLog += ` because: ${reason}`;
        Log.info(textToLog);
    }
=======
function setIsOffline(isOffline: boolean) {
>>>>>>> parent of 783c3deef1 (Merge pull request #38377 from tienifr/fix/37565)
    Onyx.merge(ONYXKEYS.NETWORK, {isOffline});
}

function setNetWorkStatus(status: NetworkStatus) {
    Onyx.merge(ONYXKEYS.NETWORK, {networkStatus: status});
}

function setTimeSkew(skew: number) {
    Onyx.merge(ONYXKEYS.NETWORK, {timeSkew: skew});
}

function setShouldForceOffline(shouldForceOffline: boolean) {
    Onyx.merge(ONYXKEYS.NETWORK, {shouldForceOffline});
}

/**
 * Test tool that will fail all network requests when enabled
 */
function setShouldFailAllRequests(shouldFailAllRequests: boolean) {
    Onyx.merge(ONYXKEYS.NETWORK, {shouldFailAllRequests});
}

export {setIsOffline, setShouldForceOffline, setShouldFailAllRequests, setTimeSkew, setNetWorkStatus};
