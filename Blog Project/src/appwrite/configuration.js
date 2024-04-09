import config from "../conf/config.js";

import {Client,ID,Databases,Storage,Query} from "appwrite";

export class Service{
    client=new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.databases=new Databases(this.client);
        this.bucket=new Storage(this.client);
    }

    async createPost({title,slug,Content,image,status,userId,}){
        try {
            return await this.databases.createDocument(config.appwriteDatabaseId,config.appwriteCollectionId,slug,{
                title,
                Content,
                image,
                status,
                userId,
            })
        } catch (error) {
            throw error;
        }
    }

    async updatePost(slug,{title,Content,image,status}){
        try {
            return await this.databases.updateDocument(config.appwriteDatabaseId,config.appwriteCollectionId,slug,{
                title,
                Content,
                image,
                status
            })
        } catch (error) {
            throw error;
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(config.appwriteDatabaseId,config.appwriteCollectionId,slug);
            return true;
        } catch (error) {
            throw error;
        }
    }

    async getPost(slug){
        try {
           return await this.databases.getDocument(config.appwriteDatabaseId,config.appwriteCollectionId,slug)
        } catch (error) {
            throw error;
        }
    }

    async getAllPost(queries=[Query.equal("status", "active")]){
        try {
            console.log("Query:", queries); // Log the constructed query
           return await this.databases.listDocuments(config.appwriteDatabaseId,config.appwriteCollectionId,queries)
        } catch (error) {
            console.error("Error in getAllPost:", error.message);
            throw error; // Rethrowing is fine, but now you've also logged it.
        }
        
    }

    async uploadFile(file){
        try {
            return await this.bucket.createFile(config.appwriteBucketId,ID.unique(),file)
         } catch (error) {
             throw error;
         }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(config.appwriteBucketId,fileId)
            return true;
        } catch (error) {
             throw error;
        }
    }

    async filePreview(fileId){
        console.log(fileId);
       try {
        return this.bucket.getFilePreview(config.appwriteBucketId,fileId);
       } catch (error) {
            throw error;
       }
    }
}

export const service=new Service();