import moment from 'moment'
class Request{
constructor(id,shippingType,from,to,state,date){
this.id=id;
this.shippingType=shippingType;
this.from=from;
this.to=to;
this.state=state;
this.date=date;
}

get readableDate() {
   
    return moment(this.date).format('MMMM Do YYYY');
  }
}
export default Request