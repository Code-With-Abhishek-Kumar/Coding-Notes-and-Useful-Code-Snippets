import  { Schema , model} from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
        type: String,
        required: true,
      
      },
    photo: {
      type: String,
      default:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F439%2F863%2Foriginal%2Fvector-users-icon.jpg&f=1&nofb=1&ipt=b7b573e6d4084800018e1d5e18483053116aab4f0b0f16c6376187026f3ce5ab&ipo=images",
    },
  },
  { timestamps: true }
);

// timestamps give two field CreatedAtr , UpdatedAt
let User = model('user' , userSchema)


export default User;