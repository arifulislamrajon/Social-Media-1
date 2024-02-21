const newPostHideButton = document.querySelector('.new_post_title i');
const newPostImg = document.querySelector('.new_post_img img');
const dyProfile = document.querySelector('.dy_pr_im_src'); 
const userName = document.querySelector('.user_name'); 
const searchInput = document.querySelector('.search_box input');
const searchBox = document.querySelector('.search_section');

// window all activity
window.addEventListener('click', (event) => {
    if (!newPost.contains(event.target) && event.target !== createPostInput) {
        newPost.style.display = "none";
        blur.style.display = 'none'
    }

    if (!event.target.matches('.m_n') && !event.target.closest('.show_modal')) {
        showModal.forEach((element) => {
            element.classList.remove('active_messenger')
        });
    }

    if(!event.target.matches('.m_n') && !event.target.closest('.show_modal')){
        m_n.forEach((element) => {
            element.classList.remove('active')
        });
    }

    if (!searchBox.contains(event.target) && event.target !== searchInput) {
        searchBox.style.display = "none";
    }
})

// common img change function
const setUpImageChange = (input, callback) => {
    input.addEventListener('change', () => {
        const reader = new FileReader();
        reader.readAsDataURL(input.files[0]);
        reader.onload = function (e) {
            callback(e.target.result);
        };
    });
};

const updateNewStoryUserProfile = (imageSrc, userProfileElement) => {
    userProfileElement.src = imageSrc;
};

// common remove tab
const removeTab = (remove, currentIndex) => {
    remove.forEach((removeActiveTab, index) => {
        if(index !== currentIndex){
            removeActiveTab.classList.remove('active')
        }
    });
}

// nav middle tab active
const friendsTab = document.querySelectorAll('.friend_left_tab');
const messageTab = document.querySelectorAll('.message_tab span');

const activeFunction = (active, currentActiveTab) => {
    active.forEach((activetab, index) => {
        activetab.addEventListener('click', () => {
            removeTab(currentActiveTab, index);
            activetab.classList.add('active');
        })
    });
}

activeFunction(friendsTab, friendsTab);
activeFunction(messageTab, messageTab);

// nav right tab toggle
const activeRightTab = document.querySelectorAll('.nav_right i');

const activeFunctionFroEach = (active, currentActiveTab) => {
    active.forEach((activetab, index) => {
        activetab.addEventListener('click', () => {
            removeTab(currentActiveTab, index);
            activetab.classList.toggle('active');
        })
    });
}

activeFunctionFroEach(activeRightTab, activeRightTab);

// messenger notificaton show modal
const m_n = document.querySelectorAll('.m_n');
const showModal =  document.querySelectorAll('.show_modal');

m_n.forEach((clickIcon, index) => {
    clickIcon.addEventListener('click', () => {
        showModalFunction(index)
    })
})

const showModalFunction = (index) => {
    showModal.forEach((showmodal, i) => {
        if(i === index){
            showmodal.classList.toggle('active_messenger');
        }else{
            showmodal.classList.remove('active_messenger')
        }
    })
}

// like mouseover and click
const like = document.querySelectorAll('.like');
const allReact = document.querySelectorAll('.allreact');

like.forEach((singleLike, index) => {
    let isLikeHovered = false;
    let isAllReactHovered = false;

    singleLike.addEventListener('mouseenter', () => {
        isLikeHovered = true;
        updateDisplay(index)
    });

    singleLike.addEventListener('mouseleave', () => {
        isLikeHovered = false;
        updateDisplay(index)
    });

    allReact[index].addEventListener('mouseenter', () => {
        isAllReactHovered = true;
        updateDisplay(index)
    })

    allReact[index].addEventListener('mouseleave', () => {
        isAllReactHovered = false;
        updateDisplay(index)
    })

    singleLike.addEventListener('click', () => {
        allReact[index].style.display = 'none'
        like[index].classList.toggle('active')
    })

    function updateDisplay(idx) {
        setTimeout(() => {
            if (isLikeHovered || isAllReactHovered) {
                allReact[idx].style.display = 'block';
            } else {
                allReact[idx].style.display = 'none';
            }
        }, 800);  
    }
});

// post delete
const postClose = document.querySelectorAll('.post_close');
const deletePost = document.querySelectorAll('.delete_post');

