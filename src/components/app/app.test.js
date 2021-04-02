import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';

import {AuthorizationStatus} from '../../const';

import App from './app';

const mockStore = configureStore({});

const mockFilms = [
      {
        description: 'Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.',
        rating: 3.3,
        director: 'Justin Kurzel',
        starring: [
          'Michael Fassbender',
          'Marion Cotillard',
          'Jack Madigan'
        ],
        genre: 'Drama',
        released: 2015,
        id: 1,
        image: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg',
        video: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
        title: 'Macbeth',
        runTime: 113,
        background: '#F1E9CE',
        backgroundImg: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Macbeth.jpg',
        isFavorite: false,
        poster: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Macbeth.jpg',
        scoresCount: 48798,
        videoLink: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4'
      },
      {
        description: 'Vicenarian Richard travels to Thailand and finds himself in possession of a strange map. Rumours state that it leads to a solitary beach paradise, a tropical bliss. Excited and intrigued, he sets out to find it.',
        rating: 3.3,
        director: 'Danny Boyle',
        starring: [
          'Leonardo DiCaprio',
          'Daniel York',
          'Patcharawan Patarakijjanon'
        ],
        genre: 'Adventure',
        released: 2000,
        id: 2,
        image: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/beach.jpg',
        video: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
        title: 'Beach',
        runTime: 119,
        background: '#EBC996',
        backgroundImg: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/background/beach.jpg',
        isFavorite: false,
        poster: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/beach.jpg',
        scoresCount: 207824,
        videoLink: 'http://media.xiph.org/mango/tears_of_steel_1080p.webm'
      },
      {
        description: 'A year after their father\'s funeral, three brothers travel across India by train in an attempt to bond with each other.',
        rating: 3.6,
        director: 'Wes Anderson',
        starring: [
          'Owen Wilson',
          'Adrien Brody',
          'Jason Schwartzman'
        ],
        genre: 'Adventure',
        released: 2007,
        id: 3,
        image: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/dardjeeling_limited.jpg',
        video: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
        title: 'Dardjeeling Limited',
        runTime: 91,
        background: '#AD9F8B',
        backgroundImg: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Dardjeeling_Limited.jpg',
        isFavorite: false,
        poster: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Dardjeeling_Limited.jpg',
        scoresCount: 165106,
        videoLink: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4'
      },
      {
        description: 'Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.',
        rating: 4.1,
        director: 'Ethan Coen',
        starring: [
          'Tommy Lee Jones',
          'Javier Bardem',
          'Josh Brolin'
        ],
        genre: 'Crime',
        released: 2007,
        id: 4,
        image: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/no-country-for-old-men.jpg',
        video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
        title: 'No Country for Old Men',
        runTime: 122,
        background: '#BDAD8F',
        backgroundImg: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/background/No_Country_for_Old_Men.jpg',
        isFavorite: false,
        poster: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/No_Country_for_Old_Men.jpg',
        scoresCount: 764976,
        videoLink: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4'
      },
      {
        description: 'In 1954, a U.S. Marshal investigates the disappearance of a murderer, who escaped from a hospital for the criminally insane.',
        rating: 4.1,
        director: 'Martin Scorsese',
        starring: [
          'Leonardo DiCaprio',
          'Emily Mortimer',
          'Mark Ruffalo'
        ],
        genre: 'Thriller',
        released: 2010,
        id: 5,
        image: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/shutter-island.jpg',
        video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
        title: 'Shutter Island',
        runTime: 138,
        background: '#977461',
        backgroundImg: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Shutter_Island.jpg',
        isFavorite: false,
        poster: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Shutter_Island.jpg',
        scoresCount: 1002557,
        videoLink: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4'
      },
      {
        description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
        rating: 4.4,
        director: 'Wachowski Brothers',
        starring: [
          'Keanu Reeves',
          'Laurence Fishburne',
          'Carrie-Anne Moss'
        ],
        genre: 'Action',
        released: 1999,
        id: 6,
        image: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/matrix.jpg',
        video: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
        title: 'Matrix',
        runTime: 136,
        background: '#B9B27E',
        backgroundImg: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/background/matrix.jpg',
        isFavorite: false,
        poster: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/matrix.jpg',
        scoresCount: 1503092,
        videoLink: 'http://media.xiph.org/mango/tears_of_steel_1080p.webm'
      },
      {
        description: 'Young nobleman Orlando is commanded by Queen Elizabeth I to stay forever young. Miraculously, he does just that. The film follows him as he moves through several centuries of British history, experiencing a variety of lives and relationships along the way, and even changing sex.',
        rating: 2.6,
        director: 'Sally Potter',
        starring: [
          'Tilda Swinton',
          'Billy Zane',
          'Quentin Crisp'
        ],
        genre: 'Drama',
        released: 1992,
        id: 7,
        image: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/orlando.jpg',
        video: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
        title: 'Orlando',
        runTime: 94,
        background: '#D8D3BD',
        backgroundImg: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Orlando.jpg',
        isFavorite: false,
        poster: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Orlando.jpg',
        scoresCount: 12292,
        videoLink: 'http://media.xiph.org/mango/tears_of_steel_1080p.webm'
      },
      {
        description: 'A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.',
        rating: 4,
        director: 'Alejandro G. Iñárritu',
        starring: [
          'Leonardo DiCaprio',
          'Tom Hardy',
          'Will Poulter'
        ],
        genre: 'Action',
        released: 2015,
        id: 8,
        image: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/revenant.jpg',
        video: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
        title: 'The Revenant',
        runTime: 156,
        background: '#92918B',
        backgroundImg: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Revenant.jpg',
        isFavorite: false,
        poster: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Revenant.jpg',
        scoresCount: 618498,
        videoLink: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4'
      },
      {
        description: 'A young man who was sentenced to seven years in prison for robbing a post office ends up spending three decades in solitary confinement. During this time, his own personality is supplanted by his alter-ego, Charles Bronson.',
        rating: 3.6,
        director: 'Nicolas Winding Refn',
        starring: [
          'Tom Hardy',
          'Kelly Adams',
          'Luing Andrews'
        ],
        genre: 'Action',
        released: 2008,
        id: 9,
        image: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/bronson.jpg',
        video: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
        title: 'Bronson',
        runTime: 92,
        background: '#73B39A',
        backgroundImg: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/background/bronson.jpg',
        isFavorite: false,
        poster: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/bronson.jpg',
        scoresCount: 109661,
        videoLink: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4'
      },
      {
        description: 'In 1862, Amsterdam Vallon returns to the Five Points area of New York City seeking revenge against Bill the Butcher, his father\'s killer.',
        rating: 8.8,
        director: 'Martin Scorsese',
        starring: [
          'Leonardo DiCaprio',
          'Cameron Diaz',
          'Daniel Day-Lewis'
        ],
        genre: 'Crime',
        released: 2002,
        id: 10,
        image: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/gangs_of_new_york.jpg',
        video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
        title: 'Gangs of new york',
        runTime: 167,
        background: '#A6B7AC',
        backgroundImg: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/background/gangs_of_new_york.jpg',
        isFavorite: false,
        poster: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Gangs_of_New_York_Poster.jpg',
        scoresCount: 370881,
        videoLink: 'http://media.xiph.org/mango/tears_of_steel_1080p.webm'
      },
      {
        description: 'A pair of young lovers flee their New England town, which causes a local search party to fan out to find them.',
        rating: 7.9,
        director: 'Wes Anderson',
        starring: [
          'Jared Gilman',
          'Kara Hayward',
          'Bruce Willis'
        ],
        genre: 'Adventure',
        released: 2012,
        id: 11,
        image: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/moonrise-kingdom.jpg',
        video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
        title: 'Moonrise Kingdom',
        runTime: 94,
        background: '#D8E3E5',
        backgroundImg: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Moonrise_Kingdom.jpg',
        isFavorite: false,
        poster: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Moonrise_Kingdom.jpg',
        scoresCount: 291183,
        videoLink: 'http://media.xiph.org/mango/tears_of_steel_1080p.webm'
      },
      {
        description: 'After a sudden attack on the MI5, Johnny English, Britain\'s most confident yet unintelligent spy, becomes Britain\'s only spy.',
        rating: 10,
        director: 'Peter Howitt',
        starring: [
          'Rowan Atkinson',
          'John Malkovich',
          'Natalie Imbruglia'
        ],
        genre: 'Comedy',
        released: 2003,
        id: 12,
        image: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/johnny-english.jpg',
        video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
        title: 'Johnny English',
        runTime: 88,
        background: '#F0DBA2',
        backgroundImg: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Johnny_English.jpg',
        isFavorite: false,
        poster: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Johnny_English.jpg',
        scoresCount: 136843,
        videoLink: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4'
      },
      {
        description: 'A look into the daily (or rather, nightly) lives of three vampires who\'ve lived together for over 100 years, in Staten Island.',
        rating: 7.2,
        director: 'Jemaine Clement',
        starring: [
          'Kayvan Novak',
          'Matt Berry',
          'Natasia Demetriou'
        ],
        genre: 'Comedy',
        released: 2019,
        id: 13,
        image: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/what-we-do-in-the-shadows.jpg',
        video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
        title: 'What We Do in the Shadows',
        runTime: 30,
        background: '#A39E81',
        backgroundImg: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/background/What-We-Do-in-the-Shadows.jpg',
        isFavorite: false,
        poster: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/What-We-Do-in-the-Shadows.jpg',
        scoresCount: 6173,
        videoLink: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4'
      },
      {
        description: 'Kevin\'s mother struggles to love her strange child, despite the increasingly dangerous things he says and does as he grows up. But Kevin is just getting started, and his final act will be beyond anything anyone imagined.',
        rating: 3.8,
        director: 'Lynne Ramsay',
        starring: [
          'Tilda Swinton',
          'John C. Reilly',
          'Ezra Miller'
        ],
        genre: 'Drama',
        released: 2011,
        id: 14,
        image: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/we-need-to-talk-about-kevin.jpg',
        video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
        title: 'We need to talk about Kevin',
        runTime: 112,
        background: '#E1DFDE',
        backgroundImg: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/background/We_need_to_talk_about_Kevin.jpg',
        isFavorite: false,
        poster: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/We_need_to_talk_about_Kevin.jpg',
        scoresCount: 123240,
        videoLink: 'http://media.xiph.org/mango/tears_of_steel_1080p.webm'
      },
      {
        description: 'Identical twin gangsters Ronald and Reginald Kray terrorize London during the 1960s.',
        rating: 3.5,
        director: 'Brian Helgeland',
        starring: [
          'Tom Hardy',
          'Emily Browning',
          'Taron Egerton'
        ],
        genre: 'Crime',
        released: 2015,
        id: 15,
        image: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/legend.jpg',
        video: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
        title: 'Legend',
        runTime: 132,
        background: '#E1DAD7',
        backgroundImg: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/background/legend.jpg',
        isFavorite: false,
        poster: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Legend.jpg',
        scoresCount: 138487,
        videoLink: 'http://media.xiph.org/mango/tears_of_steel_1080p.webm'
      },
      {
        description: 'Bohemian Rhapsody is a foot-stomping celebration of Queen, their music and their extraordinary lead singer Freddie Mercury. Freddie defied stereotypes and shattered convention to become one of the most beloved entertainers on the planet. The film traces the meteoric rise of the band through their iconic songs and revolutionary sound. They reach unparalleled success, but in an unexpected turn Freddie, surrounded by darker influences, shuns Queen in pursuit of his solo career. Having suffered greatly without the collaboration of Queen, Freddie manages to reunite with his bandmates just in time for Live Aid. While bravely facing a recent AIDS diagnosis, Freddie leads the band in one of the greatest performances in the history of rock music. Queen cements a legacy that continues to inspire outsiders, dreamers and music lovers to this day.',
        rating: 6.1,
        director: 'Bryan Singer',
        starring: [
          'Rami Malek',
          'Lucy Boynton',
          'Gwilym Lee'
        ],
        genre: 'Drama',
        released: 2018,
        id: 16,
        image: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/bohemian_rhapsody.jpg',
        video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
        title: 'Bohemian Rhapsody',
        runTime: 134,
        background: '#929FA5',
        backgroundImg: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Bohemian_Rhapsody.jpg',
        isFavorite: false,
        poster: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Bohemian_Rhapsody.jpg',
        scoresCount: 338903,
        videoLink: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4'
      },
      {
        description: 'Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.',
        rating: 0.2,
        director: 'Guy Ritchie',
        starring: [
          'Jason Statham',
          'Brad Pitt',
          'Benicio Del Toro'
        ],
        genre: 'Comedy',
        released: 2000,
        id: 17,
        image: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/snatch.jpg',
        video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
        title: 'Snatch',
        runTime: 104,
        background: '#FDFDFC',
        backgroundImg: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Snatch.jpg',
        isFavorite: false,
        poster: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Snatch.jpg',
        scoresCount: 716577,
        videoLink: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4'
      },
      {
        description: 'True story of Heinrich Harrer, an Austrian mountain climber who became friends with the Dalai Lama at the time of China\'s takeover of Tibet.',
        rating: 3.6,
        director: 'Jean-Jacques Annaud',
        starring: [
          'Brad Pitt',
          'David Thewlis',
          'BD Wong'
        ],
        genre: 'Adventure',
        released: 1997,
        id: 18,
        image: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/seven-years-in-tibet.jpg',
        video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
        title: 'Seven Years in Tibet',
        runTime: 136,
        background: '#C6CADF',
        backgroundImg: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Seven_Years_in_Tibet.jpg',
        isFavorite: false,
        poster: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Seven_Years_in_Tibet.jpg',
        scoresCount: 112612,
        videoLink: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4'
      },
      {
        description: 'A biopic depicting the early years of legendary Director and aviator Howard Hughes\' career from the late 1920s to the mid 1940s.',
        rating: 9.8,
        director: 'Martin Scorsese',
        starring: [
          'Leonardo DiCaprio',
          'Cate Blanchett',
          'Kate Beckinsale'
        ],
        genre: 'Drama',
        released: 2014,
        id: 19,
        image: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/aviator.jpg',
        video: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
        title: 'Aviator',
        runTime: 170,
        background: '#D6CDAF',
        backgroundImg: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Aviator.jpg',
        isFavorite: false,
        poster: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Aviator.jpg',
        scoresCount: 307174,
        videoLink: 'http://media.xiph.org/mango/tears_of_steel_1080p.webm'
      },
      {
        description: 'As Earth is invaded by alien tripod fighting machines, one family fights for survival.',
        rating: 9.3,
        director: 'Steven Spielberg',
        starring: [
          'Tom Cruise',
          'Dakota Fanning',
          'Tim Robbins'
        ],
        genre: 'Adventure',
        released: 2005,
        id: 20,
        image: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/war-of-the-worlds.jpg',
        video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
        title: 'War of the Worlds',
        runTime: 116,
        background: '#9B7E61',
        backgroundImg: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/background/War_of_the_Worlds.jpg',
        isFavorite: false,
        poster: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/War_of_the_Worlds.jpg',
        scoresCount: 386834,
        videoLink: 'http://media.xiph.org/mango/tears_of_steel_1080p.webm'
      },
      {
        description: 'A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan over thirty years later, where he once again must confront the ghosts and regrets of his old life.',
        rating: 9.9,
        director: 'Sergio Leone',
        starring: [
          'Robert De Niro',
          'James Woods',
          'Elizabeth McGovern'
        ],
        genre: 'Crime',
        released: 1984,
        id: 21,
        image: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/Once_Upon_a_Time_in_America.jpg',
        video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
        title: 'Once Upon a Time in America',
        runTime: 229,
        background: '#CBAC79',
        backgroundImg: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/background/ones_upon_a_time_in_america.jpg',
        isFavorite: false,
        poster: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Once_Upon_a_Time_in_America.jpg',
        scoresCount: 276395,
        videoLink: 'http://media.xiph.org/mango/tears_of_steel_1080p.webm'
      },
      {
        description: 'The lives of two mob hitmen, a boxer, a gangster & his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
        rating: 1.5,
        director: 'Quentin Tarantino',
        starring: [
          'John Travolta',
          'Uma Thurman',
          'Samuel L. Jackson'
        ],
        genre: 'Crime',
        released: 1994,
        id: 22,
        image: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/pulp-fiction.jpg',
        video: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
        title: 'Pulp Fiction',
        runTime: 153,
        background: '#795433',
        backgroundImg: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Pulp_Fiction.jpg',
        isFavorite: false,
        poster: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Pulp_Fiction.jpg',
        scoresCount: 1635992,
        videoLink: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4'
      },
      {
        description: 'In an effort to thwart Grindelwald\'s plans of raising pure-blood wizards to rule over all non-magical beings, Albus Dumbledore enlists his former student Newt Scamander, who agrees to help, though he\'s unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among the truest friends and family, in an increasingly divided wizarding world.',
        rating: 3.4,
        director: 'David Yates',
        starring: [
          'Eddie Redmayne',
          'Katherine Waterston',
          'Dan Fogler'
        ],
        genre: 'Fantasy',
        released: 2018,
        id: 23,
        image: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/fantastic-beasts-the-crimes-of-grindelwald.jpg',
        video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
        title: 'Fantastic Beasts: The Crimes of Grindelwald',
        runTime: 134,
        background: '#B6A99F',
        backgroundImg: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Fantastic_Beasts.jpg',
        isFavorite: false,
        poster: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Fantastic_Beasts.jpg',
        scoresCount: 160757,
        videoLink: 'http://media.xiph.org/mango/tears_of_steel_1080p.webm'
      },
      {
        description: 'A father and son go on the run, pursued by the government and a cult drawn to the child\'s special powers.',
        rating: 3.3,
        director: 'Jeff Nichols',
        starring: [
          'Michael Shannon',
          'Joel Edgerton',
          'Kirsten Dunst '
        ],
        genre: 'Action',
        released: 2016,
        id: 24,
        image: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/midnight-special.jpg',
        video: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
        title: 'Midnight Special',
        runTime: 112,
        background: '#828585',
        backgroundImg: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Midnight_Special.jpg',
        isFavorite: false,
        poster: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Midnight_Special.jpg',
        scoresCount: 67815,
        videoLink: 'http://media.xiph.org/mango/tears_of_steel_1080p.webm'
      }
];

