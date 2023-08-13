export class UserInfo {
    constructor(userNameSelector, profileStatusSelector, userProfileAvatar) {
    this._userName = document.querySelector(userNameSelector);
    this._userStatus = document.querySelector(profileStatusSelector);
    this._userAvatar = document.querySelector(userProfileAvatar);
    this._userId = '';
    }

    getUserInfo() {
        return {
          name: this._userName.textContent,
          about: this._userStatus.textContent,
          avatar: this._userAvatar.src,
          id: this._userId
        };
      }
    
      setUserInfo(name, about, id) {
        if (name !== undefined) {
          this._userName.textContent = name;
        }
        if (about !== undefined) {
          this._userStatus.textContent = about;
        }
        if (id !== undefined) {
          this._userId = id;
        }
      }

      setUserAvatar(avatar) {
        if (avatar !== undefined) {
          this._profileAvatar.style.backgroundImage = `url('${avatar}')`;
        }
      }
}