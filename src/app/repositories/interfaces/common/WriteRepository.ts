import mongoose = require("mongoose");

interface IWriteRepository<T> {
    create: (item: T, callback: (error: any, result: any) => void) => void;
    delete: (_id: string, callback: (error: any, result: any) => void) => void;
    update: (_id: mongoose.Types.ObjectId, item: T, callback: (error: any, result: any) => void) => void;
}

export = IWriteRepository;