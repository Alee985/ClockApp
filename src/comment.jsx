
  const comment={
    date:new Date(),
    author:{
      avatarUrl:'https://placekitten.com/g/64/64',
        name:"Ali",

    },
    text:"I am Muhammad Ali",

};
export default function Comment(props){

    return (
        <div className="Comment">
            <div className="UserInfo">
                <img className="Image"
                src={comment.author.avatarUrl}
                alt={comment.author.name}
                />
            </div>
            <div className="text">
                {comment.text}
            </div>
            <div className="Date">
            {formatDate(comment.date)}
            </div>
        </div>

);

} 
function formatDate(date) {
    return date.toLocaleDateString();
  }
  