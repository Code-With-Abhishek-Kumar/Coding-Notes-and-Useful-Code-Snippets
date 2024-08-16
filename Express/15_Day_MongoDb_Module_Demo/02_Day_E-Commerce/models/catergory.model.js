import { Schema  , model} from "mongoose";



const categorySchema = new Schema({
        name: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
      },
      description: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
      },
      photo: {
        type: String,
       
      },
    },
    { timestamps: true }
  );

  // timestamps give two field CreatedAtr , UpdatedAt

  let Category = model('category' , categorySchema)

  export default Category;