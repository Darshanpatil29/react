import config from "../conf/config.js";

import {Client,Account,ID,Databases,Storage,Query} from "appwrite";

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

    async createPost({title,slug,content,image,status,userId,}){
        try {
            return await this.databases.createDocument(config.appwriteDatabaseId,config.appwriteCollectionId,slug,{
                title,
                content,
                image,
                status,
                userId,
            })
        } catch (error) {
            throw error;
        }
    }

    async updatePost(slug,{title,content,image,status}){
        try {
            return await this.databases.updateDocument(config.appwriteDatabaseId,config.appwriteCollectionId,slug,{
                title,
                content,
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

    async getAllPost(queries=[Query.equal("status","active")]){
        try {
           return await this.databases.listDocuments(config.appwriteDatabaseId,config.appwriteCollectionId,queries)
        } catch (error) {
            throw error;
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
       try {
        return this.bucket.getFilePreview(config.appwriteBucketId,fileId);
       } catch (error) {
            throw error;
       }
    }
}

export const service=new Service();