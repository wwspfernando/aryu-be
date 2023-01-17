import { UsersRepositoryService } from './../../db/repositories/users.repository/users.repository.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import UsersSchema from 'src/db/schemas/users.schema';
import { UserController } from './controllers/users/users.controller';

import { UsersService } from './services/users/users.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Users', schema: UsersSchema }]),
  ],
  controllers: [UserController],
  providers: [UsersService, UsersRepositoryService],
})
export class UsersModule {}
