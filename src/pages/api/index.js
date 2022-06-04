import dbConnect from "lib/dbConnect"
import Mail from "models/Mail";



export default async function handler(req, res) {
  await dbConnect();

  const { method } = req;
  switch( method ){
    case 'POST':
      try{
        const mail = new Mail(req.body);
        await mail.save();
        
        return res.json({ success: true, mail });
      }
      catch(e){
        return res.status(400).json({ success: false, error: e })
      }
    default:
      return res.status(500).json({ 
        success: false, 
        error: 'falla del servidor'
      })
  }
}
