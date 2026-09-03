"use client";

import { gql, useQuery } from "@apollo/client";

const GET_USERS = gql`
	query {
		users {
			data {
				id
				name
				email
			}
		}
	}
`;

export default function Home() {
	const { loading, error, data } = useQuery(GET_USERS);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<div>
			{data.users.data.map((user) => (
				<div key={user.id}>
					<h3>{user.name}</h3>
					<p>{user.email}</p>
				</div>
			))}
		</div>
	);
}
