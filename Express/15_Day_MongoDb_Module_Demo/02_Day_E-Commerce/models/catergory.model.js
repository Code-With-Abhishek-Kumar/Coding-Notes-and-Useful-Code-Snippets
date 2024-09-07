import { Schema  , model} from "mongoose";



const categorySchema = new Schema({
        cName: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
      },
      cDescription: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
      },
      cPhoto: {
        type: String,
       
      },
    },
    { timestamps: true }
  );

  // timestamps give two field CreatedAtr , UpdatedAt

  let Category = model('category' , categorySchema)

  export default Category;