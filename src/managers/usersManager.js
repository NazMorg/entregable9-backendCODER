import { usersModel } from '../db/models/users.model.js';
import BaseManager from './baseManager.js';


class UsersManager extends BaseManager {
    constructor() {
        super(usersModel, "cart");
    }
    async findByEmail(email) {
        const response = await usersModel.findOne({ email: email }).populate("cart").lean();
        return response;
    }
}

export const usersManager = new UsersManager();