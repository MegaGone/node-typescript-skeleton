import { Request, Response } from "express";

export const getUsers = async (_req: Request, res: Response) => {

    return res.status(200).json({
        Ok: true,
        message: "GET USERS"
    });

};

export const getUser = async (_req: Request, res: Response) => {

    return res.status(200).json({
        Ok: true,
        message: "GET USER"
    });

};

export const createUser = async (_req: Request, res: Response) => {

    return res.status(200).json({
        Ok: true,
        message: "CREATE USER"
    });

};

export const updateUser = async (_req: Request, res: Response) => {

    return res.status(200).json({
        Ok: true,
        message: "UPDATE USER"
    });

};

export const deleteUser = async (_req: Request, res: Response) => {

    return res.status(200).json({
        Ok: true,
        message: "DELETE USER"
    });

};