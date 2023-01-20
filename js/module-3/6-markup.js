const makeProfileMarkup = function ({
    avatar = 'asd',
    name,
    tag,
    location = 'Planet Earth',
    stats: { followers, views, likes },
    
}) {
    return `<div
    <img src="${avatar}" alt+"user">
    <p>${name}<span>@${tag}</span></p>
    <p>Location: {location}</p>
    <ul>
    <li>Followers: ${followers}</li>
    <li>Views: ${views}</li>
    <li>Likes: ${likes}</li>
    </ul>
    </div>
    `
};

const markup = makeProfileMarkup(profile);

