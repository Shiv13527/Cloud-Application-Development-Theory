import { Avatar } from '@mui/material'
import './VideoCard.css';
import React from 'react'
import data from './data'
import Card from './Card';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function createCard(single_data) {

  return <Card
    num={single_data.id}
    ids={single_data.id}
    vdo={single_data.video_src}
    ava={single_data.avatar_src}
    pos={single_data.video_poster}
    title={single_data.video_title}
    chan={single_data.channelname}
    tex={single_data.subtext}

  />

}

function VideoCard() {
  const [searchTerm, setSearchTerm] = useState('')

  return (

    < div >
      <div>
        <div className='toppad'>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(event) => { setSearchTerm(event.target.value); }}
            />
            <div className='but'>
              <Button className='but' variant="outline-success">Search</Button>
            </div>
          </Form>
        </div>
        {data.filter((data) => {
          if (searchTerm == "") {

          } else if (data.video_title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
            return <Card
              ids={data.id}
              num={data.id + 1}
              vdo={data.video_src}
              ava={data.avatar_src}
              pos={data.video_poster}
              title={data.video_title}
              chan={data.channelname}
              tex={data.subtext}
            />


          }
        }).map((data) => {
          return <div>
            {console.log(data.id)}
            <Card
              ids={data.id}
              num={data.id + 1}
              vdo={data.video_src}
              ava={data.avatar_src}
              pos={data.video_poster}
              title={data.video_title}
              chan={data.channelname}
              tex={data.subtext}
            />
          </div>;
        })}
      </div>
      <div>
        {data.map(createCard)}
      </div>
    </ div>
  )
}
const full = document.getElementById('fullVideo')

export default VideoCard