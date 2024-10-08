import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { BookingController } from './api/booking/booking.controller';
import { HotelController } from './api/hotel/hotel.controller';
import { ProfileController } from './api/profile/profile.controller';
import { UserController } from './api/user/user.controller';
import { BookingModule } from './domain/booking/booking.module';
import { HotelModule } from './domain/hotel/hotel.module';

@Module({
  imports: [AuthModule, BookingModule, HotelModule],
  controllers: [BookingController, HotelController, ProfileController, UserController],
  providers: [],
})
export class AppModule {}
