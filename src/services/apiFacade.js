import fetch from 'node-fetch';
import { LOCAL_API_BASE_URL } from "./globalVariables.js";
import * as GlobalVars from './globalVariables.js';
console.log(GlobalVars);

const login = async (name, password) => {
    const userInfo = { name, password };
    try {
        const result = await fetch(`${LOCAL_API_BASE_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
        });

        if (!result.ok) {
            throw new Error('Network response was not ok ' + result.status);
        }

        const data = await result.json();
        console.log(data);
    } catch (e) {
        console.error('Failed to fetch: ', e);
    }
};

login("Harry", "1234");
