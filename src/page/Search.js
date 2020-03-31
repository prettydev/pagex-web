import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Layout from "../components/layout/Layout";
import Centre from "../components/Centre";
import Side from "../components/Side";
import CardSideHome from "../components/card/CardSideHome";
import TopPage from "../components/TopPage";
import CardProfile from "../components/card/CardProfile";

import brian from "../image/brian.png";
import clara from "../image/clara.png";
import mark from "../image/mark.png";
import sean from "../image/sean.png";

import back1 from "../image/back1.png";
import back2 from "../image/back2.png";
import back3 from "../image/back3.png";
import back4 from "../image/back4.png";

const Wrapper = styled.div`
  h3 {
    width: 100%;
    font-size: 20px;
    text-align: center;
    font-weight: bold;
  }
`;

class Search extends Component {
  state = {
    cote: [
      {
        id: 1,
        back: back1,
        title: "Following the path",
        user: "Mark Dickson",
        photo: mark,
        date: " 07 January 2020"
      },
      {
        id: 2,
        back: back2,
        title: "Leaving the office",
        user: "Clark Monet",
        photo: brian,
        date: " 29 Decembre 2019"
      },
      {
        id: 3,
        back: back3,
        title: "Reading the sign",
        user: "Richard Poor",
        photo: brian,
        date: " 23 October 2019"
      },
      {
        id: 4,
        back: back4,
        title: "Making it happen",
        user: "Laura OG",
        photo: clara,
        date: " 29 Decembre 2019"
      }
    ],
    result: [
      {
        id: 1,
        user: "Jackson Lipski",
        photo: brian,
        activite: "activist ans Filmmaker"
      },
      {
        id: 2,
        user: "Clara Marco",
        photo: clara,
        activite: "author"
      },
      {
        id: 3,
        user: "Mark Dickson",
        photo: mark,
        activite: "author"
      },
      {
        id: 4,
        user: "Sean Pauolo",
        photo: sean,
        activite: "Photographe"
      }
    ]
  };

  render() {
    const searchText = this.props.match.params.data;

    const displayedList = this.state.result.filter(search => {
      let searchValue1 = search.user.toLowerCase();
      return searchValue1.indexOf(searchText) !== -1;
    });

    let rendu;

    if (displayedList.length === 0) {
      rendu = <p>Pas de résultat ...</p>;
    } else {
      rendu = displayedList.map(profile => {
        return (
          <CardProfile
            key={profile.id}
            photo={profile.photo}
            user={profile.user}
            activite={profile.activite}
          />
        );
      });
    }

    return (
      <Wrapper>
        <Layout>
          <Centre>
            <TopPage info="Search result ( 1 )" />
            <div>{rendu}</div>
          </Centre>
          <Side>
            <h3>Recommended</h3>
            {this.state.cote.map(latest => {
              return (
                <Link to={"/content/" + latest.id} key={latest.id}>
                  <CardSideHome
                    lien={latest.id}
                    image={latest.back}
                    title={latest.title}
                    photo={latest.photo}
                    user={latest.user}
                    date={latest.date}
                  />
                </Link>
              );
            })}
          </Side>
        </Layout>
      </Wrapper>
    );
  }
}

export default Search;
