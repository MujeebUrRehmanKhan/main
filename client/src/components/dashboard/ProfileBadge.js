import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profileAction';

const ProfileBadge = props => {
  const [data, setData] = useState({
    fname: '',
    sname: '',
    status: '',
    skills: [],
    catched: false
  });

  const { fname, sname, skills, status, catched } = data;

  if (props.profile.profile == null && !props.profile.loading) {
    props.getCurrentProfile();
  }

  let skilos = ['Create Profile to Add skills'];

  try {
    if (props.profile.profile !== null && props.profile.profile.user !== null) {
      if (
        fname !== props.profile.profile.user.fname ||
        sname !== props.profile.profile.user.sname
      )
        // TODO : modification for update
        setData({
          ...data,
          fname: props.profile.profile.user.fname,
          sname: props.profile.profile.user.sname,
          status: props.profile.profile.status,
          skills: props.profile.profile.skills,
          catched: false
        });
      skilos = [
        'Web Development',
        'Wordpress Development',
        'Databases',
        'React Development',
        'Content Wrting',
        'Designing',
        'Databases',
        'React Development',
        'Content Wrting',
        'Designing'
      ];
    }
  } catch (err) {
    if (!catched)
      setData({
        ...data,
        fname: 'Initial',
        sname: 'Name',
        status: '(please create profile)',
        skills: ['Create Profile to Add skills'],
        catched: true
      });

    //skilos = ['Create Profile to Add skills'];

    console.log('There is no profile currently');
  }
  // FOR SKILLS

  const skillsbadges2 = skils => {
    if (skils.length > 6) {
      let fsix = skils.slice(0, 6);
      //console.log(fsix);
      return fsix.map((skl, i) => (
        <div className='profile-badge-category' key={i}>
          {skl}
        </div>
      ));
    } else {
      return skils.map((skl, i) => (
        <div className='profile-badge-category' key={i}>
          {skl}
        </div>
      ));
    }
  };

  const skillSection = (
    <div className='profile-badge-categories'>{skillsbadges2(skills)}</div>
  );

  return (
    <div className='card card-body profile-badge'>
      <div className='profile-badge-dp'>
        <img src='/inc/Mohsin_DP.jpg' className='rounded img-thumbnail' />
      </div>
      <div className='profile-badge-name'>
        {fname} {sname}
      </div>

      <div className='profile-badge-headline'>{status}</div>
      {skillSection}
      <div className='profile-badge-rating'>
        <i className='fas fa-star fa-fw' />
        <i className='fas fa-star fa-fw' />
        <i className='fas fa-star fa-fw' />
        <i className='fas fa-star-half-alt' />
        <i className='far fa-star fa-fw' />
        <br />
        <span className='profile-badge-rating-info'>(25 reviews)</span>
      </div>

      <div className='profile-badge-stats'>
        <div>
          Tasks Done: <span id='profile-tasks-done'>19</span> | Tasks Posted:{' '}
          <span id='profile-tasks-posted'>11</span> | Tasks Cancelled:{' '}
          <span id='profile-tasks-cancelled'>1</span> <br />
          Points Earned: <span id='profile-points-earned'>862</span> | Points
          Spent: <span id='profile-points-spent'>738</span>
        </div>
      </div>

      <span className='profile-badge-edit'>edit</span>
    </div>
  );
};

ProfileBadge.propTypes = {
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(ProfileBadge);
