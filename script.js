
// EMOJI

const dramaReactions = {};

const addReaction = (dramaNumber, emoji) => {

  if (!dramaReactions[dramaNumber]) {
    dramaReactions[dramaNumber] = {};
  }

  if (!dramaReactions[dramaNumber][emoji]) {
    dramaReactions[dramaNumber][emoji] = 1;
  } else {
    dramaReactions[dramaNumber][emoji]++;
  }

  const emojiCountSpan = document.querySelector(`#reaction-${dramaNumber} [data-emoji="${emoji}"]`);
  
  emojiCountSpan.textContent = dramaReactions[dramaNumber][emoji];
}



// COMMENT

const addComment = (name, comment) => {
  const listItem = document.createElement('li');
  listItem.classList.add('list-group-item');
  
  const strongElement = document.createElement('strong');
  strongElement.textContent = name;
  
  const pElement = document.createElement('p');
  pElement.textContent = comment;
  
  const buttonElement = document.createElement('button');
  
  listItem.appendChild(strongElement);
  listItem.appendChild(pElement);
  listItem.appendChild(buttonElement);
  
  document.getElementById('commentList').appendChild(listItem);
}

document.getElementById('commentForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const comment = document.getElementById('comment').value;
  addComment(name, comment);
  this.reset();
});
        
        



