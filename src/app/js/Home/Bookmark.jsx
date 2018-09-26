import React, { Component } from 'react';
import BookmarkLi from './BookmarkLi';


class Bookmark extends Component {
  render() {
    const bookmark = this.props.bookmark;
    const meetups = this.props.meetup;
    const bookmarkLi = [];

    // getting bookmarked meetups
    for (let i = 0; i < meetups.length; i++) {
      for (let j = 0; j < bookmark.length; j++) {
        if (meetups[i].id == bookmark[j]) {
          bookmarkLi.push(meetups[i])
        }
      }
    }

    console.log('@Bookmark.jsx bookmarkLi: ', bookmarkLi)

    const mappedBookmark = bookmarkLi.map((el, i) =>
      <BookmarkLi
        key={i}
        id={el.id}
        name={el.name}
      />
    )

    return (
      <div>
        {mappedBookmark}
      </div>
    );
  }
}

export default Bookmark;