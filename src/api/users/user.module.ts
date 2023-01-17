import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import UsersSchema from 'src/db/schemas/users.schema';
import { UserController } from './controllers/user/user.controller';
import { UsersService } from './services/users/users.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Users', schema: UsersSchema }]),
  ],
  controllers: [UserController],
  providers: [UsersService],
})
export class UsersModule {}
