<template>
  <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="friend in $store.state.friends" :key="friend">
            <td>{{ friend.id }}</td>
            <td>{{ friend.Names }}</td>
            <td>{{ friend.Age }}</td>
            <td>
              <button @click="editFriend" class="edit-btn">Edit</button>
              <button @click="deleteFriend()" class="delete-btn">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button @click="addFriend" class="add-btn">Add Friend</button>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
}
</script>
