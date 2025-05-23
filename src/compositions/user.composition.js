const UserRepositoryImpl = require("../infrastructure/repositories/user.repository.impl");

const createUserUsecase = require("../domain/usecases/user.usecase");

const userRepository = new UserRepositoryImpl();

const userUsecases = createUserUsecase(userRepository);

module.exports = userUsecases;
