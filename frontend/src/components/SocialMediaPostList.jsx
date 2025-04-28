<div style={{ border: '1px solid #ddd', padding: '20px', marginBottom: '20px', backgroundColor: '#fff', borderRadius: '5px' }}>
            <h2 style={{ color: '#38beba', marginBottom: '20px', textAlign: 'center' }}>Social Media Posts</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {socialMediaPosts.map((socialMediaPost) => (
                    <li key={socialMediaPost.id} style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '5px' }}>
                        {socialMediaPost.post_text}
                    </li>
                ))}
            </ul>
        </div>