postClose.forEach((postCloseButton, index) => {
    postCloseButton.addEventListener('click', () => {
        const currentDeletePost = deletePost[index];
        currentDeletePost.remove()
    });
});

/*---------------------- theme change ----------------------*/
const themeButton = document.querySelector('.theme');

const darkTheme = 'dark_theme'
const iconTheme = 'fa-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-regular fa-moon' : 'fa-solid fa-sun'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'fa-regular fa-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)

  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
});

// single click function add class list
const clickAddFunction = (click, callback) => {
    click.addEventListener('click', () => {
        callback()
    })
}

// new post visible
const createPostInput = document.querySelector('.create_post_input');
const newPost = document.querySelector('.new_post');
const blur = document.querySelector('.blur');

const createPostShow = () => {
    newPost.style.display = 'block';
    blur.style.display = 'block';
}

clickAddFunction(createPostInput, createPostShow);

// new post hide
const newPostHide = () => {
    blur.style.display = 'none'
    newPost.style.display = 'none'
}
clickAddFunction(newPostHideButton, newPostHide);

// new post boost button active
const boost = document.querySelector('.boost');
const boostToggle = document.querySelector('.boost span');

const boostToggleButton = () => {
    boostToggle.classList.toggle('active');
}
clickAddFunction(boost, boostToggleButton);

// new post img show
const newPostPhotosIcon = document.querySelector('.new_post_photos_icon');
const newPostImgMain = document.querySelector('.new_post_img');

const newPostShowImg = () => {
    newPostImgMain.style.display = 'block'
}

clickAddFunction(newPostPhotosIcon, newPostShowImg)

// new post img remove
const newPostImgCloseButton = document.querySelector('.new_post_img_close');

const newPostCloseImg = () => {
    newPostImgMain.style.display = 'none'
    newPostImg.src = ''
}

clickAddFunction(newPostImgCloseButton, newPostCloseImg)

// new post button enable
const newPostButton = document.querySelector('.new_post_body button');
const newPostTextarea = document.querySelector('.new_post_body textarea');

newPostTextarea.addEventListener('input', () => {
    const inputValue = newPostTextarea.value.trim();
    
    newPostTextarea.style.fontSize = inputValue.length >= 84 ? '1rem' : '1.3rem'
    newPostButton.style.backgroundColor = inputValue ? 'rgb(8, 102, 255)' : '';
    newPostButton.style.color = inputValue ? 'rgb(255, 255, 255)' : '';
    
        newPostButton.removeAttribute('disabled');
        newPostButton.disabled = !newPostTextarea.value.trim();
})

// new post img
const newPostInput = document.querySelector('#newPostInput');

const newPostImage = (imageSrc, newPostImg) => {
    newPostImg.src = imageSrc;

    if(newPostInput.files.length >= 0){
        newPostButton.removeAttribute('disabled');
    }else{
        newPostButton.setAttribute('disabled');
    }
}

setUpImageChange(newPostInput, (imageSrc) => newPostImage(imageSrc, newPostImg))

// new post img drag and drop
newPostImgMain.addEventListener('dragover', (event) => {
    event.preventDefault();
});

newPostImgMain.addEventListener('drop', (event) => {
    event.preventDefault();

    const files = event.dataTransfer.files;

    if (files.length > 0) {
        const reader = new FileReader();

        reader.onload = function (e) {
            newPostImg.src = e.target.result;
        };

        reader.readAsDataURL(files[0]);
    }
});

