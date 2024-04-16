/**
 * @namespace Database
 */

/**
 * @typedef { Object } Chat
 * @memberof Database
 *
 * @description TABLE: chats
 * @description Webhook: INSERT -> chats_send_notification
 *
 * @prop { string | Date } created_at
 * @prop { string } id
 * @prop { string | Member } member FK members.id
 * - Action: Reference updates -> No Action
 * - Action: Reference deleted -> Cascade
 * @prop { string } message
 * @prop { string | Team } team FK teams.id
 * - Action: Reference updates -> No Action
 * - Action: Reference deleted -> Cascade
 */

/**
 * @typedef { Object } Email
 * @memberof Database
 *
 * @description TABLE: emails
 * @description Webhook: INSERT -> emails_send
 * @description Webhook: UPDATE -> emails_delete_row
 *
 * @prop { string } id
 * @prop { string } from
 * @prop { string } html
 * @prop { boolean } sent
 * @prop { string } subject
 * @prop { string } text
 * @prop { string } to
 */

/**
 * @typedef { Object } Event
 * @memberof Database
 *
 * @description TABLE: events
 * @description Webhook: DELETE | INSERT | UPDATE -> events_send_notification
 *
 * @prop { string } id
 * @prop { string | Date } date_time
 * @prop { string } description
 * @prop { string | Team } team FK teams.id
 * - Action: Reference updates -> No Action
 * - Action: Reference deleted -> Cascade
 */

/**
 * @typedef { Object } EventMembers
 * @memberof Database
 *
 * @description TABLE: event_members
 * @description This table tracks event participation
 *
 * @prop { string | Event } event FK events.id
 * - Action: Reference updates -> No Action
 * - Action: Reference deleted -> Cascade
 * @prop { string } id
 * @prop { string | Member } member FK members.id
 * - Action: Reference updates -> No Action
 * - Action: Reference deleted -> Cascade
 * @prop { "in" | "maybe" | "out" } status
 * @prop { string | Team } team FK teams.id
 * - Action: Reference updates -> No Action
 * - Action: Reference deleted -> Cascade
 */

/**
 * @typedef { Object } Member
 * @memberof Database
 *
 * @description TABLE: members
 *
 * @prop { string | null } avatar_url
 * @prop { string } email
 * @prop { string } first_name
 * @prop { string } id
 * @prop { string } last_name
 */

/**
 * @typedef { Object } Message
 * @memberof Database
 *
 * @description TABLE: messages
 * @description Webhook: INSERT -> messages_add_recipients
 *
 * @prop { string | Date } created_at
 * @prop { string } id
 * @prop { string | Member } member FK members.id
 * - Action: Reference updates -> No Action
 * - Action: Reference deleted -> Cascade
 * @prop { string | Message | null } message FK messages.id
 * - Action: Reference updates -> No Action
 * - Action: Reference deleted -> Cascade
 * - Null if message is not a reply
 * @prop { string | null } recipients Null if message is a reply
 * @prop { string | null } subject Null if message is a reply
 * @prop { string | Team | null } team FK teams.id
 * - Action: Reference updates -> No Action
 * - Action: Reference deleted -> Cascade
 * - Null if message is a reply
 * @prop { string } text
 */

/**
 * @typedef { Object } MessageMember
 * @memberof Database
 *
 * @description TABLE: message_members
 * @description This table tracks the participants for a message
 * @description Webhook: INSERT -> message_members_send_notification
 *
 * @prop { string } id
 * @prop { string | Member } member FK members.id
 * - Action: Reference updates -> No Action
 * - Action: Reference deleted -> Cascade
 * @prop { string | Message } message FK messages.id
 * - Action: Reference updates -> No Action
 * - Action: Reference deleted -> Cascade
 * @prop { boolean } read
 */

/**
 * @typedef { Object } Notification
 * @memberof Database
 *
 * @prop { string } id
 * @prop { string | Member } member FK members.id
 * - Action: Reference updates -> No Action
 * - Action: Reference deleted -> Cascade
 * @prop { string } message
 * @prop { string } subject
 * @prop { string | Team } team FK teams.id
 * - Action: Reference updates -> No Action
 * - Action: Reference deleted -> Cascade
 */

/**
 * @typedef { Object } Team
 * @memberof Database
 *
 * @description TABLE: teams
 * @description Webhook: INSERT ->  add_team_member
 *                                  inserts row for admin to the team_members table
 * @description Webhook: INSERT ->  create_stripe_customer
 *                                  creates a stripe customer and adds the id to the teams table
 *
 * @prop { string | Member } admin FK members.id
 * - Action: Reference updates -> No Action
 * - Action: Reference deleted -> No Action
 * @prop { string } id
 * @prop { string } name
 * @prop { string } password
 * @prop { string } stripe_customer
 */

/**
 * @typedef { Object } TeamMember
 * @memberof Database
 *
 * @description TABLE: team_members
 * @description This table tracks the members of a team
 *
 * @prop { boolean } active
 * @prop { string } id
 * @prop { string | Member } member FK members.id
 * - Action: Reference updates -> No Action
 * - Action: Reference deleted -> Cascade
 * @prop { string | Team } team FK teams.id
 * - Action: Reference updates -> No Action
 * - Action: Reference deleted -> Cascade
 */
