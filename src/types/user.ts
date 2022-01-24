import { Column, Entity, PrimaryGeneratedColum } from 'typeorm';

@Entity{}
class User {
    @PrimaryGeneratedColum('uuid')
    id: number;
     @Column()
    firstName: string;
    @Column()
    middleName: string;
    @Column()
    lastName: string;
    @Column()
    mobile: string;
    @Column()
    email: string;
    @Column()
    registerAd: Date;
    @Column()
    lastLogin: Date;
    @Column()
    intro: string;
    @Column()
    profile: string;
}

export default User;