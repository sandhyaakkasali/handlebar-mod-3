exports.home=function(req,res){
  res.render('home',{title:'Mycity Hotels',
                    headline:'Best hotels in chennai'
                    });
                  }


exports.hotel=function(req,res){
    var hotelName=req.params.hotel;
    var title,headline;
    var imageArray=[1,2,3,4];

    if(hotelName==='abq'){
       title="Absolute BBQ";
       headline="ABQ is India's First WISH GRILL Restaurant.";
    }
    else if(hotelName==='a2b'){
       title="A2B";
       headline="A2B always tops my list when it comes to veg restaurants";
    }

    res.render('hotel',{
      title:title,
      headline:headline,
      hotel:hotelName,
      imageArray:imageArray});
  }
