import config from "../conf/config.js";

import {Client,Account,ID} from "appwrite";

export class AuthService{
    client = new Client()
    account;

    constructor(){
        this.client
                .setEndpoint(config.appwriteUrl)
                .setProject(config.appwriteProjectId);
        this.account=new Account(this.client);
    }

    async createAccount({email,password,name}){
        try {
            const userAccount=await this.account.create(ID.unique(),email,password,name);
            if(userAccount){
                return this.login({email,password});
            }else{
                return userAccount;
            }
        } catch (error) {
            throw error
        }
    }

    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password)
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            const userData=await this.account.get();
            console.log(userData);
            return userData;
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }
    }

    async logout(){
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            throw error
        }
    }
}

export const authService = new AuthService()