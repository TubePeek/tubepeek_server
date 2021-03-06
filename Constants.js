
var constants = {};

constants.AppName = "TubePeek";

// Nginx directs traffic on port 80 to port 3700
// On ubuntu VPS use command:
// sudo emacs /etc/nginx/sites-enabled/default
// to view configuration
constants.SERVER_PORT = 3700;
constants.API_VERSION_KEY = "version";
constants.API_VERSION_VALUE = "/api/actions/v1";

//constants.MONGO_SERVER_PORT = 27017;
constants.MONGO_DB_NAME = "tubepeekmongodb";

// Connection data keys: This is necessary so that I don't use magic strings everywhere
constants.CONN_DATA_KEYS = {
    SOCKET_ID : 'socketId',
    GOOGLE_USER_ID : 'googleUserId',
    MY_ROOM: 'myRoom',
    CURRENT_VIDEO: 'videoData'
};

constants.PossibleActions = {
    pleaseIdentifyYourself : 'pleaseIdentifyYourself',          // The server will send this to the client
    takeMySocialIdentity : 'takeMySocialIdentity',              // The client then sends this to the server
    takeVideosBeingWatched : 'takeVideosBeingWatched',          // The server then sends this to the client

    newFriendInstalledTubePeek : 'newFriendInstalledTubePeek',  // The server should send this to a user when friend installs TubePeek
    friendUninstalledTubePeek : 'friendUninstalledTubePeek',    // The server should send this to a user when friend uninstalls TubePeek

    userChangedOnlineStatus : 'userChangedOnlineStatus',        // The client sends this to the server when user changes online state
    takeFriendOnlineStatus : 'takeFriendOnlineStatus',          // The server sends this to a user when friend changes online state

    changedVideo : 'changedVideo',                              // The client sends this to the server when user changes youtube video
    takeFriendVideoChange : 'takeFriendVideoChange',            // The server sends this to a user when friend changes youtube video

    acknowledge : "acknowledge"
};

module.exports = constants;