const mockGenres = [
  `Drama`,
  `Comedy`,
  `Thriller`
];

describe(`Test routing`, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);

  it(`Render 'Main' when user navigate to '/' url`, () => {
    const history = createMemoryHistory();
    const store = mockStore({
      ALL_FILMS: {filmsToShow: 8, allFilms: mockFilms},
      FILM: {promoFilm: mockFilms[0]},
      GENRES: {genres: mockGenres},
      USER: {authorizationStatus: AuthorizationStatus.AUTH}
    });

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );
  });

  it(`Render 'SignIn' when user navigate to '/login' url`, () => {
    const store = mockStore({
      ALL_FILMS: {allFilms: mockFilms},
      FILM: {promoFilm: mockFilms[0]},
      GENRES: {genres: mockGenres},
      USER: {authorizationStatus: AuthorizationStatus.AUTH}
    });

    const history = createMemoryHistory();
    history.push(`/login`);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );
  });

  it(`Render 'MyList' when user navigate to '/mylist' url`, () => {
    const store = mockStore({
      ALL_FILMS: {filmsToShow: 8, allFilms: mockFilms},
      FILM: {promoFilm: mockFilms[0]},
      GENRES: {genres: mockGenres},
      USER: {authorizationStatus: AuthorizationStatus.AUTH}
    });

    const history = createMemoryHistory();
    history.push(`/mylist`);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    // expect(screen.getByText(/Вы настоящий меломан!/i)).toBeInTheDocument();
    // expect(screen.getByText(/Вы ответили правильно на 8 вопросов/i)).toBeInTheDocument();
    // expect(screen.getByText(/Сыграть ещё раз/i)).toBeInTheDocument();
  });

  it(`Render 'FilmContainer' when user navigate to '/films/:id' url`, () => {
    const store = mockStore({
      ALL_FILMS: {allFilms: mockFilms},
      FILM: {currentFilm: mockFilms[0]},
      USER: {authorizationStatus: AuthorizationStatus.AUTH}
    });

    const history = createMemoryHistory();
    history.push(`/films/1`);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(`${mockFilms[0].title}`)).toBeInTheDocument();
    expect(screen.getByText(`${mockFilms[0].genre}`)).toBeInTheDocument();
    expect(screen.getByText(`${mockFilms[0].released}`)).toBeInTheDocument();
  });

  it(`Render 'AddReview' when user navigate to '/films/:id/review' url`, () => {
    const store = mockStore({
      FILM: {currentFilm: mockFilms[0]},
      USER: {authorizationStatus: AuthorizationStatus.AUTH}
    });

    const history = createMemoryHistory();
    history.push(`/films/1/review`);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Add review/i)).toBeInTheDocument();
  });

  it(`Render 'Player' when user navigate to '/player' url`, () => {
    const store =  mockStore({
      FILM: {promoFilm: mockFilms[0], currentFilm: mockFilms[1]},
      USER: {authorizationStatus: AuthorizationStatus.AUTH}
    });
    const history = createMemoryHistory();
    history.push(`/player/1`);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Toggler/i)).toBeInTheDocument();
    expect(screen.getByText(/Play/i)).toBeInTheDocument();
    expect(screen.getByText(/Transpotting/i)).toBeInTheDocument();
    expect(screen.getByText(/Full screen/i)).toBeInTheDocument();
  });

  it(`Render 'NotFound' when user navigate to /not-found route`, () => {
    const history = createMemoryHistory();
    history.push(`/not-found`);

    render(
        <redux.Provider store={mockStore({})}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(`Not found`)).toBeInTheDocument();
    expect(screen.getByText(`Go to the main page`)).toBeInTheDocument();
  });
});
