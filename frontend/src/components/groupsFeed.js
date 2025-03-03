"use client"

import { useEffect, useState } from 'react';
import '../styles/groupsFeed.css';
import GroupList from './groupList';



export default function GroupsFeed() {
    const [groups, setGroups] = useState([]);
    useEffect(() => {
        const fetchGroups = async () => {
            const response = await fetch('/api/group/list', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });
            const data = await response.json();
            setGroups(data);
        };
        fetchGroups();
    }, []);
    return (
        <main className="main-content">
        <div className="myGroupsSide">
          <div className="header">
            <h2>My Groups</h2>
          </div>
          <div className="groupsList">
            <div className="group-item">
            <div className="group-info">
                <div className="group-title">Web</div>
                <div className="group-members">12 members</div>
              </div>
              <button className="open-group-btn">Open</button>
            </div>
            
            <div className="group-item">
            <div className="group-info">
                <div className="group-title">Data Science</div>
                <div className="group-members">8 members</div>
              </div>
              <button className="open-group-btn">Open</button>
            </div>
            
            <div className="group-item">
              <div className="group-info">
                <div className="group-title">UI/UX Design</div>
                <div className="group-members">15 members</div>
              </div>
              <button className="open-group-btn">Open</button>
            </div>

            <div className="group-item">
              <div className="group-info">
                <div className="group-title">UI/UX Design</div>
                <div className="group-members">15 members</div>
              </div>
              <button className="open-group-btn">Open</button>
            </div>
            
            <div className="group-item">
              <div className="group-info">
                <div className="group-title">Machine Lea</div>
                <div className="group-members">10 members</div>
              </div>
              <button className="open-group-btn">Open</button>
            </div>
          </div>
        </div>

        <div class="content-area">
          <div class="group-creator">
            <div class="creator-header">
              <div class="creator-title">Create a New Group</div>
              <button class="create-btn">+ Create Group</button>
            </div>
          </div>

        <div class="groups-feed">
          <div class="feed-group-item">
            <div class="feed-group-header">
              <div class="feed-group-title">JavaScript Enthusiasts</div>
              <div class="feed-group-date">Created: March 1, 2025</div>
            </div>
            <div class="feed-group-description">
              A community dedicated to JavaScript developers of all levels. Share your projects, discuss new frameworks, and help each other solve coding challenges.
            </div>
            <div class="feed-group-footer">
              <div class="feed-group-meta">87 members • 23 posts</div>
              <button class="join-group-btn">Join Group</button>
            </div>
          </div>

          <div class="feed-group-item">
            <div class="feed-group-header">
              <div class="feed-group-title">AI & Machine Learning</div>
              <div class="feed-group-date">Created: February 25, 2025</div>
            </div>
            <div class="feed-group-description">
              Explore the fascinating world of artificial intelligence and machine learning. From beginner tutorials to advanced research discussions, this group covers it all.
            </div>
            <div class="feed-group-footer">
              <div class="feed-group-meta">156 members • 47 posts</div>
              <button class="join-group-btn">Join Group</button>
            </div>
          </div>

          <div class="feed-group-item">
            <div class="feed-group-header">
              <div class="feed-group-title">UI/UX Design Trends</div>
              <div class="feed-group-date">Created: February 20, 2025</div>
            </div>
            <div class="feed-group-description">
              Stay up-to-date with the latest trends in user interface and experience design. Share your portfolio, get feedback, and discuss innovative design concepts.
            </div>
            <div class="feed-group-footer">
              <div class="feed-group-meta">92 members • 18 posts</div>
              <button class="join-group-btn">Join Group</button>
            </div>
          </div>

          <div class="feed-group-item">
            <div class="feed-group-header">
              <div class="feed-group-title">Cloud Computing</div>
              <div class="feed-group-date">Created: February 15, 2025</div>
            </div>
            <div class="feed-group-description">
              Discuss cloud platforms, services, and best practices. From AWS to Azure to Google Cloud, explore the technologies that power modern applications.
            </div>
            <div class="feed-group-footer">
              <div class="feed-group-meta">118 members • 31 posts</div>
              <button class="join-group-btn">Join Group</button>
            </div>
          </div>
        </div>
      </div>

      <div class="groupInvitations">
        <div class="header">
          <h2>Group Invitations</h2>
        </div>
        <div class="invitationsList">
          <div class="invitation-item">
            <div class="invitation-info">
              <div class="invitation-title">Frontend Developer</div>
              <div class="invitation-members">28 members</div>
            </div>
            <div class="invitation-actions">
              <button class="accept-btn">Accept</button>
              <button class="cancel-btn">Cancel</button>
            </div>
          </div>
          <div class="invitation-item">
            <div class="invitation-info">
              <div class="invitation-title">Python Enthusiasts</div>
              <div class="invitation-members">42 members</div>
            </div>
            <div class="invitation-actions">
              <button class="accept-btn">Accept</button>
              <button class="cancel-btn">Cancel</button>
            </div>
          </div>
          <div class="invitation-item">
            <div class="invitation-info">
              <div class="invitation-title">DevOps Community</div>
              <div class="invitation-members">19 members</div>
            </div>
            <div class="invitation-actions">
              <button class="accept-btn">Accept</button>
              <button class="cancel-btn">Cancel</button>
            </div>
          </div>
          <div class="invitation-item">
            <div class="invitation-info">
              <div class="invitation-title">AI Research</div>
              <div class="invitation-members">34 members</div>
            </div>
            <div class="invitation-actions">
              <button class="accept-btn">Accept</button>
              <button class="cancel-btn">Cancel</button>
            </div>
          </div>
        </div>
      </div>
      </main>
    );
}