// import conf from "../conf/conf"
import { Client, Databases, Query, ID } from "appwrite";
import calculateOneMonthAgo from "./lib";

const conf = {
  appwriteUrl: "https://cloud.appwrite.io/v1",
  appwriteProjectId: "65ee8d21c97a5316078a",
  appwriteDatabaseId: "65ee929970240f2702c6",
  appwriteCollectionId: "65eebb184f2885b3d495",
};

export class Service {
  client = new Client();
  databases;
  // bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client);
    // this.bucket = new Storage(this.client)
  }

  async getDataHome() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    const dateQuery = [
      Query.equal(
        "date",
        `${year}-${month.toString().length < 2 ? "0" : ""}${month}-${day}`
      ),
      Query.equal("status", false),
      Query.orderDesc("date"),
    ];

    // queries.push(dateQuery);
    console.log(`${year}-${month}-${day}`);
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        dateQuery
      );
    } catch (error) {
      console.log("Appwrite service :: getPosts() :: ", error);
      return false;
    }
  }

  async getDataDashboard(
    queries = [Query.equal("status", false), Query.orderDesc("date")]
  ) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("Appwrite service :: getPosts() :: ", error);
      return false;
    }
  }

  async getDataBetDate(
    startDate,
    endDate,
    queries = [
      Query.greaterThanEqual("date", startDate),
      Query.lessThanEqual("date", endDate),
      Query.orderDesc("date"),
    ]
  ) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("Appwrite service :: getPosts() :: ", error);
      return false;
    }
  }

  async getDataHistroy(
    queries = [Query.equal("status", true), Query.orderDesc("date")]
  ) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("Appwrite service :: getPosts() :: ", error);
      return false;
    }
  }

  async createPost({
    description,
    amount,
    date,
    quantity,
    cgst,
    sgst,
    igst,
    total,
  }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        ID.unique(),
        {
          description,
          amount,
          date,
          quantity,
          CGST: cgst,
          SGST: sgst,
          IGST: igst,
          total,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: createPost() :: ", error);
      return false;
    }
  }

  async updatePost(
    id,
    { description, amount, date, quantity, cgst, sgst, igst, total }
  ) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        id,
        {
          description,
          amount,
          date,
          quantity,
          cgst,
          sgst,
          igst,
          total,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: updateDocument() :: ", error);
      return false;
    }
  }

  async updateStatus(id, newStatus) {
    try {
      await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        id,
        {
          status: newStatus,
        }
      );
      return true;
    } catch (error) {
      console.log("Appwrite service :: deleteDocument() :: ", error);
      return false;
    }
  }

  async deleteOldDocuments(id) {
   
    try {

          this.databases.deleteDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            id
          )
      
        console.log("Successfully deleted", response.length, "old documents");
    
      
    } catch (error) {
      console.error("Error deleting old documents:", error);
    }
  }

  // storage service

  // async uploadFile(file) {
  //     try {
  //         return await this.bucket.createFile(
  //             conf.appwriteBucketId,
  //             ID.unique(),
  //             file
  //         )
  //     } catch (error) {
  //         console.log("Appwrite service :: uploadFile() :: ", error);
  //         return false
  //     }
  // }

  // async deleteFile(fileId) {
  //     try {
  //         return await this.bucket.deleteFile(
  //             conf.appwriteBucketId,
  //             fileId

  //         )
  //     } catch (error) {
  //         console.log("Appwrite service :: deleteFile() :: ", error);
  //         return false
  //     }
  // }

  // getFilePreview(fileId) {
  //     return this.bucket.getFilePreview(
  //         conf.appwriteBucketId,
  //         fileId
  //     ).href
  // }
}

const service = new Service();
export default service;