// new post button click and new post added
const newPostButtonActivity = () => {
    function createPost() {
        const allPost = document.querySelector('#allPost');
        
        const post = document.createElement('div');
        post.className = 'post delete_post ami';

    const postContent = `
        <div class="flex_between post_top">
            <div class="flex_align post_logo_name gap">
                <a href="#"><img class="user_logo new_post_profile_img" src=${dyProfile.src} alt="post user img"></a>
                <div>
                    <h5 class="post_user_name"><a href="#">${userName.textContent}</a></h5>
                    <span class="post_date flex_align">
                        <p class="date_visible">just Now .</p>
                        <i class="fa fa-earth"></i>
                    </span>
                </div>
            </div>
            <div class="flex_align post_top_left">
                <p class="three_doted"><span>...</span></p>
                <p class="flex_center"><i class="fa fa-times post_close flex_center"></i></p>
            </div>
        </div>
        <p class="post_caption"></p>
        <a href=""><img src="images/user.jpg" alt="" class="post_img"></a>
        <div class="post_bottom">
            <div class="react_top flex_between">
                <div class="react flex_align">
                    <!--<img src="images/like.png" alt="">
                    <img src="images/love.png" alt="">
                    <img src="images/care.png" alt="">
                    <p>1.9k</p>-->
                </div>
                <div class="comment_share">
                    <a href="#">0 comments</a>
                    <a href="#">0 shares</a>
                </div>
            </div>
            <hr>
            <div class="react_bottom flex_between gap">
                <span class="flex_align like">
                <img src="images/like-2.png" alt="">                                
                <i class="fa fa-thumbs-up"></i>
                <p>Like</p>
                </span>
                <span class="flex_align">
                    <i style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/Ima_pXlhqeL.png?_nc_eui2=AeF6uljFVIglF01CfzTXTuNDJgpGdu_r-TsmCkZ27-v5O-8CvXYnHPccgcitY10DitvGRdNq_IpB1dAh_8hJ8VxD&quot;); background-position: 0px -571px; background-size: auto; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>
                    <p>Comment</p>
                </span>
                <span class="flex_align">
                    <i style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/Ima_pXlhqeL.png?_nc_eui2=AeF6uljFVIglF01CfzTXTuNDJgpGdu_r-TsmCkZ27-v5O-8CvXYnHPccgcitY10DitvGRdNq_IpB1dAh_8hJ8VxD&quot;); background-position: 0px -907px; background-size: auto; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>
                    <p>Share</p>
                </span>
            </div>
            <div class="allreact">
                <span><img src="images/like.png" alt=""></span>
                <span><img src="images/love.png" alt=""></span>
                <span><img src="images/care.png" alt=""></span>
                <span><img src="images/haha.png" alt=""></span>
                <span><img src="images/wow.png" alt=""></span>
                <span><img src="images/sad.png" alt=""></span>
                <span><img src="images/angry.png" alt=""></span>
            </div>
        </div>
    `;

    post.innerHTML = postContent;
    
    allPost.appendChild(post);
    allPost.insertBefore(post, allPost.childNodes[0])


    //new post delete
    const newPostDelete = document.querySelector('.post_close');
    newPostDelete.addEventListener('click', () => {
        post.remove()
    })

    const like = document.querySelectorAll('.like');
    const allReact = document.querySelectorAll('.allreact');

    like.forEach((singleLike, index) => {
    let isLikeHovered = false;
    let isAllReactHovered = false;

    singleLike.addEventListener('mouseenter', () => {
        isLikeHovered = true;
        updateDisplay(index)
    });

    singleLike.addEventListener('mouseleave', () => {
        isLikeHovered = false;
        updateDisplay(index)
    });

    allReact[index].addEventListener('mouseenter', () => {
        isAllReactHovered = true;
        updateDisplay(index)
    })

    allReact[index].addEventListener('mouseleave', () => {
        isAllReactHovered = false;
        updateDisplay(index)
    })

    singleLike.addEventListener('click', () => {
        allReact[index].style.display = 'none'
        like[index].classList.toggle('active')
    })

    function updateDisplay(idx) {
        setTimeout(() => {
            if (isLikeHovered || isAllReactHovered) {
                allReact[idx].style.display = 'block';
            } else {
                allReact[idx].style.display = 'none';
            }
        }, 800);  
    }
});

    // new post user img change = NPUIC
    const newPostUserProfile = document.querySelector('.ami .new_post_profile_img')

    setUpImageChange(profileInput, (imageSrc) => updateNewStoryUserProfile(imageSrc, newPostUserProfile));

    //new post date
    const postDate = document.querySelector('.date_visible');

    let seconds = 0;

    function updateCounter() {
        seconds++;
        
        const days = Math.floor(seconds / 86400);
        const hours = Math.floor((seconds % 86400) / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;

        let formattedTime = '';

        if (days >= 1) {
            formattedTime = pad(days) + 'd .';
        } else if (hours >= 1) {
            formattedTime = pad(hours) + 'h .';
        } else if (minutes >= 1) {
           formattedTime = minutes + 'm .';
       } else {
            formattedTime = 'Just Now .'
       }
        
        postDate.textContent = formattedTime;
    }

    function pad(value) {
        return value < 10 ? '0' + value : value;
    }

    setInterval(updateCounter, 1000);
}

createPost();

    const inputValue = newPostTextarea.value.trim();
    const newPostCaption = document.querySelector('.post_caption');
    newPostCaption.textContent = inputValue;

    const postImg = document.querySelector('.post_img');
    postImg.src = newPostImg.src;

    newPostTextarea.value = ''

    newPostImg.src = ''

    newPost.style.display = 'none'
    blur.style.display = 'none'
}

clickAddFunction(newPostButton, newPostButtonActivity);

// messenger search box
const msgSearchBar = document.querySelector('.message_search_bar input');
const singleChat = document.querySelectorAll('.sigle_chat');
const load = document.querySelector('.message_loading');

const searchFunction = (click, callback) => {
    click.addEventListener('input', () => {
        callback()
    })
}

const messageSearchFunction = () => {
    const msgSearchValue = msgSearchBar.value.toLowerCase();

    singleChat.forEach(name => {
        const convertName = name.querySelector('.chat_name').textContent.toLowerCase();

    if(convertName.includes(msgSearchValue) ){
        load.style.display = 'flex'
        name.style.display = 'none'

        setTimeout(() => {
            name.style.display = 'flex'
            load.style.display = 'none'
    }, 4000);
    }else{
        name.style.display = 'none'
    }
});
}

searchFunction(msgSearchBar, messageSearchFunction)

// old post user img change =OPUIC
const profileImg = document.querySelectorAll('.profile_img');
const profileInput = document.querySelector('#profileInput');

const profileImageChange = (imageSrc, userProfileElement) => {
    userProfileElement.forEach(img => {
        img.src = imageSrc;

        localStorage.setItem('addProfilePic', imageSrc);
    });
};

const addProfilePic = localStorage.getItem('addProfilePic');
if(addProfilePic) {
    profileImageChange(addProfilePic, profileImg)
}

setUpImageChange(profileInput, (imageSrc) => profileImageChange(imageSrc, profileImg));

// new story add
const storyInput = document.querySelector('#storyInput');

const story = document.querySelector('.story_section div');
const newStory = document.createElement('a');
    newStory.href = '#';
    newStory.className = 'story swiper-slide new_story s_s_c';

const newPostContent = `
    <img src="" alt="" class="story_img new_story_img">
    <img src=${dyProfile.src} alt="" class="user_story_img new_story_user_img">
    <p>${userName.textContent}</p>
    <i class="fa fa-heart story_like"></i>
`
newStory.innerHTML = newPostContent;

story.appendChild(newStory)
story.insertBefore(newStory, story.childNodes[2])

const newStoryImg = document.querySelector('.new_story_img');

const newStoryImgFun = (imageSrc, userProfileElement) => {
    userProfileElement.src = imageSrc;
    newStory.style.display = 'block'
    
    localStorage.setItem('addStory', imageSrc);
};

const addStory = localStorage.getItem('addStory');
if (addStory) {
    newStoryImgFun(addStory, newStoryImg);
}

setUpImageChange(storyInput, (imageSrc) => newStoryImgFun(imageSrc, newStoryImg));

const singleStory = document.querySelectorAll('.s_s_c');
const storyReact = document.querySelectorAll('.story_like');

singleStory.forEach((story, index) => {
    story.addEventListener('dblclick', () => {
        storyReact[index].style.display = 'block'
        setTimeout(() => {
            storyReact[index].style.fontSize = '4rem'
        }, 100);

        setTimeout(() => {
            storyReact[index].style.display = 'none'
            storyReact[index].style.fontSize = '2rem'
    }, 3000);
    })
});

// new story user profile change
const newStoryUserProfile = document.querySelector('.new_story_user_img')

setUpImageChange(profileInput, (imageSrc) => updateNewStoryUserProfile(imageSrc, newStoryUserProfile));

// search box open
const searchBoxFun = () => {
    searchBox.style.display = 'block'
}

clickAddFunction(searchInput, searchBoxFun);

// search box remove
const searchBoxArrow = document.querySelector('.right_arrow');

const searchBoxFunRemove = () => {
    searchBox.style.display = 'none'
}

clickAddFunction(searchBoxArrow, searchBoxFunRemove);
