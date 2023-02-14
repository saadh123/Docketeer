// graphReducer.ts
export const BUILD_AXIS = "BUILD_AXIS";
export const BUILD_MEMORY = "BUILD_MEMORY";
export const BUILD_CPU = "BUILD_CPU";
export const BUILD_WRITTEN_IO = "BkILD_WRITTEN_IO";
export const BUILD_READ_IO = "BUILD_READ_IO";
export const BUILD_RECEIVED_IO = "BUILD_RECEIVED_IO"; // received IO
export const BUILD_TRANSMITTED_IO = "BUILD_TRANSMITTED_IO"; // transmitted IO

// imageListReducer.ts
export const GET_IMAGES = "GET_IMAGES";
export const REFRESH_IMAGES = "REFRESH_IMAGES";
export const REMOVE_IMAGE = "REMOVE_IMAGE";

// containerListReducer.ts
export const REFRESH_HOST_DATA = "REFRESH_HOST_DATA";
export const ADD_RUNNING_CONTAINERS = "ADD_RUNNING_CONTAINERS";
export const STOP_RUNNING_CONTAINER = "STOP_RUNNING_CONTAINER";
export const RUN_STOPPED_CONTAINER = "RUN_STOPPED_CONTAINER";
export const REFRESH_RUNNING_CONTAINERS = "REFRESH_RUNNING_CONTAINERS";
export const REMOVE_CONTAINER = "REMOVE_CONTAINER";
export const ADD_STOPPED_CONTAINERS = "ADD_STOPPED_CONTAINERS";
export const REFRESH_STOPPED_CONTAINERS = "REFRESH_STOPPED_CONTAINERS";

// dockerComposeReducer.ts
export const GET_NETWORK_CONTAINERS = "GET_NETWORK_CONTAINERS";
export const GET_CONTAINER_STACKS = "GET_CONTAINER_STACKS";
export const COMPOSE_YML_FILES = "COMPOSE_YML_FILES";
export const COMPOSE_DOWN = "COMPOSE_DOWN";

// notificationReducer.ts
export const ADD_PHONE_NUMBER = "ADD_PHONE_NUMBER";
export const ADD_MEMORY_NOTIFICATION_SETTING =
  "ADD_MEMORY_NOTIFICATION_SETTING";
export const ADD_CPU_NOTIFICATION_SETTING = "ADD_CPU_NOTIFICATION_SETTING";
export const ADD_STOPPED_NOTIFICATION_SETTING =
  "ADD_STOPPED_NOTIFICATION_SETTING";
export const REMOVE_MEMORY_NOTIFICATION_SETTING =
  "REMOVE_MEMORY_NOTIFICATION_SETTING";
export const REMOVE_CPU_NOTIFICATION_SETTING =
  "REMOVE_CPU_NOTIFICATION_SETTING";
export const REMOVE_STOPPED_NOTIFICATION_SETTING =
  "REMOVE_STOPPED_NOTIFICATION_SETTING";

// sessionReducer.ts
export const UPDATE_SESSION = "UPDATE_SESSION";
export const UPDATE_USER = "UPDATE_USER";
export const LOGOUT_USER = "LOGOUT_USER";

// userListReducer.ts
export const UPDATE_USER_LIST = "UPDATE_USER_LIST";
export const UPDATE_USER_ROLE = "UPDATE_USER_ROLE";

// volumeHistoryReducer.ts
export const GET_VOLUME_LIST = "GET_VOLUME_LIST";
export const GET_VOLUME_CONTAINERS_LIST = "GET_VOLUME_CONTAINERS_LIST";

// processLogsReducer.ts
export const GET_CONTAINER_LOGS = "GET_CONTAINER_LOGS";

// Unused Action Types (That Have Defined Action Creators)
// export const RUN_IMAGE = "RUN_IMAGE";
// export const COMPOSE_UP = "COMPOSE_UP";
// export const NOTIFICATION_FREQUENCY = "NOTIFICATION_FREQUENCY";
// export const MONITORING_FREQUENCY = "MONITORING_FREQUENCY";

// Unused Action Types (That Do Not Have Defined Action Creators)
// export const UPDATE_NAME = "UPDATE_NAME";
// export const UPDATE_EMAIL = "UPDATE_EMAIL";
// export const UPDATE_PHONE = "UPDATE_PHONE";
// export const UPDATE_ROLE = "UPDATE_ROLE";
// export const UPDATE_CONTACT_PREF = "UPDATE_CONTACT_PREF";
// export const UPDATE_MEM_THRESHOLD = "UPDATE_MEM_THRESHOLD";
// export const UPDATE_CPU_THRESHOLD = "UPDATE_CPU_THRESHOLD";
// export const UPDATE_CONTAINER_STOPS = "UPDATE_CONTAINER_STOPS";
// export const UPDATE_ALL = "UPDATE_ALL";
