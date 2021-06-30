async function newFormHandler(event) {
  event.preventDefault();

  const trail_name = document.querySelector('#trail_name').value;
  const nc_city = document.querySelector('#nc_city').value;
  const distance = document.querySelector('#distance').value;
  const difficulty_level = document.querySelector('#difficulty_level').value;
  const stroller_accessible = document.querySelector('#stroller_accessible:checked') ? true : false;
  const restrooms = document.querySelector('#restrooms:checked') ? true : false;
  const pet_friendly = document.querySelector('#pet_friendly:checked') ? true : false;

  const response = await fetch(`/api/trails/new`, {
    method: 'POST',
    body: JSON.stringify({
      trail_name,
      nc_city,
      distance,
      difficulty_level,
      stroller_accessible,
      restrooms,
      pet_friendly,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to add new trail');
  }
}

document
  .querySelector('#new-trail-form')
  .addEventListener('submit', newFormHandler);