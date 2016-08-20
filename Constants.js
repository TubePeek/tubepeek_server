
var constants = {};

constants.AppName = "TubePeek";

// This is necessary so that I don't use magic strings everywhere
constants.CONN_DATA_KEYS = {
    SOCKET_ID : 'socketId',
    GOOGLE_USER_ID : 'googleUserId',
    MY_ROOM: 'myRoom',
    CURRENT_VIDEO: 'videoData'
};


constants.PossibleActions = {
    pleaseIdentifyYourself : 'pleaseIdentifyYourself',       // The server will send this to the client
    takeMySocialIdentity : 'takeMySocialIdentity',   // The client first sends this to the server
    takeVideosBeingWatched : 'takeVideosBeingWatched',       // The server then sends this to the client

    userChangedOnlineStatus : 'userChangedOnlineStatus',
    takeFriendOnlineStatus : 'takeFriendOnlineStatus',

    changedVideo : 'changedVideo',
    takeFriendVideoChange : 'takeFriendVideoChange',

    acknowledge : "acknowledge"
};

constants.SERVER_PORT = 80;
constants.API_VERSION_KEY = "version";
constants.API_VERSION_VALUE = "/api/actions/v1";

module.exports = constants;
