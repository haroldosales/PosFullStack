class UserRepository {

    constructor(collection) {
        this.collection = collection    
    }
    async findOneByemal() {
        const user = await this.collection.findOne({email});

        return user;    

    }
}

module.exports = UserRepository