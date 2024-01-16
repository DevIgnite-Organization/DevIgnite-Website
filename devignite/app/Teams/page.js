"use client";
import React, { useState } from "react";
import "../Partners/partners.css";
import Navbar from "@/components/Navbar/Navbar";
import BottomBar from "@/components/bottombar/BottomBar";
import Image from "next/image";
import Link from "next/link";

function page() {
  const [activeTab, setActiveTab] = useState("sponsors");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div classNameName="partners-main">
      <Navbar />
      <div classNameName="heading">Teams</div>
      <div classNameName="partners-container">
        <div classNameName="tabs-container">
          <div
            classNameName={`tab ${activeTab === "sponsors" ? "active" : ""}`}
            onClick={() => handleTabClick("sponsors")}
          >
            Organizers
          </div>
          <div
            classNameName={`tab ${
              activeTab === "communityPartners" ? "active" : ""
            }`}
            onClick={() => handleTabClick("communityPartners")}
          >
            Our Mentors
          </div>
        </div>

        <div classNameName="content-container">
          {activeTab === "sponsors" && (
            // Render content for the Sponsors tab
            <div classNameName="sponsors-main">
              <div classNameName="org-teams-main">
              <div classNameName="profile-box">
                  <div classNameName="profile-img">
                    <Image
                      src="/teams/umakant-sir.jpg"
                      width="500"
                      height="500"
                      alt="team"
                    />
                  </div>
                  <div classNameName="profile-details">
                    <div classNameName="profile-name">Dr.Umakant Gohatre</div>
                    <div classNameName="profile-tag">Faculty Co-ordinator</div>
                  </div>
                </div>
                <div classNameName="profile-box">
                  <div classNameName="profile-img">
                    <Image
                      src="/teams/chetan.jpg"
                      width="500"
                      height="500"
                      alt="team"
                    />
                  </div>
                  <div classNameName="profile-details">
                    <div classNameName="profile-name">Chetan Choudhari</div>
                    <div classNameName="profile-tag">Lead Organizer</div>
                    <div classNameName="profile-links">
                      <Link href="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-twitter"
                        >
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                        </svg>
                      </Link>
                      <Link href="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-linkedin"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect width="4" height="12" x="2" y="9" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      </Link>
                      <Link href="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-instagram"
                        >
                          <rect
                            width="20"
                            height="20"
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                          />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                <div classNameName="profile-box">
                  <div classNameName="profile-img">
                    <Image
                      src="/teams/anas.jpg"
                      width="500"
                      height="500"
                      alt="team"
                    />
                  </div>
                  <div classNameName="profile-details">
                    <div classNameName="profile-name">Anas Khan</div>
                    <div classNameName="profile-tag">Co-Lead Organizer</div>
                    <div classNameName="profile-links">
                      <Link href="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-twitter"
                        >
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                        </svg>
                      </Link>
                      <Link href="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-linkedin"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect width="4" height="12" x="2" y="9" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      </Link>
                      <Link href="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-instagram"
                        >
                          <rect
                            width="20"
                            height="20"
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                          />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                <div classNameName="profile-box">
                  <div classNameName="profile-img">
                    <Image
                      src="/teams/danish.jpg"
                      width="500"
                      height="500"
                      alt="team"
                    />
                  </div>
                  <div classNameName="profile-details">
                    <div classNameName="profile-name">Siddiqui Danish</div>
                    <div classNameName="profile-tag">Co-Lead Organizer</div>
                    <div classNameName="profile-links">
                      <Link href="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-twitter"
                        >
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                        </svg>
                      </Link>
                      <Link href="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-linkedin"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect width="4" height="12" x="2" y="9" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      </Link>
                      <Link href="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-instagram"
                        >
                          <rect
                            width="20"
                            height="20"
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                          />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                <div classNameName="profile-box">
                  <div classNameName="profile-img">
                    <Image
                      src="/teams/sangharaj.jpg"
                      width="500"
                      height="500"
                      alt="team"
                    />
                  </div>
                  <div classNameName="profile-details">
                    <div classNameName="profile-name">Sangharaj jadhav</div>
                    <div classNameName="profile-tag">Tech Lead</div>
                    <div classNameName="profile-links">
                      <Link href="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-twitter"
                        >
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                        </svg>
                      </Link>
                      <Link href="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-linkedin"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect width="4" height="12" x="2" y="9" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      </Link>
                      <Link href="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-instagram"
                        >
                          <rect
                            width="20"
                            height="20"
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                          />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                <div classNameName="profile-box">
                  <div classNameName="profile-img">
                    <Image
                      src="/teams/hamsika-2.jpg"
                      width="500"
                      height="500"
                      alt="team"
                    />
                  </div>
                  <div classNameName="profile-details">
                    <div classNameName="profile-name">Hamsika Deva</div>
                    <div classNameName="profile-tag">Logistic Lead</div>
                    <div classNameName="profile-links">
                      <Link href="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-twitter"
                        >
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                        </svg>
                      </Link>
                      <Link href="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-linkedin"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect width="4" height="12" x="2" y="9" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      </Link>
                      <Link href="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-instagram"
                        >
                          <rect
                            width="20"
                            height="20"
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                          />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                <div classNameName="profile-box">
                  <div classNameName="profile-img">
                    <Image
                      src="/teams/mihir.jpg"
                      width="500"
                      height="500"
                      alt="team"
                    />
                  </div>
                  <div classNameName="profile-details">
                    <div classNameName="profile-name">Mihir Patil</div>
                    <div classNameName="profile-tag">Management Lead</div>
                    <div classNameName="profile-links">
                      <Link href="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-twitter"
                        >
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                        </svg>
                      </Link>
                      <Link href="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-linkedin"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect width="4" height="12" x="2" y="9" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      </Link>
                      <Link href="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-instagram"
                        >
                          <rect
                            width="20"
                            height="20"
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                          />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                <div classNameName="profile-box">
                  <div classNameName="profile-img">
                    <Image
                      src="/teams/muiz.jpeg"
                      width="500"
                      height="500"
                      alt="team"
                    />
                  </div>
                  <div classNameName="profile-details">
                    <div classNameName="profile-name">Muiz Zatam</div>
                    <div classNameName="profile-tag">Documentation Lead</div>
                    <div classNameName="profile-links">
                      <Link href="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-twitter"
                        >
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                        </svg>
                      </Link>
                      <Link href="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-linkedin"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect width="4" height="12" x="2" y="9" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      </Link>
                      <Link href="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-instagram"
                        >
                          <rect
                            width="20"
                            height="20"
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                          />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                <div classNameName="profile-box">
                  <div classNameName="profile-img">
                    <Image
                      src="/teams/sanjana.jpg"
                      width="500"
                      height="500"
                      alt="team"
                    />
                  </div>
                  <div classNameName="profile-details">
                    <div classNameName="profile-name">Sanjana Ghosh</div>
                    <div classNameName="profile-tag">Media Lead</div>
                    <div classNameName="profile-links">
                      <Link href="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-twitter"
                        >
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                        </svg>
                      </Link>
                      <Link href="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-linkedin"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect width="4" height="12" x="2" y="9" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      </Link>
                      <Link href="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-instagram"
                        >
                          <rect
                            width="20"
                            height="20"
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                          />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          )}

          {activeTab === "communityPartners" && (
            // Render content for the Community Partners tab
            <div>
              {/* ... */}
              <p></p>
            </div>
          )}
        </div>
      </div>
      <BottomBar />
    </div>
  );
}

export default page;
