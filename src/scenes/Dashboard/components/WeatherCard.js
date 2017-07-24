import React from 'react';
import WebFont from 'webfontloader';
import { Card, CardTitle, CardText, Divider, List, ListItem, FontIcon } from 'react-md';

const degree = '\u00B0';

WebFont.load({
  custom: {
    families: ['WeatherIcons'],
    urls: ['https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.9/css/weather-icons.min.css'],
  },
});

function makeIcon(min, max, sunny = true) {
  return [
    <FontIcon
      key="icon"
      iconClassName={`wi wi-day-${sunny ? 'sunny' : 'cloudy'}`}
      className="icon-yellow"
      style={{ marginRight: 24 }}
    />,
    <span key="max" className="md-color--text">{`${max}${degree}`}</span>,
    '/',
    <span key="min" className="md-color--secondary-text">{`${min}${degree}`}</span>,
  ];
}


const thursday = makeIcon(15, 25, false);
const friday = makeIcon(12, 24);
const saturday = makeIcon(14, 22, false);
const sunday = makeIcon(17, 26);

const DashboardCardFlex = () => {

  return (
    <div className="card-flex-container">
      <Card className="weather-card">
        <CardTitle title="San Marcos" subtitle="Wed, 10:02 PM, Clear Skies" />
        <CardText className="weather-block">
          <h2 className="md-display-4 display-override">23</h2>
          <span className="fahrenheit md-display-2 display-override">{`${degree}F`}</span>
          <FontIcon iconClassName="wi wi-day-cloudy" className="icon-yellow icon-big" />
        </CardText>
        <List>
          <ListItem
            leftIcon={<FontIcon iconClassName="wi wi-strong-wind" />}
            primaryText="23 km/h"
          />
          <ListItem
            leftIcon={<FontIcon iconClassName="wi wi-rain" />}
            primaryText="45%"
          />
        </List>
        <Divider style={{marginTop: 10, marginBottom: 20 }} inset />
        <List ordered className="weather-list">
          <ListItem primaryText="Thursday" rightIcon={thursday} />
          <ListItem primaryText="Friday" rightIcon={friday} />
          <ListItem primaryText="Saturday" rightIcon={saturday} />
          <ListItem primaryText="Sunday" rightIcon={sunday} />
        </List>
      </Card>
    </div>
  )
};

export default DashboardCardFlex;