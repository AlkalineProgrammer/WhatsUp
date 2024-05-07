import AsyncStorage from "@react-native-async-storage/async-storage";

const singleSetAsync = async (key,value) => {
    try {
        await AsyncStorage.setItem(key,value);
    } catch (error) {
        console.log("SingleSetAsync", error);
    }
};

const singleGetAsync = async (data) => {
    try {
        const savedItem = await AsyncStorage.getItem(data);
        // const currentItem = JSON.parse(savedItem);
        return savedItem
    } catch (error) {
        console.log("singleGetAsync", error);
    }
};

const singleMergeAsync = async (key,value) => {
    try {
        await AsyncStorage.mergeItem(key,value);
    } catch (error) {
        console.log("singleMergeAsync", error);
    }
};

const singleRemoveAsync = async (data) => {
    try {
        await AsyncStorage.removeItem(data);
    } catch (error) {
        console.log("singleRemoveAsync", error);
    }
};

const multiSetAsync = async (data) => {
    try {
        await AsyncStorage.multiSet(data);
    } catch (error) {
        console.log("multiSetAsync", error);
    }
};



const multiRemoveAsync = async (data) => {
    try {
        await AsyncStorage.multiRemove(data);
    } catch (error) {
        console.log("multiRemoveAsync", error);
    }
};

const multiGetAsync = async (data) => {
    try {
        const savedData = await AsyncStorage.multiGet(data);
        return savedData
    } catch (error) {
        console.log(error, "multigetError");
    }
};

const multiMergeAsync = async (data) => {
    try {
        await AsyncStorage.multiMerge(data);
    } catch (error) {
        console.log("multiMergeAsync", error);
    }
};

export {
    singleSetAsync,
    singleGetAsync,
    singleMergeAsync,
    singleRemoveAsync,
    multiSetAsync,
    multiRemoveAsync,
    multiGetAsync,
    multiMergeAsync
}
