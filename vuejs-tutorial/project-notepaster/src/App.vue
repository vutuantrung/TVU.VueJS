<template>
  <h3>{{ title }}</h3>
  <div class="form">
    <div class="from-group">
      <div class="form-group">
        <label>Note Title</label>
        <input class="form-control" type="text" v-model="note.title" />
      </div>
      <div class="form-group">
        <label>Note Text</label>
        <textarea class="form-control" v-model="note.text"></textarea>
      </div>
    </div>
    <button class="btn btn-primary" @click="addNote">Submit</button>
  </div>
  <div class="col-sm-12">
    <div class="col-sm-4 note" v-for="(note, index) in notes" :key="index">
      <div class="card">
        <button class="close" @click="removeNote(index)">&times;</button>
        <div class="card-block">
          <h4 class="card-title">{{ note.title }}</h4>
          <h6 class="card-subtitle mb-2 text-muted">{{ note.date }}</h6>
          <p class="card-text">{{ note.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Notemaster',
      note: {
        title: '',
        text: '',
      },
      notes: [
        {
          title: 'Visited Hawaii',
          text: 'I loved the beaches and delicous fresh coco',
          date: new Date(Date.now()).toLocaleString(),
        },
      ],
    };
  },
  methods: {
    addNote() {
      let { text, title } = this.note;
      this.notes.push({
        text,
        title,
        date: new Date(Date.now()).toLocaleString(),
      });
    },
    removeNote(index) {
      this.notes.splice(index, 1);
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 20px;
}

.form {
  text-align: left;
}

.card {
  text-align: left;
  border: 1px solid #2c3e50;
  border-radius: 4px;
  padding-left: 8px;
  padding-right: 8px;
}

.note {
  padding: 5px;
}
</style>