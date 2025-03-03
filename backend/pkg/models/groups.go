package models

type Groups struct {
	Id           int    `json:"id"`
	Title        string `json:"title"`
	Description  string `json:"description"`
	CreatorId    int    `json:"creatorId"`
	CreatedAt    string `json:"createdAt"`
	Status       string `json:"status"`
	IsMember     bool   `json:"isMember"`
	TotalMembers int    `json:"totalMembers"`
}

type Group_Invi struct {
	GroupId int `json:"groupId"`
	UserId  int `json:"userId"`
}

type Group_Jion struct {
	GroupId    int `json:"groupId"`
	AcceptJoin int `json:"acceptJoin"`
}
