import React from 'react'

export default function News({news}) {
  return (
    <>	
        <h2 id="news-title">News</h2>
        <div id="news_subsection"> 
            <img
                class="news_image"
                src={news.url}
                alt="planning"
            />

            <div class="flex_column news_description">
                <div class="news_title">Online House Sale</div>
                <div class="news_subtitle">
                <strong class="news_date">June 15, 2020</strong>
                </div>
                <div class="news_except">Please join us for a private sale of all things home ~ Bathroom, Dining, Kitchen, Living, Diving, Decor, Equipment, and more!</div>
            </div>
        </div>
    </>
  )
}
